module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'Akshay1@',
      database: 'hk'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
