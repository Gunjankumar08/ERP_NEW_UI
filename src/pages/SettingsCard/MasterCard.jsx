import React from 'react'
import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,MDBCardHeader,MDBCardFooter,MDBInput 
} from 'mdb-react-ui-kit';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
  Link,
  useLocation,
} from "react-router-dom";
import {Grid} from "@material-ui/core";
import { DataGrid, GridToolbar,GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import {data} from "./TableHeader"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AppleIcon from '@mui/icons-material/Apple';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import { MDBIcon } from 'mdb-react-ui-kit';

function MasterCard() {
    const card_data =[
        {
            "id": 1,
            "value":"Add Class",
            "url":'/class_table',
            "border_color":"square border border-primary",
            "icon_color":'primary',
            "last_update":"22-May-2023",
            "icon":<CurrencyRupeeIcon/>,
            "mbdicon":"bars"
        },
        {
            "id": 2,
            "value":"Add Section",
            "url":'/section_table',
            "border_color":"square border border-secondary",
            "icon_color":'secondary',
            "last_update":"25-May-2023",
            "icon":<BluetoothAudioIcon/>,
            "mbdicon":"bars"
      
        },
        {
          "id": 3,
          "value":"Bus Root",
          "url":'/busroot_table',
          "border_color":"square border border-success",
          "icon_color":'success',
          "last_update":"23-May-2023",
          "icon":<BatteryCharging60Icon/>,
          "mbdicon":"bars"
          
      
        },
        {
          "id": 4,
          "value":"Extra Fee",
          "url":'/extrafee_table',
          "border_color":"square border border-danger",
          "icon_color":'danger',
          "last_update":"24-May-2023",
          "icon":<AppleIcon/>,
          "mbdicon":"bars"
      
      
        }
        ,
        {
          "id": 5,
          "value":"Add Hostel",
          "url":'/hostel_table',
          "border_color":"square border border-danger",
          "icon_color":'danger',
          "last_update":"24-May-2023",
          "icon":<AppleIcon/>,
          "mbdicon":"bars"
      
      
        },
        {
          "id": 6,
          "value":"Hostel Extra Fee",
          "url":'/hostel_extrafee_table',
          "border_color":"square border border-danger",
          "icon_color":'danger',
          "last_update":"24-May-2023",
          "icon":<AppleIcon/>,
          "mbdicon":"bars"
      
      
        },
        {
          "id": 7,
          "value":"Extra Fee",
          "url":'/extrafee_table',
          "border_color":"square border border-danger",
          "icon_color":'danger',
          "last_update":"24-May-2023",
          "icon":<AppleIcon/>,
          "mbdicon":"bars"
      
      
        },
        {
          "id": 8,
          "value":"Extra Fee",
          "url":'/extrafee_table',
          "border_color":"square border border-danger",
          "icon_color":'danger',
          "last_update":"24-May-2023",
          "icon":<AppleIcon/>,
          "mbdicon":"bars"
      
      
        }
      ]
  return (
      <>
    <Grid container>
    {card_data.map((card_data, k) => (
          <Grid item xs={12} md={6} lg={3} sm={6} xl={3}>
            <Link to={`${card_data.url}/${card_data.id}`} style={{ color: 'white' ,textDecoration: 'none'}}>
              <MDBCard className='m-2 square border border-0'>
              <MDBCardBody className=''>
                <MDBRow className={`text-center ${card_data.border_color}`} >
                      <MDBCol col="3"  className='fancy-border-radius border d-flex align-items-center justify-content-center' ><MDBIcon className='' icon={`${card_data.mbdicon}`} size='2x' /></MDBCol>
                      <MDBCol col="9" >
                        {/* <h3>{card_data.value}</h3> */}
                        <h3  style={{ color: 'black' }}>aaaaaaaaaaaa</h3>
                        <p style={{fontSize:'10px',color: 'black'}}>Last Update :{card_data.last_update}</p>
                        </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </Link>
          </Grid>
    ))}
        </Grid>
        </>
  )
}
export default MasterCard
