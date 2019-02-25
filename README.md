# OpenResty Crocodil
Store your keyword<->image pair in Redis database

### Prerequisites
```
docker
docker-compose
```

## Deployment

1. Clone this git repository
2. `cd` to directory
3. Run command
`
docker-compose up
`

- Images will be stored in /tmp folder of OpenResty container

- Database snapshots saved in /data folder of redis container


## Built With

* [OpenResty](http://http://openresty.org/en/) - Backend server
* [Bootstrap](https://getbootstrap.com/) - UI framework
* [ReactJS](https://reactjs.org/) - Library for user interfaces
* [Redis](https://rometools.github.io/rome/) - Database

