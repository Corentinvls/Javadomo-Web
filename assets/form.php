<?php


if (isset($_POST['userMessage'])) {
        $retour = mail(
            'corentin.vallois@gmail.com', $_POST['object'],
            $_POST['userMessage'] . "\n\n" .
            'Phone number : ' . $_POST['telephone'] . "\n\n" .
            'From: ' . $_POST['email']
        );

            header('index.html');

}


?>