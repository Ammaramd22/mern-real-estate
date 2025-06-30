import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin) // Assuming you have a signin function in the controller
router.post("/google", google); // Assuming you have a Google OAuth signin function in the controller
export default router;