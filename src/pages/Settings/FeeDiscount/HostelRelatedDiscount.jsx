import React,{useState } from 'react'
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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function HostelRelatedDiscount(props) {
  const params =useParams()
  console.log(params.id,'params');
  const [age, setAge] = React.useState('');
  const handleChangeForMonth = (event) => {
    setAge(event.target.value);
  };

  const [value,setValue]=useState(99999)

const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [update, setUpdate] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );

    };
return (
      <>
      <MDBCard>
        <MDBCardHeader>Hostel Fee Discount</MDBCardHeader>
        <MDBCardBody>
          <MDBRow className='text-center'>
                  <MDBCol col='3'>
                <FormControl sx={{ maxWidth: 200,minWidth: 122 }} size='small'>
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Age"
                      onChange={handleChangeForMonth}
                    >
                      {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                    </Select>
                  </FormControl>
                  </MDBCol>
                  <MDBCol col='2'>

                      <MDBInput  id='formControlDisabled' value={value} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                  </MDBCol>
                  <MDBCol col='2'>
                  <MDBInput  wrapperClass='mb-3' label='Discounted Amount' id='discounted_amount' name='discounted_amount' type='number'  style={{ maxWidth: '100%',minWidth: 90 }}/>

                  </MDBCol>
                  <MDBCol col='2'>
                      <MDBInput  id='formControlDisabled' value={value} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                  </MDBCol>
                  <MDBCol col='3'>
                  <Button   variant="contained" size='md' >Discount</Button>
                  </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <hr></hr>
      <MDBCard>
        <MDBCardHeader>Hostel Other Fee Discount</MDBCardHeader>
        <MDBCardBody>
          <MDBRow className='text-center'>
                  <MDBCol col='2'>
                <FormControl sx={{ maxWidth: 200,minWidth: 122 }} size='small'>
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Age"
                      onChange={handleChangeForMonth}
                    >
                      {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                    </Select>
                  </FormControl>
                  </MDBCol>
                  <MDBCol col='2'>
                <FormControl sx={{ maxWidth: 200,minWidth: 122 }} size='small'>
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Age"
                      onChange={handleChangeForMonth}
                    >
                      {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                    </Select>
                  </FormControl>
                  </MDBCol>
                  <MDBCol col='2'>

                      <MDBInput  id='formControlDisabled' value={value} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                  </MDBCol>
                  <MDBCol col='2'>
                  <MDBInput  wrapperClass='mb-3' label='Discounted Amount' id='discounted_amount' name='discounted_amount' type='number'  style={{ maxWidth: '100%',minWidth: 90 }}/>

                  </MDBCol>
                  <MDBCol col='2'>
                      <MDBInput  id='formControlDisabled' value={value} type='text' disabled style={{ maxWidth: '100%',minWidth: 90 }} />
                  </MDBCol>
                  <MDBCol col='2'>
                  <Button   variant="contained" size='md' >Discount</Button>
                  </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </>
  )
}

export default HostelRelatedDiscount
