From node:14-alpine as build
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client/ .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/build /app
RUN echo test
RUN npm i -g serve
EXPOSE 8080
CMD ["serve", "-l", "8080"]