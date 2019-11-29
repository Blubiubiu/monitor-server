#制定node镜像的版本
FROM node:10.6.0

# RUN mkdir -p /usr/src/node-app/node-server

WORKDIR /usr/src/node-app/node-server

RUN rm -f *

COPY package.json /usr/src/node-app/node-server/package.json

# RUN npm install cnpm -g --registry=https://registry.npm.taobao.org

RUN npm i --production

# RUN tar -zcvf ../release.tgz .

RUN npm i egg-scripts --save

COPY . /usr/src/node-app/node-server
#对外暴露的端口
EXPOSE 80
#程序启动脚本
CMD ["npm", "start"]