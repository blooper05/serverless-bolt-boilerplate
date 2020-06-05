FROM node:12.18.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY src ./src
CMD ["yarn", "run", "start"]
