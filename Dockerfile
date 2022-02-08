FROM node:12.22.0-alpine as base

RUN apk add --no-cache git

# Args & Envs
ARG APP_PATH=/app

RUN mkdir $APP_PATH /dist
WORKDIR $APP_PATH

# Install npm packages
ADD package.json yarn.lock $APP_PATH/
COPY . $APP_PATH
RUN yarn install && yarn build

FROM node:12.22.0-alpine
COPY --from=base /app /
CMD yarn start
