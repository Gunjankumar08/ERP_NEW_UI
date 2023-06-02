import React,{useState,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MDBTable,MDBTableHead,MDBTableBody ,MDBCardHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn, MDBCardTitle,
  MDBCardText,
  MDBCardBody} from 'mdb-react-ui-kit';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Grid} from "@material-ui/core";
import ClassRelatedDiscount from './ClassRelatedDiscount';
import HostelRelatedDiscount from './HostelRelatedDiscount';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {getPayfeeStudentDetails,getClassDetails} from "../../services/index"

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
function AddDiscount(props) {
  const params =useParams()
  console.log(params.id,'params');

  const [value, setValue] = React.useState('1');
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [student,setStudent]=React.useState([])
  localStorage.setItem("class_name", student[0]?.class_name)

  useEffect(()=>{
    getPayfeeStudentDetails().then((response) =>
    setStudent(response),
  )
  getClassDetails().then((response) =>
    setClassFee(response),
  )
  // eslint-disable-next-line 
  },[])

  const [month, setMonth] = React.useState('');
  const [devalue,setDefValue]=useState(99999)

  const handleChangeForMonth = (event) => {
    setMonth(event.target.value);
  };
return (
      <>
       <MDBCard alignment='center'>
            <MDBRow className='text-center'>
                <MDBCol col='4'>
                  <MDBCardHeader><strong>Adm No: {student[0]?.admission_no}</strong></MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                  <MDBCardHeader><strong>Student Name :{student[0]?.student_name}</strong></MDBCardHeader>
                </MDBCol>
                <MDBCol col='4'>
                  <MDBCardHeader><strong>Class : {student[0]?.class_name}-{student[0]?.section_name}</strong></MDBCardHeader>
                </MDBCol>  
            </MDBRow>
        </MDBCard>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: '#E7F7E6' }}>
                  <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    {/* <Tab label="Process" value="1" onClick={GetProcessData}/> */}
                    <Tab label="Class Fee Discount" value="1" />
                    <Tab label="Hostel Fee Discount" value="2"/>
                  </TabList>
            </Box>
            <TabPanel value="1">
                    <MDBCard>
                <MDBCardHeader>Class Fee Discount</MDBCardHeader>
                <MDBCardBody>
                  <MDBRow className='text-center'>
                          <MDBCol col='3'>
                        <FormControl sx={{ maxWidth: 200,minWidth: 122 }} size='small'>
                            <InputLabel id="demo-select-small-label">Month</InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={month}
                              label="Month"
                              onChange={handleChangeForMonth}
                            >
                              {months.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                // style={getStyles(name, personName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                            </Select>
                          </FormControl>
                          </MDBCol>
                          <MDBCol col='2'>

                              <MDBInput  id='formControlDisabled' value={devalue} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                          </MDBCol>
                          <MDBCol col='2'>
                          <MDBInput  wrapperClass='mb-3' label='Discounted Amount' id='discounted_amount' name='discounted_amount' type='number'  style={{ maxWidth: '100%',minWidth: 90 }}/>

                          </MDBCol>
                          <MDBCol col='2'>
                              <MDBInput  id='formControlDisabled' value={devalue} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                          </MDBCol>
                          <MDBCol col='3'>
                          <Button   variant="contained" size='md' >Discount</Button>
                          </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </TabPanel>
            <TabPanel value="2">
                <HostelRelatedDiscount/>
            </TabPanel>
          </TabContext>
        </Box>
      </>
  )
}

export default AddDiscount
