import express from 'express';
import { createTour, deleteTour, getSingleTour, getALLTour, updateTour} from '../controllers/tourController.js';

const router = express.Router();

// create new tour
router.post('/', createTour);

// update tour
router.put('/:id', updateTour);

// delete tour
router.delete('/', deleteTour);

// get single tour
router.get('/:id', getSingleTour);

// create new tour
router.get('/', getALLTour);

export default router;