FROM node:12
RUN npm install
COPY . .
EXPOSE 3000
CMD node server.js
