<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée.',
    ]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Données invalides.',
    ]);
    exit;
}

$name = trim((string) ($input['nom'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Merci de remplir correctement tous les champs.',
    ]);
    exit;
}

$recipient = 'robinjosselin5@gmail.com';
$subject = 'Nouveau message depuis le portfolio';
$body = "Nom : {$name}\n";
$body .= "E-mail : {$email}\n\n";
$body .= "Message :\n{$message}\n";

$headers = [
    'From: Portfolio <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Le serveur n’a pas pu envoyer le message.',
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Votre message a bien été envoyé.',
]);
