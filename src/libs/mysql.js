import serverlessMysql from "serverless-mysql";

export const sqlConn = serverlessMysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  },
});

export const sqlConnAdmin = serverlessMysql({
  config: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  },
});