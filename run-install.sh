
# install php 7.4
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt-get install -y php7.4 libapache2-mod-php7.4 php7.4-cli php7.4-mysql php7.4-gd php7.4-imagick php7.4-tidy php7.4-xmlrpc php-mbstring php-gd php-xml php-zip php-curl

# install composer
sudo apt update
sudo apt install -y composer

# install nodesjs and npm
sudo apt install -y curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt update
sudo apt install -y nodejs

# install website
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run prod

# development serve
php artisan serve
