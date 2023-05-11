FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# remove all the unused installed dependencies 
RUN npm prune --production

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "start" ]
