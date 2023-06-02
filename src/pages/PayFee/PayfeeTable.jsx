import * as React from 'react';
import {Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import payfee from './payfee';
import { useState,useEffect } from "react";

function PayfeeTable() {
 
    return (
      <div>
        <Button variant='outlined' sx={{backgroundColor:'white',width:'150px'}}>
        <Link to='/payfees'>Payfee</Link> 
            </Button>
        
      </div>
    );
  }

export default PayfeeTable
