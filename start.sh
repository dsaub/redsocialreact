#!/bin/sh

figlet Red Social
echo "    Frontend    "

echo "> Writing config..."
sed -i "s|(URL)|${BACKEND_URL}|g" /var/www/localhost/htdocs/.htaccess

echo "DONE! Launching Apache2 Server..."

httpd -D FOREGROUND