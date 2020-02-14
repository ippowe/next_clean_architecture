FROM node:13.2.0 as builder

# 작업 폴더를 만들고 npm 설치
RUN mkdir /usr/next-staging
WORKDIR /usr/next-staging
COPY . .
RUN yarn install
RUN yarn run build