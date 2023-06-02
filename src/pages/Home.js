import {Grid} from "@material-ui/core";
// import  Card1 from "./DashboardCard/Card1"
// import  Card2 from "./DashboardCard/Card2"
// import  Card3 from "./DashboardCard/Card3"
import AreaChart  from "./Dashboard/AreaChart";
// import {Link } from 'react-router-dom';
import React from 'react';
import "./home.scss";

import Widget from './DashboardCard/components/widget/Widget'
import Featured from "./DashboardCard/components/featured/Featured";
import Chart from "./DashboardCard/components/chart/Chart";
// import Table from "./DashboardCard/components/table/Table";
import { Circle, Heart,Ripple } from 'react-spinners-css';
import { useState,useEffect } from 'react';

const Home = ({ image, handleImageChange }) => {
  
  let clicked_value='Active Student'
  const card_click=(clicked_value,e)=>{
    e.preventDefault()
  }
  const [ img,setImg]=useState(false)
useEffect(()=>{
  setImg(true)
  setTimeout(() => {
    setImg(false)

  }, 1500); 
  // eslint-disable-next-line 
},[])
  return (
    <>
    {img ?(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Ripple />
    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> */}
    </div>
    ):(

      <div className="homeContainer">
        {/* <Navbar /> */}
        <Grid container>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets" onClick={e => card_click(clicked_value,e)}>
          <Widget type="active_student" />
          </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets">
          <Widget type="bus_student" />
          </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets">
          <Widget type="hostel_student" />
          </div>
          </Grid> 
        {/* </Grid> */}
        {/* <br></br> */}
        {/* <Grid container> */}
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets">
          <Widget type="active_staff" />
          </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets">
          <Widget type="today_collection" />
          </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sm={6} xl={3}>
          <div className="widgets">
          <Widget type="monthly_dues" />

          </div>
          </Grid> 
        </Grid>
        
        
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 6 Months (Collection)" aspect={3 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    )}
    </>
);
}

export default Home;
