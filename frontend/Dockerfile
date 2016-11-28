FROM node

WORKDIR courses

COPY src/ src/
COPY tools/ tools/
COPY .babelrc/ ./
COPY .eslintrc/ ./
COPY .npmrc/ ./
COPY webpack.config.dev.js/ ./
COPY webpack.config.prod.js/ ./
COPY package.json/ ./
RUN chmod +x ./package.json

RUN npm run build

EXPOSE 3000

#ENTRYPOINT ["npm start"]
