const express = require('express');
const frontSql = require('./sql_map/front');
const mysql = require('mysql');
const models = require('../db');
const router = express.Router();


const pool = mysql.createPool(models.mysql);


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
  pool.query(sql, function (error, result) {
    if (error) {
      console.log(error);
      return;
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
