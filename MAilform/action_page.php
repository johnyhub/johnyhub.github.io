<?php

$first_name = $_POST["firstname"];
$last_name = $_POST["lastname"];
$email = $_POST["email"];

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
      <td>Ime:</td><td>'.$first_name.'</td>
    </tr>
    <tr>
      <td>Prezime:</td><td>'.$last_name.'</td>
    </tr>
    <tr>
      <td>Email:</td><td>'.$email.'</td>
    </tr>
  </table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'From: '.$first_name.' '.$last_name.' <'.$email.'>';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));

//header("Location: http://www.autopeka.rs/proba/success.html", true, 301);
header('Location: http://www.autopeka.rs/proba/success.html');

?>