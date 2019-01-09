const express = require('express');
const frontSql = require('../sql_map/front');
const mysql = require('mysql');
const models = require('../../db');

const conn = mysql.createConnection(models.mysql);

express.get('blog/description', function (req, res) {
  const sql = frontSql.blogs.query;
  conn.query(sql,function (error,result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
