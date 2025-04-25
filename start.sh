#!/bin/sh

figlet Red Social
echo "    Frontend    "

echo "> Writing config..."
sed -i "s|(URL)|${BACKEND_URL}|g" proxy.conf

echo "> Applying Config..."
cp -rvf proxy.conf /etc/apache2/conf.d/proxy.conf

echo "DONE! Launching Apache2 Server..."

httpd -D FOREGROUND