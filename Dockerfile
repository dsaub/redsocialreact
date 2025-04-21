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


RUN apk del -f git nodejs npm
RUN rm -f /var/cache/apk/*
CMD [ "httpd", "-D", "FOREGROUND" ]
