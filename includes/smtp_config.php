<?php
// SMTP configuration. Values should be provided via environment variables.
// For local development you can export these in your shell or set them in your devcontainer.
$SMTP_CONFIG = [
    'host' => getenv('SMTP_HOST') ?: 'smtp.example.com',
    'port' => getenv('SMTP_PORT') ?: 587,
    'username' => getenv('SMTP_USER') ?: 'user@example.com',
    'password' => getenv('SMTP_PASS') ?: 'password',
    'secure' => getenv('SMTP_SECURE') ?: 'tls', // 'tls' or 'ssl' or empty for none
    'from_email' => getenv('SMTP_FROM') ?: 'webmaster@localhost',
    'from_name' => getenv('SMTP_FROM_NAME') ?: 'Website Contact',
    'debug' => getenv('SMTP_DEBUG') ? (int) getenv('SMTP_DEBUG') : 0,
];

return $SMTP_CONFIG;
