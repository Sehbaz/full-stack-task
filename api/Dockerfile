FROM node:20.16-alpine3.19 AS base

WORKDIR /app

COPY package*.json ./
ENV NODE_ENV=development
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]