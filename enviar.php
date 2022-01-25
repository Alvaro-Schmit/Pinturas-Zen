     
<?php
$name = $_POST['nombre'];
$mail = $_POST['correo'];
$phone = $_POST['telefono'];
$messageemail = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $messageemail . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'pinturaszen.uno@pinturaszen.uno';
$asunto = 'Mensaje de ' .$name ;

mail($para, $asunto, utf8_decode($message), $header);

header("Location:gracias.html");
?>
