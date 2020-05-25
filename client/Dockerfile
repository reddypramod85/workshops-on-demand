FROM node:10.20-alpine

RUN mkdir /app
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./

# RUN npm config set proxy http://
# RUN npm config set https-proxy http://

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
# Application port
EXPOSE 3000

# Remote debugging port
EXPOSE 9229

# start app
CMD ["npm", "start"]
