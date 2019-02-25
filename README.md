# OpenResty Crocodil
Store your keyword<->image pair in Redis database

### Prerequisites
```
docker
docker-compose
```

## Deployment

1. Clone this git repository
2. `cd krokodil` to change directory
3. `mkdir -m 775 tmp`, the images will be stored in tmp folder
3. Run command
`
docker-compose up
`
4. Open http://localhost:8080 in your browser

- Images will be stored in /tmp folder of OpenResty container

- Database snapshots saved in /data folder of redis container


## Built With

* [OpenResty](http://http://openresty.org/en/) - Backend server
* [Bootstrap](https://getbootstrap.com/) - UI framework
* [ReactJS](https://reactjs.org/) - Library for user interfaces
* [Redis](https://rometools.github.io/rome/) - Database

