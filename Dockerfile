From node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node
WORKDIR /app
COPY --from=build /app/build /app
RUN npm i -g serve
EXPOSE 8080
CMD ["serve", "-l", "8080"]