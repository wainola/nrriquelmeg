<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once('../vendor/autoload.php');

$mail = new PHPMailer;

$d = json_decode($_POST['data'], true);
$nombre = $d['nombre'];
$email = $d['email'];
$mensaje = $d['mensaje'];

// Enviado el correo.
$mail->CharSet = 'UTF-8';
$mail->From = $email;
$mail->FromName = "Contacto enviado por $nombre";
$mail->addAddress("nrriquelme@gmail.com", "Nicolas Riquelme");
$mail->addReplyTo($email, $nombre);

// NOTE: añadiendo el BCC
//$mail->addBCC("webmaster@santiagolab.cl");
$mail->isHTML(true);

$mail->Subject = "Contacto de $nombre";

$mail->Body = "<h3>Contacto de $nombre</h3>
<h5>Correo de quién contacta: $email</h5>
<h6> Mensaje </h6>
<p>$mensaje</p>";

if(!$mail->send()){
  print_r(json_enconde(['msg' => false]));
}
else{
    print_r(json_encode(['msg' => true]));
}
// TODO: Persistir la informacion
?>