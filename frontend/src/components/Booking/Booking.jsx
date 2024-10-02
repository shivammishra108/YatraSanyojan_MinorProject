import React, {useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroupItem, Button, ListGroup } from 'reactstrap';

const Booking = ({ tour, avgRating }) => {
  const {price, reviews} = tour;
  const {creadentials, setCreadentials} = useState({
    userId: '01',
    useEmail : 'exmaple@gmail.com',
    fullName: '',
    phone: '',
    guestSize:1,
    bookAt: ''
  });

  const handleChange = e=> {
    setCreadentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

// send data to the server
const handleClick = e=>{
  e.preventDefault();
  console.log(creadentials);
}

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3> ${price} <span>/per person</span> </h3>
        <span className='tour__rating d-flex align-items-center'>
                        <i class="ri-star-s-fill" style={{'color':'var(--secondary-color)'}}></i> 
                        {avgRating === 0 ? null : avgRating}  ({reviews?.length})
          </span>  
      </div>

      {/*==========booking form start============*/}
      <div className="booing__form">
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text" 
              placeholder='Full Name' 
              id="fullName" 
              required 
              onChange={handleChange} 
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="number" 
              placeholder='Phone' 
              id="phone" 
              required 
              onChange={handleChange} 
            />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input 
              type="date" 
              placeholder='' 
              id="bookAt" 
              required 
              onChange={handleChange} 
            />
            <input 
              type="number" 
              placeholder='Number of Guests'
              id="guestSize" 
              required 
              onChange={handleChange} 
            />
          </FormGroup>
        </Form>
      </div>
      {/*==========booking form end============*/}

      {/*==========booking bottom start============*/}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
              <h5 className='d-flex align-items-center gap-1'>
                ${price} <i class="ri-close-line"></i> 1 person
              </h5> 
              <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
              <h5>Service Charge</h5>
              <span> $10 </span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
              <h5>Total</h5> 
              <span> $109 </span>
          </ListGroupItem>
        </ListGroup>

        <button className='btn primary__btn w-100 mt-4' onClick={handleClick} >Book Now</button>
      </div>
      {/*==========booking bottom end============*/}
    </div>
  )
}

export default Booking