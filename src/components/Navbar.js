import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome,FaDatabase,FaFile} from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
import {MdContacts} from 'react-icons/md'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
         <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><i><FaHome className='icon-nav'/> Home</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills"><i><FaDatabase className='icon-nav'/> Skills</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects"><i><FaFile className='icon-nav'/> Project</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutme"><i><HiInformationCircle className='icon-nav'/>  About Me</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactme"><i><MdContacts className='icon-nav'/> Contact Me</i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
