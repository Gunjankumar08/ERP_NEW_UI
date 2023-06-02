import * as React from 'react';
import Button from "@mui/material/Button";
import {Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader"
import { useState,useEffect } from "react";
import { MDBTable,MDBTableHead,MDBTableBody ,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody} from 'mdb-react-ui-kit';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';
import { getHostelDetails } from '../../services';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export function CustomLoader() {
 
  return (
    <FadeLoader color="#36d7b7"/>
    // <LoadingWidget className="" type="ThreeCircles" />
  );
}

export default function hostelTable() {
  const [hostelData,setHostelData]=React.useState([]);
  useEffect(()=>{
    getHostelDetails().then((response) =>
    setHostelData(response.res),
  )
    // eslint-disable-next-line 
  },[])

  return (
    <>
    <MDBContainer fluid >
      <MDBRow>
      <MDBCol md='1'><Link to='/settings'> <ReplyAllTwoToneIcon/> </Link></MDBCol>
      </MDBRow><br></br>
      <MDBRow> 
        <MDBCol>
        <form >
            <TextField
            id="search_val"
            name="search_val"
            className="text"
            // value={search_val}
            // onChange={onChangess}
            label="Enter a value to search"
            variant="outlined"
            placeholder="Search..."
            size="small"
            />
            <IconButton type="submit" >
            <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
        </MDBCol>
        <MDBCol md='6'></MDBCol>
      <MDBCol md='2'>
      <Button variant="outlined" style={{ marginLeft: "auto" }}><Link to='/add_hostel'>+Add Hostel</Link> </Button>
      </MDBCol>
      </MDBRow>
        <MDBRow>
            <MDBCol md='12'>
              <MDBCard>
                <TableContainer component={Paper} >
                  <Table stickyHeader   aria-label="simple table" size="small">
                    <TableHead  >
                      <TableRow>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>S.No</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Hostel Name</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Hostel Fee</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Fee Installment</strong></TableCell>
                        {/* <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Hostel Instruction</strong></TableCell> */}
                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Action</strong></TableCell>
                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong></strong></TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {hostelData.map((row,index) => (
                        <TableRow key={row.id}>
                          <TableCell align="center"style={{fontSize:'9px'}}>{index+1}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.hostel_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.hostel_fee}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.hostel_fee_inst}</TableCell>
                          {/* <TableCell align="center"style={{fontSize:'9px'}}>{row.hostel_instruction}</TableCell> */}

                          <TableCell>
                                    <IconButton  color="dark" size='small' ><Link to='/add_class?id={row.id}'><EditIcon /></Link></IconButton>
                                    <IconButton  color="dark" size='small'><DeleteIcon /></IconButton>
                          </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </MDBCard>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    
    </>
  );
}
