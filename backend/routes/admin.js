import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Define the route for the Admin Dashboard
router.get('/dashboard', verifyAdmin, (req, res) => {
  // Admin dashboard logic
  res.status(200).json({ message: "Welcome to the Admin Dashboard" });
});

export default router;
