import React from "react";
import {FaUserAlt,FaPhone} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { Button } from "react-bootstrap";
import {TbHandFinger} from 'react-icons/tb'
import {FaRegCopyright} from 'react-icons/fa'
export default function Footer() {
    const handleScrolltoTop=() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) 
  return (
    <div className="text-center copyright">
      <div className="container text-center my-3">
        <Button onClick={handleScrolltoTop} variant="outline-info">Back To Top <TbHandFinger/></Button>
      </div>
      <div className="mx-3"><FaUserAlt/> Name: Darshan Sanghavi</div>
      <div className="mx-3"><MdEmail/> Email: darshansanghavi0505@gmail.com</div>
      <div className="mx-3"> <FaPhone/> Contact No.: +91 8591561861</div>
      <div className="mx-3">Copyright <FaRegCopyright/> Darshan Sanghavi | 2023</div>
    </div>
  );
}
