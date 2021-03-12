# Quick Pallet Client Serve

## Description
Quick Pallet Client Serve it is a page web that you can to test Request to Server.

## Require

### Install Php 7.4

```shell
$ sudo apt-get install software-properties-common

$ sudo add-apt-repository ppa:ondrej/php

$ sudo apt update

$ sudo apt-get install -y php7.4 libapache2-mod-php7.4 php7.4-cli php7.4-mysql php7.4-gd php7.4-imagick php7.4-tidy php7.4-xmlrpc 
php-mbstring php-gd php-xml php-zip php-curl
```

### Install Composer

```shell
$ sudo apt update

$ sudo apt install -y composer
```


### Install NodeJs and Npm
```shell
$ sudo apt install -y curl dirmngr apt-transport-https lsb-release ca-certificates

$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

$ sudo apt update

$ sudo apt install -y nodejs
```

## Install WebSite

```shell
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ npm install
$ npm run prod
```

## Install Express

```shell
$ sh run-install.sh
```

## Development Server

```shell
$ php artisan serve
```