FROM node:17-alpine

RUN mkdir -p /app
RUN echo pwd
WORKDIR /app
COPY src .
COPY package.json /app

RUN npm install -g nodemon ts-node prettier typescript

RUN npm install --quiet

EXPOSE 8000
CMD ["npm", "run", "nmonit"]
