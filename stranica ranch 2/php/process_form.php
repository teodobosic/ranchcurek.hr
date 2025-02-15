<?php
// Provjera metode zahtjeva
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Prikupljanje podataka iz forme i njihovo čišćenje
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Provjera jesu li sva polja popunjena
    if (empty($name) || empty($email) || empty($message)) {
        // Preusmjeravanje natrag s porukom o pogrešci
        header("Location: kontakt.html?error=true");
        exit;
    }

    // Provjera ispravnosti email adrese
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Preusmjeravanje natrag s porukom o pogrešci
        header("Location: kontakt.html?error=true");
        exit;
    }

    // Postavljanje podataka za e-mail
    $to = "dobosicteo@gmail.com"; // Zamijenite sa svojom e-mail adresom
    $subject = "Nova poruka s kontakt forme";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Ime i prezime: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Poruka:\n$message\n";

    // Pokušaj slanja e-maila
    if (mail($to, $subject, $body, $headers)) {
        // Preusmjeravanje s uspjehom
        header("Location: kontakt.html?success=true");
        exit;
    } else {
        // Preusmjeravanje s porukom o pogrešci
        header("Location: kontakt.html?error=true");
        exit;
    }
} else {
    // Ako metoda nije POST, vraćamo pogrešku
    echo "Neispravan zahtjev.";
}
?>
