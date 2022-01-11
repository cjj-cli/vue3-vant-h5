# BUILDING
FROM node:14.5.0-alpine AS builder

ADD . /web/

WORKDIR /web

# 在国内打开下面一行加速
RUN npm config set registry https://registry.npm.taobao.org/ && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
RUN npm install && \
  npm run build

# nginx
FROM nginx:1.20.1-alpine

COPY --from=builder web/dist /web
COPY docker/nginx.conf /etc/nginx/nginx.conf
