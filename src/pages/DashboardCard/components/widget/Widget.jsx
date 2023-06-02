import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React,{useState,useEffect} from 'react'

import { dashboard } from "../../../services/index";
const Widget = ({ type }) => {
  const [dashboardData,setDashboardData]=React.useState([]);
  useEffect(()=>{
    dashboard().then((response) =>
    setDashboardData(response.res),
  )
    // eslint-disable-next-line 
  },[])

  let data;

  //temporary
  const amount = 100;
  const diff = 20;
console.log(dashboardData[0]?.active_bus_student_count,'dddddddddddddddddd');
  switch (type) {
    case "active_student":
      data = {
        title: "ACTIVE STUDENTS",
        count:dashboardData[0]?.active_bus_student_count,
        isMoney: false,
        link: "See all students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "bus_student":
      data = {
        title: "BUS STUDENTS",
        count:dashboardData[0]?.active_bus_student_count,
        isMoney: false,
        link: "See all bus students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}

          />
        ),
      };
      break;
      case "hostel_student":
      data = {
        title: "HOSTEL STUDENTS",
        count:dashboardData[0]?.active_hostel_student_count,
        isMoney: false,
        link: "See all hostel students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "active_staff":
      data = {
        title: "ACTIVE STAFF",
        count:dashboardData[0]?.active_staff_count,
        isMoney: false,
        link: "View all staff",
        icon: (
          // <ShoppingCartOutlinedIcon
          //   className="icon"
          //   style={{
          //     backgroundColor: "rgba(218, 165, 32, 0.2)",
          //     color: "goldenrod",
          //   }}
          // />
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "today_collection":
      data = {
        title: "TODAY COLLECTION",
        count:'-',
        isMoney: true,
        link: "View net collection",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "monthly_dues":
      data = {
        title: "MONTHLY DUES",
        count:'-',
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
