FROM node:18-alpine

WORKDIR /src

COPY package.json ./
RUN npm i pnpm -g

RUN pnpm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]