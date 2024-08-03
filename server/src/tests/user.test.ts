import request from 'supertest';
import app from '../../App';

describe('User Endpoints', () => {
  let token: string;

  beforeAll(async () => {
    // Register and log in to get a token
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password123'
      });
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'jane.doe@example.com',
        password: 'password123'
      });
    token = loginResponse.body.token;
  });

  it('should get profile', async () => {
    const response = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.email).toBe('jane.doe@example.com');
  });

  it('should update profile', async () => {
    const response = await request(app)
      .put('/api/users/profile/edit')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Jane Smith', bio: 'Updated bio' });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Jane Smith');
  });

  it('should get list of users', async () => {
    const response = await request(app)
      .get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
