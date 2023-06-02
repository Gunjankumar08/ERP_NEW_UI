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
import { getHostelExtrafeeDetails } from '../../services';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export function CustomLoader() {
 
  return (
    <FadeLoader color="#36d7b7"/>
    // <LoadingWidget className="" type="ThreeCircles" />
  );
}

export default function extraHostelFeeTable() {
  const [hostelExtrafeeData,setHostelExtrafeeData]=React.useState([]);
  useEffect(()=>{
    getHostelExtrafeeDetails().then((response) =>
    setHostelExtrafeeData(response.res),
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
        <MDBCol md='5'></MDBCol>
      <MDBCol md='3'>
      <Button variant="outlined" style={{ marginLeft: "auto" }}><Link to='/add_hostel_extrafee'>+Add Extra Fee</Link> </Button>
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
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Fee Name</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Fee Amount</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Student Type</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Month-Year</strong></TableCell>
                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Action</strong></TableCell>
                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong></strong></TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {hostelExtrafeeData.map((row,index) => (
                        <TableRow key={row.id}>
                          <TableCell align="center"style={{fontSize:'9px'}}>{index+1}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.fee_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.fee_amount}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.student_type_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.month}-{row.year}</TableCell>

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


