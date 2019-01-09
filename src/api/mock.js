const Mock = require('mockjs');

const base = 'http://localhost:8080';
const Random = Mock.Random;

Mock.mock(`${base}/api/blog/description`, 'get', {
  rows:
    [{
      id: Random.increment(),
      title: Random.ctitle(),
      description: Random.csentence(),
      creationDate: Random.date(),
    },
    {
      id: Random.increment(),
      title: Random.ctitle(),
      description:Random.csentence(),
      creationDate:Random.date(),
    },
    ],
})
;

