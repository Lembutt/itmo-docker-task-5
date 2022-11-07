FROM alpine
RUN apk add --update nodejs npm
RUN npm i
WORKDIR /app
COPY . .
CMD ["npm", "start"]