FROM node:current-alpine3.14
RUN apk update
RUN npm i -g npm
# node-gyp dependecies
RUN apk add python3 make gcc g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# rebuild zeromq to avoid binaries conflict 
RUN npm rebuild zeromq

COPY . .

ENV PORT 8080
ENV HOST tcp://server

EXPOSE $PORT

CMD ["npm","run","start"]
