FROM node:13.2.0 as builder

RUN mkdir /usr/storybook
WORKDIR /usr/storybook
COPY . .
RUN yarn install
RUN yarn run build-storybook -c .storybook -o .dist --loglevel error --quiet