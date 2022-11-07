FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "start"]