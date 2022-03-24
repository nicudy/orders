FROM node:13.12.0-alpine

WORKDIR /var/www/app

COPY . ./

RUN npm install

CMD ["npm", "start"]