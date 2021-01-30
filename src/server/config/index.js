module.exports = {
    ENV : process.env.ENVIRONMENT || 'development',
    IPFS : {
        PORT: process.env.IPFS_PORT || '5001',
        HOST: process.env.IPFS_HOST || 'localhost',
        PROTOCOL: process.env.IPFS_PROTOCOL || 'http' 
    },
    APP : {
        PORT: process.env.APP_PORT || 8080,
    },
    DB: {
        // @@todo replace db config with .env
        "development": {
            "username": "root",
            "password": null,
            "database": "fleek_dev",
            "host": "127.0.0.1",
            "dialect": "postgres",
            "port": 5432,
            "ssl": "true"
          },
          "test": {
            "username": "root",
            "password": null,
            "database": "fleek_test",
            "host": "127.0.0.1",
            "dialect": "postgres",
            "port": 5432,
            "ssl": "true"
          },
          "production": {
            "username": "root",
            "password": null,
            "database": "fleek_prd",
            "host": "127.0.0.1",
            "dialect": "postgres",
            "port": 5432,
            "ssl": "true"
          }
    },
};