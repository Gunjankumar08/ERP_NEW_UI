import React,{useState} from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,MDBTextArea,
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
import {add_hostel} from '../../services/index'
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';
function addHostel() {
    let navigate = useHistory();
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const date = new Date();
    let current_year = date.getFullYear();
    const [ addhostel,setAddhostel]=useState({year:current_year,hostel_name:'',hostel_fee:'',hostel_fee_inst:'',hostel_instruction:''})
    const [ open,setOpen]=useState(false)
    const [ result,setResult]=useState('')

    const onChange= (e) =>{
        setAddhostel({...addhostel,[e.target.name]: e.target.value})
  }
  
  const hostelSubmit=async (e)=>{
    e.preventDefault();
    add_hostel(addhostel).then((result) =>
    setResult(result.messages)
    )
    setOpen(true)
    setTimeout(() => {
    setOpen(false)
    navigate.push('/hostel_table')

  }, 1500);
  }
  return (
    <>
    <div className='settings-page'>
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md='3' className='text-md-start d-flex flex-column '>
                    <Link to='/hostel_table'> <ReplyAllTwoToneIcon/> </Link>
                </MDBCol>
                <MDBCol md='6'>
                <MDBCard>
                    <MDBCardHeader style={{backgroundColor:'#00000008'}}>
                        <MDBCardTitle className="display-7 fw-bold ls-tight px-1 text-center"style={{fontSize:'16px',fontWeight:'600'}}>Add Hostel</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody className='p-4'>
                    <MDBInput  wrapperClass='mb-3' label='Year' id='year' name='year' type='text'  defaultValue={current_year} onChange={onChange}/>
                    <MDBInput  wrapperClass='mb-3' label='Hostel Name' id='hostel_name' name='hostel_name' type='text'onChange={onChange}  />
                    <MDBInput  wrapperClass='mb-3' label='Hostel Fee' id='hostel_fee' name='hostel_fee' type='number'onChange={onChange} />
                    <MDBInput  wrapperClass='mb-3' label='Fee Installment' id='hostel_fee_inst' name='hostel_fee_inst' type='number' onChange={onChange}/>
                    <MDBTextArea rows={2} wrapperClass='mb-3' label='Hostel Instruction' id='hostel_instruction' name='hostel_instruction' type='text' onChange={onChange}/>

                    <center><Button className='w-40 mb-4' size='md' variant="contained" onClick={hostelSubmit}  >SUBMIT</Button></center>
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

export default addHostel
