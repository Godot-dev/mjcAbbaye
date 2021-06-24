<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/headerFooter.css">
    <link rel="stylesheet" href="styles/section.css">
    <link rel="stylesheet" href="styles/contact.css">
    <title>MJC Abbaye</title>
</head>
<body>
    <div id="app">
        <myheader></myheader>
        <!-- Insérer reste contenu ici-->
        <h1> Nous contacter :</h1>
        <p class="t">Pour nous contacter, il suffit simplement de remplir les champs ci-dessous. 
            <br> Merci de préciser votre adresse mail afin que nous puissions vous recontacter.
            <br> Un mail sera automatiquement généré et envoyé à l'adresse mail <a href="mailto:secretariat@mjc-abbaye.org">secretariat@mjc-abbaye.org</a>
        </p>
        <form method="post">
            <div>
                <p>
                    <label for="objet">Objet :</label> <br>
                    <input type="text" name="objet" required class="m">
                </p>
                <p>
                    <label for="email">Adresse Mail :</label> <br>
                    <input type="email" name="email" required class="m">
                </p>
                <p>
                    <label for="message">Message :</label> <br>
                    <textarea name="message" id="message" cols="35" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" id="submit">
                </p>
            </div>
        </form>
        <?php 
            if(isset($_POST['message'])){
                $retour = mail('secretariat@mjc-abbaye.org', $_POST['objet'], $_POST['message'], 'From: ' . $_POST['email']);
                if($retour){
                    echo("<script> alert(\"Mail envoyé !\"); </script>");
                }else{
                    echo("<script> alert(\"ERREUR ! Le mail n'a pas été envoyé ! Merci d'envoyer un mail manuellement à l'adresse secretariat@mjc-abbaye.org\");</script>");
                }
            }
        ?>
        <myfooter></myfooter>
    </div>
    
    <script src="scripts/vue.js"></script>
    <script src="scripts/app.js"></script>
</body>
</html>