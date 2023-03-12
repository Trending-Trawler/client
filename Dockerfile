#Stage 1
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
RUN npm run bild

#Stage 2
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]