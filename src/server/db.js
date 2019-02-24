// 数据库连接配置
module.exports = {
  mysql: {
    connectionLimit: 2000,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: '3306',
    dateStrings: true
  }
}
