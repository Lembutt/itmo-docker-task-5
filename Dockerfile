FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
CMD ["npm", "start"]