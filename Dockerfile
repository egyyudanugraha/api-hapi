FROM node:18-alpine

RUN mkdir /usr/app/
WORKDIR /usr/app/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]