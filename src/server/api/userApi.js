const express = require('express');
const frontSql = require('./sql_map/front');
const mysql = require('mysql');
const models = require('../db');
const router = express.Router();


const conn = mysql.createConnection(models.mysql);


const toHump = function (name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    let array = ret.map(function (value) {
      let obj = {};
      for (let i in value) {
        obj[toHump(i.toLowerCase())] = value[i];
      }
      return obj;
    });
    res.json(array);
  }
};


router.get('/blog/description', function (req, res) {
  const sql = frontSql.blogs.query;
  conn.connect();
  conn.query(sql, function (error, result) {
    if (error) {
      console.log(error);
    }
    if (result) {
      jsonWrite(res, result);
    }
    conn.destroy();
  })
});


module.exports = router;
