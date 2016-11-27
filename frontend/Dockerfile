FROM mhart/alpine-node

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/* \
  && pip install --upgrade pip

#Creating folder to contain the project
WORKDIR frontend

#Add src needed for building the project
COPY src/ src/
COPY tools/ tools/
COPY .babelrc/ ./
COPY .eslintrc/ ./
COPY .npmrc/ ./
COPY webpack.config.dev.js/ ./
COPY webpack.config.prod.js/ ./
COPY package.json/ ./
RUN chmod +x ./package.json


#Buiding the project
RUN npm run build

EXPOSE 3000

#ENTRYPOINT ["npm start"]
