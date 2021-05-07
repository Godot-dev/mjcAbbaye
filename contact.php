<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/headerFooter.css">
    <link rel="stylesheet" href="styles/section.css">
    <title>MJC Abbaye</title>
</head>
<body>
    <div id="app">
        <myheader></myheader>
        <!-- Insérer reste contenu ici-->
        <form method="post">
            <label for="nom">Nom</label>
            <input type="text" name="nom" required>
            <label for="email">Adresse Mail :</label>
            <input type="email" name="email" required>
            <label for="message">Message :</label>
            <input type="textarea" name="message">
            <input type="submit">
        </form>
        <?php 
            if(isset($_POST['message'])){
                $retour = mail('andreporte@gmail.com', 'Test usurpation identité', $_POST['message'], 'From: ' . $_POST['email']);
                if($retour){
                    echo("<p> Mail envoyé ! </p>");
                }else{
                    echo("<p> ERREUR ! Le mail n'a pas été envoyé ! </p>");
                }
            }
        ?>
        <myfooter></myfooter>
    </div>
    
    <script src="scripts/vue.js"></script>
    <script src="scripts/app.js"></script>
</body>
</html>