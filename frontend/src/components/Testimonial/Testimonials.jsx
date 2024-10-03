import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';

const Testimonials = () => {
    const settings={
        dots: true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autplaySpeed:1500,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidsToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidsToScroll:1,
                },
            },
        ]
    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px3">
        <p>Lorem ipsum dolor sit amet consectetur ad.
        dolor sit amet consectetur adipisicing elit.c.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} alt="testimonial" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>Shaily Bahel</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px3">
        <p>Lorem ipsum dolor sit amet c.
        dolor sit amet consectetur adipisicing elit.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} alt="testimonial" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>Shivam Mishra</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px3">
        <p>Lorem ipsum dolor sit am
        dolor sit amet consectetur adipisicing elit.consequat.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava05} alt="testimonial" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>Jitendra Kumar</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
        dolor sit amet consectetur.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} alt="testimonial" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>Utkarsh Dubey</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px3">
        <p>Lorem ipsum dolor sit am
        dolor sit amet consectetur adipisicing elit.consequat.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} alt="testimonial" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className='mb-0 mt-3'>Shivam Mishra</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonials