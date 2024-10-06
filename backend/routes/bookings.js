import express from "express";
import { createBooking, getAllBooking, getBooking } from "../controllers/bookingControlelr.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyUser, getAllBooking);

export default router