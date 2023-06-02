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
import {add_class} from '../../services/index'
import ReplyAllTwoToneIcon from '@mui/icons-material/ReplyAllTwoTone';
function addClass() {
    let navigate = useHistory();
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const date = new Date();
    let current_year = date.getFullYear();
    const [ addclass,setAddclass]=useState({year:current_year,class_name:'',class_fee:'',class_fee_inst:''})
    const [ open,setOpen]=useState(false)
    const [ result,setResult]=useState('')

    const onChange= (e) =>{
        setAddclass({...addclass,[e.target.name]: e.target.value})
  }
  
  const classSubmit=async (e)=>{
    e.preventDefault();
    add_class(addclass).then((result) =>
    // setMsg({message:result.message,type:result.type}) 
    setResult(result.messages)
    )
    setOpen(true)
    setTimeout(() => {
    setOpen(false)
    navigate.push('/class_table')

  }, 1500);
  }
  return (
    <>
    <div className='settings-page'>
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md='3' className='text-md-start d-flex flex-column '>
                    <Link to='/class_table'> <ReplyAllTwoToneIcon/> </Link>
                </MDBCol>
                <MDBCol md='6'>
                <MDBCard>
                    <MDBCardHeader style={{backgroundColor:'#00000008'}}>
                        <MDBCardTitle className="display-7 fw-bold ls-tight px-1 text-center"style={{fontSize:'16px',fontWeight:'600'}}>Add Class</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody className='p-4'>
                    <MDBInput  wrapperClass='mb-3' label='Year' id='year' name='year' type='text'  defaultValue={current_year} onChange={onChange}/>
                    <MDBInput  wrapperClass='mb-3' label='Class Name' id='class_name' name='class_name' type='text'onChange={onChange}  />
                    <MDBInput  wrapperClass='mb-3' label='Class Fee' id='class_fee' name='class_fee' type='number'onChange={onChange} />
                    <MDBInput  wrapperClass='mb-3' label='Fee Installment' id='class_fee_inst' name='class_fee_inst' type='number' onChange={onChange}/>
                    <center><Button className='w-40 mb-4' size='md' variant="contained" onClick={classSubmit}  >SUBMIT</Button></center>
                    <Stack spacing={2} sx={{ width: '100%'}}>
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

export default addClass
