# Test

#### Clone repository
```shell
git clone https://github.com/ivanbarayev/ekip-test.git
cd ekip-test
npm install
```

#### DEV Run codes
```shell
# With Docker
docker-compose up

# Without Docker (if you will use this option, you should fill mongodb auth creditentals in .envfile
nodemon

# lint check 
npm run lint

# run project with ts support
ts-node src/server.ts
```


#### Build
```shell
# For Windows
npm run buildw

# For Linux
npm run buildl
```

#### After Build

```shell
# to start compiled node code 
npm start
```


---
##### To create this project from scratch, plase follow below MD file for instructions

Instructions in this file [Setup](./docs/SETUP.md).


