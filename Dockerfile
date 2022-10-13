FROM node:16

WORKDIR /app

COPY yarn.lock .

COPY package.json .

# RUN yarn install -g ts-node

RUN yarn install

COPY . .

ENV PORT 9997

EXPOSE $PORT

CMD ["yarn", "dev"]