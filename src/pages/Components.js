import Switch from 'react-switch';
import * as React from 'react';

import {Grid} from "@material-ui/core";
import  Receptions from "./ComponentsCards/Receptions"
import  Student from "./ComponentsCards/Student"
import  Staff from "./ComponentsCards/Staff"
import  Card4 from "./ComponentsCards/Card4"
import  Card5 from "./ComponentsCards/Card5"
import  Card6 from "./ComponentsCards/Card6"
import {Link } from 'react-router-dom';

const Components = ({ image, handleImageChange }) => {
  return (
    <>
      
        <Grid container>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Link to='/table'><Receptions/> </Link>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Student/> 
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Staff/> 
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Card4/> 
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Card5/> 
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
            <Card6/> 
          </Grid>
        </Grid>
    </>
  );
};

export default Components;
