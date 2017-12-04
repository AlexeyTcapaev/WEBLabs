var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  poststylus = require('poststylus'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  config = require("./config.json")
;
var folderNames = {
  build: "build",
  source: "src"
}

var plugins = makeHtmlPlugin(config)
plugins.push(
  new ExtractTextPlugin('styles/[name].css'),
  new webpack.LoaderOptionsPlugin({
    options: {
      stylus: {
        use: [poststylus(['autoprefixer'])]
      }
    }
  })
)

module.exports = {
  entry: makeEntity(config),
  output: {
    filename: "./scripts/bundle.[name].[hash].js",
    path: path.resolve(__dirname, "./" + folderNames.build)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ],
        exclude: [/node_modules/, /build/]
      },
      {
        test: /\.(jade|pug)$/,
        use: [
          "pug-loader"
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        use: ["file-loader"]
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        loaders: [
          'file-loader?name=./images/[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '30-50',
                speed: 5
              },
              mozjpeg: {
                quality: 90
              }
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
};


function makeEntity (config) {
  var folders = config.folders
  var res = {}
  var configFolderNames = Object.keys(folders)
  for(var i = 0; i < configFolderNames.length; i++){
    var name = configFolderNames[i]
    var folder = folders[name]
    for(var k = 0; k < folder.length; k++){
      res[folder[k]] = path.resolve(__dirname, "./" + folderNames.source + "/" + name + "/" + folder[k] + ".js")
    }
  }
  return res
}

function makeHtmlPlugin (config) {
  var folders = config.folders
  var res = []
  var configFolderNames = Object.keys(folders)
  for(var i = 0; i < configFolderNames.length; i++){
    var name = configFolderNames[i]
    var folder = folders[name]
    for(var k = 0; k < folder.length; k++){
      res.push(new HtmlWebpackPlugin({
        chunks: [folder[k]],
        template: "./" + folderNames.source + "/" + name + "/" + folder[k] + ".pug",
        filename: name + "/" + folder[k] + ".html",
        title: name + " | " + folder[k]
      }))
    }
  }
  return res
}