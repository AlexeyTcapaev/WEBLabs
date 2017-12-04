<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <main>
            
           <?php 
                $pays = [intval($_REQUEST['pay1']),intval($_REQUEST['pay2']),intval($_REQUEST['pay3'])];
                $max= 0;
                $result = 0;
                for($i = 0; $i < 3; $i++){
                    $result += $pays[$i];
                    if($pays[$i] > $max){
                        $max = $pays[$i];
                    }
                }
                echo "<h1>".$_REQUEST['name'].", ваша общая зарплата: ".$result."</h1>";
                echo "<h2>Наиольшая зарплата ".$max." за три месяца: ".$_REQUEST['pay1'].", ".$_REQUEST['pay2'].", ".$_REQUEST['pay3']."</h2>";
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