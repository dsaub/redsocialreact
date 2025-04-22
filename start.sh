#!/bin/sh

figlet Red Social
echo "    Frontend    "

echo "> Writing config..."
sed -i "s|<BACKEND_URL>|${BACKEND_URL}|g" config.example.json
echo "> Applying config..."
cp -rf config.example.json /var/www/localhost/htdocs/config.json

echo "DONE! Launching Apache2 Server..."

httpd -D FOREGROUND