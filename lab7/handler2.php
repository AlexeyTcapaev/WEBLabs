<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <main>
            
           <?php 
                $str = $_REQUEST['str'];
                $arr = explode(" ", $str);
                array_splice($arr, 1, 1);
                $result = implode(" ", $arr);
                echo "<h1>Из строки: ".$str."</h1>";
                echo "<h1>Удалено второе слово: ".$result."</h1>";
           ?>
        </main>
        <style>
            html,body{
                width: 100%;
                margin: 0;
                padding: 0;
            }
            main{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            form div {
                margin: 1rem auto;
            }
        </style>
    </body>
</html>