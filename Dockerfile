FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3333

CMD ["yarn","dev:server"]
