FROM node:14-slim
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
RUN npm install
COPY . /app
RUN npm run test
CMD ["npm", "start"]