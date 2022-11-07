FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY package.json .
RUN npm i
COPY ./index.js ./index.js
CMD ["npm", "start"]