import express from "express";

import { 
    deletUser, 
    getSingleUser, 
    getAllUser,
    updateUser,
 } from "../controllers/userController.js";

const router = express.Router();


// update user
router.put('/:id', updateUser);

// delete user
router.delete('/:id', deletUser);

// get single user
router.get('/:id', getSingleUser);

// get all user
router.get('/', getAllUser);

export default router