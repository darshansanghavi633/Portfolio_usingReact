import React from 'react';
import { Button } from 'react-bootstrap';
export default function Footer() {
  return (
    <div className='text-center' style={{backgroundColor:"#1f2833",padding:"20px",marginTop:"100px"}}>
        <div className='container text-center my-3'>
        <Button variant="outline-info">Back To Top</Button>
        </div>


        <div className='mx-3'>
            Name: Darshan Sanghavi
        </div>
      <div className='mx-3'>
        Email: darshansanghavi0505@gmail.com
      </div>
      <div className='mx-3'>
        Contact No.: +91 8591561861
      </div>
      <div className='mx-3'>
        Copyright  Darshan Sanghavi | 2023
      </div>

    </div>
  )
}
