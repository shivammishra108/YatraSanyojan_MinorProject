import Tour from "../models/Tour.js";
import Review from '../models/Review.js'

export const createReview = async(req,res)=>{
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});

    try{
        const savedReview = await newReview.save()

        // after createing a new review now update the reviews array of tour
        await Tour.findByIdAndUpdate(tourId, {
            $push: {reviews: savedReview._id}
        })

        return res
        .status(200)
        .json({successs:true, 
            message:"Review submitted", 
            data: savedReview
        })

    }catch(err){
        return res
        .status(500)
        .json({
            successs:true, 
            message:"Failed to submit review"
        })
    }
}