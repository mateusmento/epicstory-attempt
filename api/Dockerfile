ARG NODE_VERSION=20.12.0
FROM node:${NODE_VERSION}-bullseye-slim as build

# RUN apt-get update -y && apt-get install python3 make g++ -y
WORKDIR /home/node/app
RUN chown node:node .
USER node
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

FROM node:${NODE_VERSION}-bullseye-slim as artifact

RUN apt-get update && apt-get install -y dumb-init && apt-get clean && rm -rf /var/lib/apt/lists/*
WORKDIR /home/node/app
ENV NODE_ENV=production
RUN chown node:node .
USER node
COPY --chown=node:node package*.json .
RUN npm ci --omit=dev
COPY --from=build --chown=node:node /home/node/app/dist dist
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/main.js"]
