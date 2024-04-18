FROM node:20.12.0-bullseye-slim as build

RUN apt-get update -y && apt-get install python3 make g++ -y
WORKDIR /home/node/app
RUN chown node:node .
USER node
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

FROM node:20.12.0-bullseye-slim as artifact

RUN apt-get update -y && apt-get install dumb-init -y --no-install-recommends
RUN apt-get update -y && apt-get install python3 make g++ -y
WORKDIR /home/node/app
RUN chown node:node .
USER node
COPY --chown=node:node ./package*.json ./
RUN npm ci --omit=dev
COPY --from=build --chown=node:node /home/node/app/dist/ dist/
CMD ["dumb-init", "node", "dist/main.js"]
