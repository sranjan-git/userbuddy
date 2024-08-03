import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

describe('Auth Endpoints', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose
    .connect(process.env.MONGO_URI!);
  });

  afterAll(async () => {
    // Disconnect and clean up the test database
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'User registered successfully');
  });

  it('should not register a user with an existing email', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Jane Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      });

    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error');
  });

  it('should login a registered user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john.doe@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not login a user with incorrect credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'john.doe@example.com',
        password: 'wrongpassword',
      });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid credentials');
  });
});
