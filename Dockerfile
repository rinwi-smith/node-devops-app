FROM node:18
WORKDIR /usr/src/app
COPY package.json .
COPY app.js .
COPY test.js .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
