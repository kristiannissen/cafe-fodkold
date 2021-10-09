FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm i npx

EXPOSE 3000
WORKDIR /src
