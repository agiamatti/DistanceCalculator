FROM node:20-alpine

ARG SERVER_MODE
ENV SERVER_MODE=${SERVER_MODE:-true}

COPY . .

RUN npm i --omit=dev

CMD npm run start
