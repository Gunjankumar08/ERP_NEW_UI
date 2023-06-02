import { borderRadius } from '@mui/system'
import React from 'react'
import { useState } from 'react';
import { Route, Switch, Redirect ,Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="nav text-center text-md-start d-flex flex-column justify-content-center" >
        
        <ul>
            <li><Link to="/login">LogOut</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
