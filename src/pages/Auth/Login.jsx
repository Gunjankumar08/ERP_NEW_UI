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
  MDBIcon
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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useHistory } from "react-router-dom";



function Login() {
  let navigate = useHistory();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [ credentials,setCredentials]=useState({email:'',password:''})
  const onChange= (e) =>{
    setLogin({...credentials,[e.target.name]: e.target.value})
}
const [ open,setOpen]=useState(false)

const loginSubmits=async (e)=>{
  e.preventDefault();
 console.log(credentials,'llllll');
 setOpen(true)
 setTimeout(() => {
  setOpen(false)
  navigate.push('/')

}, 1500);
//  handleClick()
}
  
  return (
    <div className='settings-page'>
    <MDBContainer fluid >
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
        </MDBCol>
        <MDBCol md='5'>
          <MDBCard >
            <MDBCardBody className='p-4'>
              <h1 className="display-7 fw-bold ls-tight px-1 text-center">
            Login <br />
          </h1>

              <MDBInput wrapperClass='mb-3' label='Email' id='email' name='email'  type='email'onChange={onChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='password'  name='password'   type='password'onChange={onChange}/>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}
              {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}
              
              <center><Button  className='w-40 mb-4' size='md' variant="contained" onClick={loginSubmits}  >sign up</Button></center>

             
              <Stack spacing={2} sx={{ width: '100%' }}>
              {/* <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
              </Button>
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  This is a success message!
                </Alert>
              </Snackbar>
              <Alert severity="error">This is an error message!</Alert>
              <Alert severity="warning">This is a warning message!</Alert>
              <Alert severity="info">This is an information message!</Alert> */}
              {open &&
              <Alert severity="success">Login Successful!</Alert>
              }
            </Stack>

              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )

}

export default Login

