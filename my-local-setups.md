### start mongo db with command

docker run -p 127.0.0.1:27017:27017 --name appsmith-mongodb -e MONGO_INITDB_DATABASE=appsmith -v C:\playground\appsmith\appsmith\mongo-data:/data/db mongo



### start redit with command
`docker run -p 127.0.0.1:6379:6379 --name appsmith-redis redis`

export JAVA_HOME="path that you found"
C:\Program Files\AdoptOpenJDK\jdk-11.0.9.101-hotspot