<?php

$Ime = $_POST["Ime"];
$DatumRodjenja = $_POST["DatumRodjenja"];
$Adresa = $_POST["Adresa"];
$EmailAdresa = $_POST["EmailAdresa"];
$Tel = $_POST["Tel"];
$Status = $_POST["Status"];
$Sanit = $_POST["Sanit"];
$Napomene = $_POST["Napomene"];


// Multiple recipients
$to = 'dzonimup@gmail.com'; // note the comma

// Subject
$subject = 'PRIJAVA';

// Message
$message = '
<html><head>
  <title>Prijava za posao</title>
</head>
<body style="
    background: url(&quot;https://johnyhub.github.io/img/logos/logo4.png&quot;);
    background-repeat:  no-repeat;
    background-position: 476px -26px;
    background-size: 167px;
">
  <p style="
    font-size:  22px;
    font-weight:  bold;
    /* background:  red; */
    border-bottom: 3px solid #4c96d7;
    width: 600px;
    padding-bottom: 46px;
">Nova prijava za posao <br><br> Broj:</p>
  <table style="padding-bottom: 25px;min-width: 400px;">
    <tbody><tr>
      <td style="
    font-size:  22px;
">Ime:</td><td style="
    font-size: 22px;
">'.$Ime.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Datum rodjenja:</td><td style="
    font-size: 22px;
">'.$DatumRodjenja.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Adresa:</td><td style="
    font-size: 22px;
">'.$Adresa.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Email:</td><td style="
    font-size: 22px;
">'.$EmailAdresa.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Telefon:</td><td style="
    font-size: 22px;
">'.$Tel.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Status:</td><td style="
    font-size: 22px;
">'.$Status.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Sanitarna:</td><td style="
    font-size: 22px;
">'.$Sanit.'</td>
    </tr>
    <tr>
      <td style="
    font-size: 22px;
">Napomena:</td><td style="
    font-size: 22px;
">'.$Napomene.'</td>
    </tr>
  </tbody></table>


</body></html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
//$headers[] = 'From: '.$Ime.' <'.$Napomene.'>';
$headers[] = 'From: '.$Ime.' <'.$EmailAdresa.'>';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));

//header("Location: https://http://www.gasmont.rs/success.html", true, 301);
header('Location: http://www.gasmont.rs/proba/success.html');

?>