# vijaystaytouch_backend_task


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Features

Image Upload api using amazon s3 bucket integration using nodejs postgresql and docker container

### Prerequisites

What things you need to install the software and how to install them

```
Node@v12.x.x
PostgreSql@12.x
Docker
```

### Installing

A step by step series that will tell you how to get a development env running

```
$ npm install

```
Create Database:

```
| keyword       | Example                         |Description                        |
| ------------- | -----------------------------   |---------------------------------- |
| dialect       | postgres                        |Database we are using              |
| username      | xcpdbwdk                        |Username for the database          |
| password      | WK6R6TWshC2HpJ88Bpe8bPPIhPNSRqH-|Password for the database          |
| host          | john.db.elephantsql.com         |Host on which database is running  |
| port          | 5432                            |Port for the database              |
| database_name | staytouch                       |Database name|
 
## Run the Server
## Without docker
```
$ npm run app

```
##With Docker container
```
$ docker build  -t  test:latest . 

$ docker run  -it  test:latest .

$ docker run -it -d -p 3006:1010 test:latest 
```
