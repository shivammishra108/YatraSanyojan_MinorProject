import express from 'express';

import { createTour,
     deleteTour, 
     getSingleTour, 
     getAllTour, 
     updateTour, 
     getTourBySearch, 
     getFeaturedTour, 
     getTourCount,
    } from '../controllers/tourController.js';

const router = express.Router();

// create new tour
router.post('/', createTour);

// update tour
router.put('/:id', updateTour);

// delete tour
router.delete('/:id', deleteTour);

// get single tour
router.get('/:id', getSingleTour);

// get all tour
router.get('/', getAllTour);

// get tours by the search
// get tour by search
router.get('/search/getTourBySearch', getTourBySearch);
// get featured tour
router.get('/search/getFeaturedTours', getFeaturedTour);
// get tour count
router.get('/search/getTourCount', getTourCount);

export default router;
