<?php
// Provjera je li forma poslana
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dohvaćanje podataka iz forme
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validacija podataka
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Postavljanje podataka za slanje emaila
        $to = "dobosicteo@gmail.com"; // Zamijenite s vašom email adresom
        $subject = "Nova poruka s kontakt forme";
        $body = "Ime: $name\nEmail: $email\nPoruka:\n$message";
        $headers = "From: $email";

        // Slanje emaila
        if (mail($to, $subject, $body, $headers)) {
            echo "Poruka je uspješno poslana!";
        } else {
            echo "Došlo je do greške prilikom slanja poruke.";
        }
    } else {
        echo "Molimo popunite sva polja ispravno.";
    }
} else {
    echo "Neispravan zahtjev.";
}
?>
