import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Register a new user
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
 console.log(name, email, password);
 try {

  const existingUser = await User.findOne({ email });
  if (existingUser)   
{
    return res.status(400).json({ error: 'User already exists'   
});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password:   
hashedPassword });
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}
};

// Login a user
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("log");
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

// Assuming 'user' is the authenticated user object
const token = jwt.sign(
  { userId: user._id, email: user.email }, // Payload
  process.env.JWT_SECRET, // Secret key
  { expiresIn: '1h' } // Options like expiration time
);
    // Return the token
    res.json({ email, token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
