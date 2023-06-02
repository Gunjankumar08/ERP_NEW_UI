import React,{useState,useEffect} from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,MDBCardTitle,MDBCardHeader,MDBCardText
}
from 'mdb-react-ui-kit';
import {
  Link,
  useLocation,
} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from "react-router-dom";
import {getStudentType,add_hostel_extrafee} from '../../services/index'
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FormControl from "@mui/material/FormControl";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function addHostelExtraFee() {
    let navigate = useHistory();
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
   
    const [ addhostelextrafee,setAddHostelextrafee]=useState({fee_name:'',fee_amount:'',student_type_id:''})
    const [ open,setOpen]=useState(false)
    const [ result,setResult]=useState('')
    const [months, setMonth] = React.useState('');

    const onChange= (e) =>{
        setAddHostelextrafee({...addhostelextrafee,[e.target.name]: e.target.value})
  }
  
  const hostelextrafeeSubmit=async (e)=>{
    e.preventDefault();
    add_hostel_extrafee(addhostelextrafee,months).then((result) =>
    setResult(result.messages)
    )
    setOpen(true)
    setTimeout(() => {
    setOpen(false)
    navigate.push('/hostel_extrafee_table')

  }, 1500);
  }
  const [studentType,setStudentType]=React.useState([]);

  useEffect(()=>{
  getStudentType().then((response) =>
  setStudentType(response.res),
  )
    // eslint-disable-next-line 
  },[])

  return (
    <>
    <div className='settings-page'>
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md='3' className='text-md-start d-flex flex-column '>
                    <Link to='/hostel_extrafee_table'> <ReplyAllTwoToneIcon/> </Link>
                </MDBCol>
                <MDBCol md='6'>
                <MDBCard>
                    <MDBCardHeader style={{backgroundColor:'#00000008'}}>
                        <MDBCardTitle className="display-7 fw-bold ls-tight px-1 text-center"style={{fontSize:'16px',fontWeight:'600'}}>Add Hostel Extra Fee</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody className='p-4'>
                    <MDBInput  wrapperClass='mb-3' label='Fee Name' id='fee_name' name='fee_name' type='text' onChange={onChange}/>
                    <MDBInput  wrapperClass='mb-3' label='Fee Amount' id='fee_amount' name='fee_amount' type='number'onChange={onChange} />
                        <TextField
                          id="student_type_id"
                          size="small"
                          select
                          label="Select Student Type"
                          onChange={onChange}
                          name="student_type_id"
                          // value={subProcess.process_id}
                          helperText="Please select student type"
                          fullWidth 
                        >
                          {studentType.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.student_type_name}
                            </MenuItem>
                            
                            ))}
                        </TextField>
                        <FormControl focused  fullWidth>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              views={["month", "year"]}
                              label="Month - Year"
                              // value={months}
                              onChange={(newValue) => {
                                setMonth(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  size="small"
                                  {...params}
                                  focused
                                  onKeyDown={(e) => {
                                    e.preventDefault();
                                  }}
                                />
                              )}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </LocalizationProvider>
                        </FormControl><br></br><br></br>
                    <center><Button className='w-40 mb-4' size='md' variant="contained" onClick={hostelextrafeeSubmit}  >SUBMIT</Button></center>
                    <Stack spacing={2} sx={{ width: '100%'}}>
                    
                    {open &&
                    <Alert severity="info">{result}</Alert>
                    }
                    
                    </Stack>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
    </>

  )
}

export default addHostelExtraFee
