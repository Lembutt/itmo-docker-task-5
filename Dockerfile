FROM alpine
RUN apk add --update nodejs npm
WORKDIR /app
COPY . .
EXPOSE 33722
CMD ["npm", "start"]