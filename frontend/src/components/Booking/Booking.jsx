import React, {useState, useContext } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroupItem, ListGroup} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
  const {price, reviews, title} = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    useEmail : user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize:1,
    bookAt: ''
  });

  const handleChange = e=> {
    setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
  };

const serviceFee = 10
const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

// send data to the server
const handleClick = async e=>{
  e.preventDefault();

  // Check for required fields
  const { fullName, phone, bookAt, guestSize } = booking;
  
  if (!fullName || !phone || !bookAt || !guestSize) {
    return alert('Please fill out all fields.');
  }
  console.log(booking);
  
  try{
    if(!user || user===undefined || user===null){
      return alert('Please sign in');
    }
    const res = await fetch(`${BASE_URL}/booking`,{
      method:'post',
      headers:{
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(booking)
    });
    const result = await res.json();
    if(!res.ok){
      return alert(result.message);
    }
    navigate('/thank-you');
  }catch(err){
    alert("error occurs");
  }
};

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
              <span> ${serviceFee} </span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
              <h5>Total</h5> 
              <span> ${totalAmount} </span>
          </ListGroupItem>
        </ListGroup>

        <button className='btn primary__btn w-100 mt-4' onClick={handleClick}  type='submit'>Book Now</button>
      </div>
      {/*==========booking bottom end============*/}
    </div>
  )
}

export default Booking