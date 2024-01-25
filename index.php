<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Accueil</title>
    <?php include "includes/css.php" ?>
</head>
<body>
<?php include "includes/header.php" ?>
<main>

</main>

<div class="container">
    <section class="biens">
        <h2><strong>Disponibles</strong> à la location</h2>
        <?php for ($i=0; $i < 4; $i++){
            include "includes/biensTeaser.php";
        }?>
        <div class="biens__cta">
            <a href="#" class="btn">Tous les logements à louer</a>
        </div>
    </section>
</div>


<?php include "includes/footer.php" ?>
</body>
</html>
