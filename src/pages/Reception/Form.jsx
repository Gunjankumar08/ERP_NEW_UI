import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Paper from "@material-ui/core/Paper";
import Grid from '@mui/material/Grid';
import { useState,useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { dummy } from './dummyData';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { TextareaAutosize } from '@mui/base';
import dayjs from 'dayjs';

// import {createEnquiryData} from "../../services/index"
function Form() {

const [enquiry,setEnquiry]= useState({student_name:'',class_id:'',gender:'',father_name:'',mother_name:'',father_mobile_no:'',mother_mobile_no:'',address_1:'',address_2:''})
const [date_of_enq, setDate_of_enq] = React.useState(null);
const [date_of_birth, setDate_of_birth] = React.useState(null);
const [date_of_test, setDate_of_test] = React.useState(null);
const [time_of_test, setTime_of_test] = React.useState(null);



const enquiry_form_submition=(e)=>{
    e.preventDefault()
    createEnquiryData(date_of_enq,date_of_birth,date_of_test,
        time_of_test,enquiry.student_name,enquiry.class_id,enquiry.gender,enquiry.father_name,
        enquiry.mother_name,enquiry.father_mobile_no,enquiry.mother_mobile_no,enquiry.address_1,
        enquiry.address_2).then((result) =>
    console.log('api calll')
    )
}
      
const onChange= (e) =>{
    setEnquiry({...enquiry,[e.target.name]: e.target.value})
}
  return (
    <>
        <h1 className='text-center mb-3 underline' style={{fontSize:'18px'}}>Add Form</h1>
        <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Date of Enquiry"
                    size="small"
                    value={date_of_enq}
                    // onChange={onChange}
                    onChange={(newValue) => {
                    setDate_of_enq(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </FormControl>
            </Grid>    
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl  fullWidth sx={{backgroundColor:'white'}} size="small">
                <InputLabel htmlFor="student_name">Student Name</InputLabel>
                <OutlinedInput
                // size="small"
                id="student_name"
                name="student_name"
                // value={process.process_name}
                onChange={onChange}
                label="student_name" required
                />
            </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}>
            <TextField
                id="class_id"
                select
                label="Select Class"
                onChange={onChange}
                name="class_id"
                size="small"
            //   value={subProcess.process_id}
                // helperText="Please select process name"
                // fullWidth sx={{ m: 1 }}
            >
                {dummy.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                    {option.name}
                    
                </MenuItem>
                
                ))}
            </TextField>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="gender"
                    // value={process.is_active}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Date of Birth"
                    size="small"
                    value={date_of_birth}
                    onChange={(newValue) => {
                        setDate_of_birth(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </FormControl>
            </Grid>    
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white' }}size="small">
                <InputLabel htmlFor="father_name">Father's Name</InputLabel>
                <OutlinedInput
                id="father_name"
                name="father_name"
                // value={process.process_name}
                onChange={onChange}
                label="father_name" required
                />
            </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
                <InputLabel htmlFor="mother_name">Mother's Name</InputLabel>
                <OutlinedInput
                id="mother_name"
                name="mother_name"
                // value={process.process_name}
                onChange={onChange}
                label="mother_name" required
                />
            </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
                <InputLabel htmlFor="father_mobile_no">Father Mobile no.</InputLabel>
                <OutlinedInput
                id="father_mobile_no"
                name="father_mobile_no"
                
                // value={process.process_name}
                onChange={onChange}
                label="father_mobile_no" required
                />
            </FormControl>
            </Grid>  
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
                <InputLabel htmlFor="mother_mobile_no">Mother Mobile no.</InputLabel>
                <OutlinedInput
                id="mother_mobile_no"
                name="mother_mobile_no"
                
                // value={process.process_name}
                onChange={onChange}
                label="mother_mobile_no" required
                />
            </FormControl>
            </Grid>  
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
                <TextareaAutosize
                // aria-label="minimum height"
                minRows={3}
                placeholder="Address 1"
                // style={{ width: 308 }}
                id="address_1"
                name="address_1"
                />
            </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
                <TextareaAutosize
                // aria-label="minimum height"
                minRows={3}
                placeholder="Address 2"
                // style={{ width: 308 }}
                id="address_2"
                name="address_2"
                />
            </FormControl>
            </Grid><br></br>
           
            <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
            <FormControl fullWidth sx={{backgroundColor:'white'}}size="small">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Test Date"
                    size="small"
                    value={date_of_test}
                    onChange={(newValue) => {
                        setDate_of_test(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                </FormControl>
                {/* <TextField
                    size="small"
                    id="to_date"
                    name="to_date"
                    label="To date"
                    type="date"
                    focused
                    color="success"
                    // value={date.to_date}
                    // disabled={!date.from_date}
                    onChange={onChange}
                    onKeyDown={(e)=>{
                    e.preventDefault();
                    }}
                    // defaultValue={format2}
                    sx={{ margin: 0.5, minWidth: [300, 270, 270, 170] }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> */}
                </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6} xl={3} >
        <FormControl fullWidth >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                'MobileTimePicker'
                ]}
            >
                <DemoItem >
                <MobileTimePicker  
                label="Test Time"
                size="small"
                value={time_of_test}
                onChange={(newValue) => {
                    setTime_of_test(newValue);
                }}
                renderInput={(params) => <TextField {...params} />} />
                </DemoItem>
                
            </DemoContainer>
            </LocalizationProvider>
        </FormControl>
        </Grid>     
         
        </Grid>
        <br></br>
        <Box textAlign='center'>
            <Button variant='outlined' sx={{backgroundColor:'white',width:'150px'}} onClick={enquiry_form_submition}>
               Submit
            </Button>
        </Box>

        </>

  )
}

export default Form
