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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Link,
  useLocation,
} from "react-router-dom";
import {getFeeAmount,class_fee_payment,getPayfeeStudentDetails,getMonthWiseFeeAmount,
  One_Time_class_Fee_Payment} from '../services/index';
import { useEffect } from "react";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const months = [
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar'
  
];

const res= [
      {
          "fee_name": "class_charge",
          "fee_amount": 1000.0
      },
      {
          "fee_name": "bus_root_charge",
          "fee_amount": 100.0
      },
      {
          "id": 1,
          "fee_name": "Annual Fee",
          "fee_amount": "1000"
      },
      {
          "id": 2,
          "fee_name": "ABC fee",
          "fee_amount": "1000"
      },
      {
          "id": 3,
          "fee_name": "test Fee",
          "fee_amount": "1000"
      },
      {
          "id": 10,
          "fee_name": "test Fee2",
          "fee_amount": "1000"
      }
  ]


function getStylesForclass(months, classMonthName, theme) {
  return {
    fontWeight:
      classMonthName.indexOf(months) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesForhostel(months, hostelMonthName, theme) {
  return {
    fontWeight:
    hostelMonthName.indexOf(months) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function payfee(props) {
  const [value,setValue]=useState(99999)
  const theme = useTheme();
  const [classMonthName, setClassMonthName] = React.useState([]);
  const [monthWiseAmt,setMonthWiseAmt]=React.useState([])

 
  const classhandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setClassMonthName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
      getMonthWiseFeeAmount(event.target.value).then((response) =>
      setMonthWiseAmt(response),
      )  
    };
    



  const [hostelMonthName, setHostelMonthName] = React.useState([]);
  const hostelhandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHostelMonthName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [SchoolTab,setSchoolTab]=React.useState(true)
  const [HostelTab,setHostelTab]=React.useState(false)

  const schoolTab=async (e)=>{
    setHostelTab(false)
  setSchoolTab(true)
};
const hostelTab=async (e)=>{
    setSchoolTab(false)
  setHostelTab(true)
};
const [currentFee,setCurrentFee]=React.useState([])
const [finalAmt,setFinalAmt]=React.useState([])
const [student,setStudent]=React.useState([])

localStorage.setItem("id", student[0]?.id)
useEffect(()=>{
  getFeeAmount().then((response) =>
    setCurrentFee(response.res),
  )
  getPayfeeStudentDetails().then((response) =>
  setStudent(response),
)
getFeeAmount().then((response) =>
   setFinalAmt(response.final_amount[0])
  )
  // eslint-disable-next-line 
},[])

let field_array=[]

  for(let j of currentFee){
    console.log(j.fee_name);
    field_array.push({id:j.id,pay_amt:0,fee_name:j.fee_name});
  }
  
  //  field_array= currentFee?.map((n,index)=>({
  //   name:'',
  //   ...n

  // }))
  const [amount,setAmount]=React.useState([]);
  useEffect(()=>{
  setAmount(field_array)
    // eslint-disable-next-line 
  },[currentFee])
  
  const handleFormChange= (event,index,fee_name)=>{
    let data=[...amount];
    data[index][event.target.name]=event.target.value
    setAmount(data)
    
};

const classFeePayment=(e)=>{
  e.preventDefault()
  class_fee_payment(amount).then((result) =>
  // setMsg({message:result.message,type:result.type}) 
  console.log('data added!')
  )
  // setTimeout(() => {
    
  //   setMsg({message:'',type:''})
  //   navigate.push('/admin/process')
  // }, 1500);
}
const OneTimeclassFeePayment=(e)=>{
  e.preventDefault()
  One_Time_class_Fee_Payment(classMonthName,monthWiseAmt.final_amount).then((result) =>
  // setMsg({message:result.message,type:result.type}) 
  console.log('data added!')
  )
}
const PartByPartClassFeePayment=(e)=>{
  e.preventDefault()
  
  Part_by_part_class_fee_payment(classMonthName,monthWiseAmt.final_amount).then((result) =>
  console.log('data added!')
  )
}

  return (
    <>
    
    <MDBCard alignment='center'>
        <MDBRow className='text-center'>
              
                <MDBCol col='4'>
                <MDBCardHeader>Adm No: {student[0]?.admission_no}</MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                <MDBCardHeader>Student Name : {student[0]?.student_name}</MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                <MDBCardHeader>Class : {student[0]?.class_name}-{student[0]?.section_name}</MDBCardHeader>
                </MDBCol>
                 
          </MDBRow>
          <MDBRow className='text-center'>
                <MDBCol col='4'>
                <MDBCardHeader>Roll No : {student[0]?.roll_no}</MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                <MDBCardHeader>Father's Name: {student[0]?.father_name}</MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                <MDBCardHeader>Mother Name : {student[0]?.mother_name}</MDBCardHeader>
                </MDBCol>
                
          </MDBRow>
      <MDBCardBody>
       
        <MDBRow className='text-center'>
                <MDBCol col='3'>
                <Button onClick={schoolTab}><SettingsSuggestIcon/>School Fee</Button>
                </MDBCol>
                <MDBCol col='3'>
                <FormControl sx={{ maxWidth: 200,minWidth: 130 }} size='small'>
                  <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={classMonthName}
                    onChange={classhandleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {months.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStylesForclass(name, classMonthName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </MDBCol>
                <MDBCol col='3'>
                <MDBInput  id='formControlDisabled' value={monthWiseAmt.final_amount} type='text' disabled sx={{ maxWidth: 200,minWidth: 130 }} />
                </MDBCol>
                <MDBCol col='3'>
                <Button   variant="contained" size='md' sx={{ maxWidth: 200,minWidth: 130 }} onClick={OneTimeclassFeePayment} >Pay</Button>
                </MDBCol>
        </MDBRow><hr></hr>
        <MDBRow className='text-center'>
                <MDBCol col='3'>
                <Button onClick={hostelTab}><SettingsSuggestIcon/>Hostel Fee</Button>
                </MDBCol>
                <MDBCol col='3'>
                <FormControl sx={{ maxWidth: 200,minWidth: 130 }} size='small'>
                  <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={hostelMonthName}
                    onChange={hostelhandleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {months.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStylesForhostel(name, hostelMonthName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                 {/* <MDBCardHeader>Featured</MDBCardHeader> */}
                </MDBCol>
                <MDBCol col='3'>
                <MDBInput  id='formControlDisabled' value={value} type='text' disabled sx={{ maxWidth: 200,minWidth: 130 }}/>
                </MDBCol>
                <MDBCol col='3'>
                <Button   variant="contained" size='md'sx={{ maxWidth: 200,minWidth: 130 }}  >Pay</Button>
                </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <MDBCardFooter>
      {SchoolTab ?(
        <MDBCard className='text-center'>
        <MDBCardHeader style={{backgroundColor:'#00000008'}}>
            <MDBCardTitle style={{fontSize:'16px',fontWeight:'600'}}>ABCD Public school</MDBCardTitle>
            <MDBCardText style={{fontSize:'12px'}}>
            With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBCardTitle style={{fontSize:'16px',fontWeight:'600'}}>School Fee</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
            <TableContainer component={Paper}>
                <Table stickyHeader   aria-label="simple table" size="small">
                <TableHead  >
                    <TableRow>
                    <TableCell align="center"><strong>Fee Head</strong></TableCell>
                    <TableCell align="center"><strong>Payable Amt.</strong></TableCell>
                    <TableCell align="center"><strong>Paid Amt.</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentFee.map((row,index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{row.fee_name}</TableCell>
                        <TableCell align="center">{row.fee_amount}</TableCell>
                         <TableCell align="center"><input type="text" name='pay_amt' onChange={event=>handleFormChange(event,index,row.fee_name)} value={amount.pay_amt} /> </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="center">Total Amt.</TableCell>
                        <TableCell align="center">{finalAmt.final_amount}</TableCell>
                        <TableCell align="center"><MDBBtn onClick={classFeePayment}>Pay</MDBBtn></TableCell>
                        </TableRow>
                </TableBody>
                
                </Table>
            </TableContainer>
            
        </MDBCardBody>
        </MDBCard>
        ):
        (
        <MDBCard className='text-center'>
        <MDBCardHeader style={{backgroundColor:'#00000008'}}>
            <MDBCardTitle style={{fontSize:'16px',fontWeight:'600'}}>ABCD Public school</MDBCardTitle>
            <MDBCardText style={{fontSize:'12px'}}>
            With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBCardTitle style={{fontSize:'16px',fontWeight:'600'}}>Hostel Fee</MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
            <MDBCardTitle>Hostel Fee</MDBCardTitle>
            <MDBCardText>
            With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn>Go somewhere</MDBBtn>
        </MDBCardBody>
        </MDBCard>)}
      </MDBCardFooter>
    </MDBCard>
    <MDBRow className='text-center'>
      <MDBCol sm='6'>
        <MDBCard>
        <MDBCardHeader style={{backgroundColor:'#00000008'}}>Class Receipt</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
            <TableContainer component={Paper}>
                  <Table stickyHeader   aria-label="simple table" size="small">
                  <TableHead  >
                      <TableRow>
                      <TableCell align="center"><strong>Fee Head</strong></TableCell>
                      <TableCell align="center"><strong>Payable Amt.</strong></TableCell>
                      <TableCell align="center"><strong>Paid Amt.</strong></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {currentFee.map((row,index) => (
                      <TableRow key={index}>
                          <TableCell align="center">{row.fee_name}</TableCell>
                          <TableCell align="center">{row.fee_amount}</TableCell>
                          <TableCell align="center"><Link to='#'><RemoveRedEyeIcon/></Link></TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
                  </Table>
              </TableContainer>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
        <MDBCardHeader style={{backgroundColor:'#00000008'}}>Hostel Receipt</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <Link to='#'><RemoveRedEyeIcon/></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}

export default payfee
