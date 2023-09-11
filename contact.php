<?php

if($_SERVER["REQUEST_METHOD"] == POST){
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];



    $to = "artpac2050@gmail.com";
    $subject = "Photoshoot Request - " . $subject . $firstName;
    $body = "Name: " . $firstName . " " . $lastName . "\n" . 
            "Email: " . $email . "\n" . 
            "Message: " . $message;

    if (mail($to, $subject, $body)){
        echo "Thank you, I will contact you soon";
    }else{
        echo "Something went wrong, Try again";
    }
}

?>