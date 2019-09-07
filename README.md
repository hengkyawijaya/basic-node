# basic-node
Educational repository to learn about creating CRUD with nodejs. It using several library :
- expressjs -> web framework
- sequelize -> orm
- cors -> manage cors
- morgan -> logger
- helmet -> security protection


### How to run the application
1. clone the repo
2. open the root application and install the depedencies
```
yarn install
```
3. make sure you already installed docker on your machine
4. start database mysql using docker
```
docker-compose -f db.docker-compose.yml up
```
5. start your application
```
yarn dev 
```

