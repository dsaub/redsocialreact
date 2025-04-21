FROM alpine:3.21.3

RUN apk add apache2 git nodejs npm

RUN mkdir /build
WORKDIR /build

RUN git clone https://github.com/dsaub/redsocialreact.git
WORKDIR /build/redsocialreact
RUN npm install
RUN npm run build
WORKDIR /build/redsocialreact/dist
RUN cp -rvf * /var/www/localhost/htdocs/

WORKDIR /etc/apache2
RUN cp -rvf /build/redsocialreact/httpd.conf httpd.conf


RUN rm -rf /build

RUN apk del -f git nodejs npm
RUN rm -f /var/cache/apk/*
CMD [ "httpd", "-D", "FOREGROUND" ]
