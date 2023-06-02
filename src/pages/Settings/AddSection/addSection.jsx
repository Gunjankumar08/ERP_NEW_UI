import React,{useState} from 'react'
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
import {add_class,add_section} from '../../services/index'
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';

function addSection() {
    let navigate = useHistory();
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const date = new Date();
    let current_year = date.getFullYear();
    const [ addsection,setAddsection]=useState({section_name:''})
    const [ open,setOpen]=useState(false)
    const [ result,setResult]=useState('')

    const onChange= (e) =>{
        setAddsection({...addsection,[e.target.name]: e.target.value})
  }
  
  const sectionSubmit=async (e)=>{
    e.preventDefault();
    add_section(addsection).then((result) =>
    setResult(result.messages)
    )
    setOpen(true)
    setTimeout(() => {
    setOpen(false)
    navigate.push('/section_table')

  }, 1500);
  }
  return (
    <>
    <div className='settings-page'>
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md='3' className='text-md-start d-flex flex-column '>
                    <Link to='/section_table'> <ReplyAllTwoToneIcon/> </Link>
                </MDBCol>
                <MDBCol md='6'>
                <MDBCard>
                    <MDBCardHeader style={{backgroundColor:'#00000008'}}>
                        <MDBCardTitle className="display-7 fw-bold ls-tight px-1 text-center"style={{fontSize:'16px',fontWeight:'600'}}>Add Section</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody className='p-4'>
                    <MDBInput  wrapperClass='mb-3' label='Section Name' id='section_name' name='section_name' type='text'onChange={onChange}  />
                    <center><Button className='w-40 mb-4' size='md' variant="contained" onClick={sectionSubmit}  >SUBMIT</Button></center>
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

export default addSection
