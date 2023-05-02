FROM node:14-alpine
RUN npm init
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","calculadora_express2.js"]
