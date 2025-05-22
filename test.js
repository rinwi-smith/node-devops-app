const request = require('supertest');
const app = require('./app');

describe('Node.js App', () => {
  it('should return Hello, DevOps! on GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, DevOps!')
      .end(done);
  });
});
