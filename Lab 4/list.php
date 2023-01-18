<?php  

$xml = simplexml_load_file("data.xml");

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Open+Sans:ital@1&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
        <title>F&F Media</title>
    </head>
    <body>
        <input type="checkbox" id="hmt" class="hidden_menu_b">
            <label class="btn_menu" for="hmt">
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
            </label>
            <ul class="hidden_menu">
                <li><a href="index.php" class="link">Новости</a></li>
                <li><a href="" class="link">Обзоры</a></li>
                <li><a href="" class="link">Разные интересности</a></li>
                <li><a href="create.php" class="link">Новый пост</a></li>
                <li><a href="list.php" class="link">Все ссылки</a></li>
            </ul>
        <header class="header container">
            <div class="header_logo">
                F&F
            </div>
            <div class="IMG_logo">
                <img src="IMG/F&F Logo.jpg" width="105" height="105" alt="">
            </div>
            <div class="header_text">
                Все ссылки
            </div>
        <div class="header_items">
            <div class="search">
            <form>
                <input type="text" placeholder="Искать здесь...">
                <button type="submit"></button>
              </form>
            </div>
        </div>
        </header>
        <main>
            <section>
            <ul>
                <li><a href="index.php" class="link">Новости</a></li>
                <li><a href="create.php" class="link">Новый пост</a></li>
            </ul>
            </section>
        </main>
</body>
</html>