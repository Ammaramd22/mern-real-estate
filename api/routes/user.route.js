import express from 'express';
import {deleteUser, test, updateUser, getUserListings} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { get } from 'mongoose';



const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)
router.get('/listings/:id',verifyToken, getUserListings)



export default router;