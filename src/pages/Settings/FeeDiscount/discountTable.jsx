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
import { getStudentDetails } from '../../services';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function CustomLoader() {
  
  return (
    <FadeLoader color="#36d7b7"/>
    // <LoadingWidget className="" type="ThreeCircles" />
    );
  }
  
  export default function discountTable() {
  
  const [studentData,setStudentData]=React.useState([]);
  useEffect(()=>{
    getStudentDetails().then((response) =>
    setStudentData(response.res),
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
        <MDBCol md='8'></MDBCol>
      
      </MDBRow>
        <MDBRow>
            <MDBCol md='12'>
              <MDBCard>
                <TableContainer component={Paper} >
                  <Table stickyHeader   aria-label="simple table" size="small">
                    <TableHead  >
                      <TableRow>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>S.No</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Adm No.</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Student Name</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Class</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Roll No.</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>DOB</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Father Name</strong></TableCell>
                        <TableCell align="center"style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Mobile No.</strong></TableCell>

                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong>Action</strong></TableCell>
                        <TableCell style={{fontSize:'10px',backgroundColor:'#1d1d1d',color:'white'}}><strong></strong></TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {studentData.map((row,index) => (
                        <TableRow key={row.id}>
                          <TableCell align="center"style={{fontSize:'9px'}}>{index+1}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.admission_no}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.student_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.class_name}-{row.section_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.roll_no}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.date_of_birth}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.father_name}</TableCell>
                          <TableCell align="center"style={{fontSize:'9px'}}>{row.father_mobile_no}</TableCell>
                          <TableCell>
                              <Link to={`/add_discount/${row.id}`}><IconButton  color="dark" size='small'><EditIcon/></IconButton></Link>
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
