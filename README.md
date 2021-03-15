# Quick Pallet Client Server

## Description
Quick Pallet Client Serve it is a page web that you can to test Request to Server.

## Install Git
Note: Only install git when you don't have it installed on your computer
```bash
# update package into computer
$ sudo apt-get update
$ sudo apt-get install git -y
```

## Clone Project
With the following command, a clone of the project to the current folder is performed
```bash
# clone project into current folder
$ git clone https://github.com/kenshimota/qpm-client-server.git
```

## Install WebSite
we does access to project folder and execute script install.
```bash
# access to folder the project
$ cd qpm-client-server/

# script install website
$ sh run-install.sh
```

## Development Server
Script that start service server, this can change port set --port for port that need. example: 
```bash
# sh server.sh --port
$ sh server.sh 4000
# deploy server in http://127.0.0.1:4000

# not have variable --port default value it is 8000 
$ sh server.sh
```
