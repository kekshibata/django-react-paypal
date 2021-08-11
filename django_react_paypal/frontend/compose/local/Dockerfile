FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app

# Cache and Install dependencies - very important step
COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
