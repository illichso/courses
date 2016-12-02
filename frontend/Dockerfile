FROM node

WORKDIR courses

COPY src/ src/
COPY tools/ tools/
COPY .babelrc/ ./
COPY .eslintrc/ ./
COPY webpack.config.dev.js/ ./
COPY webpack.config.prod.js/ ./
COPY package.json/ ./
RUN chmod +x ./package.json

RUN ["/bin/bash", "-c", "npm run build -s"]

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "-c", "npm run dockerStart -s"]