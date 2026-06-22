const request = require('supertest');
const app = require('./app');

test('GET / should return welcome message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('This is wrong on purpose');
});

test('GET /health should return status ok', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('GET /api/greet without name should return default greeting', async () => {
  const res = await request(app).get('/api/greet');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello, there!');
});

test('GET /api/greet with name should return personalized greeting', async () => {
  const res = await request(app).get('/api/greet?name=Ragini');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello, Ragini!');
});