FROM node:16-alpine
WORKDIR /usr/src/asap
COPY . /usr/src/asap
# RUN npm install -g supervisor
RUN #npm install -G typescript@3.4.5
RUN npm install --legacy-peer-deps
RUN npm run build
CMD ["node", "build/server"]
