const assert = require('assert')
// const expect = require('chai').expect
const request = require('supertest')
const server = require('../server')

// Makes sure we've connected to MongoDB before running any tests
// const ready = require('readyness/wait/mocha')

describe('Dummy test to ensure CI/CD works', function () {
  it('Should return OK stats', function () {
    return request(server).get('/api/v1/user')
      .then((res) => {
        assert.equal(res.status, 200)
      })
  })
})
