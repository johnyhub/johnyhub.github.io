<?php

$Ime = $_POST["Ime"];
$DatumRodjenja = $_POST["DatumRodjenja"];
$Adresa = $_POST["Adresa"];

// Multiple recipients
$to = 'dzonimup@gmail.com'; // note the comma

// Subject
$subject = 'PRIJAVA';

// Message
$message = '
<html>
<head>
  <title>Prijava za posao</title>
</head>
<body>
  <p>Nova prijava za posao</p>
  <table>
    <tr>
      <td>Ime:</td><td>'.$Ime.'</td>
    </tr>
    <tr>
      <td>Prezime:</td><td>'.$DatumRodjenja.'</td>
    </tr>
    <tr>
      <td>Email:</td><td>'.$Adresa.'</td>
    </tr>
  </table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'From: '.$Ime.' '.$DatumRodjenja.' <'.$Adresa.'>';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));

//header("Location: https://johnyhub.github.io/success.html", true, 301);
header('Location: https://johnyhub.github.io/success.html');

?>