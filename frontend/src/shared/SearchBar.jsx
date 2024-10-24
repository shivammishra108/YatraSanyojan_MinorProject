import React,{useRef} from 'react';
import './search-bar.css';
import {Col, Form,FormGroup} from 'reactstrap';

import {BASE_URL} from './../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const navigate = useNavigate();

    const searchHandler = async()=>{
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if( location ==='' || distance ===''|| maxGroupSize ==='' ){
            return alert("All fields are requried!");
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        if(!res.ok) alert("Something went wrong!");

        const result = await res.json();
        console.log(result);

        navigate(
            `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, 
            {state: result.data});
            console.log(navigate);
    };

  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='Where are you going?' ref={locationRef}></input>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Distace</h6>
                    <input type='number' placeholder='Distance k/m' ref={distanceRef}></input>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Max People</h6>
                    <input type='number' placeholder='0' ref={maxGroupSizeRef}></input>
                </div>
            </FormGroup>

            <span className='search__iocn' type='submit' onClick={searchHandler}>
                <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar