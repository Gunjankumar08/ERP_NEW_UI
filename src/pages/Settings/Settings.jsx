import * as React from 'react';
import {Grid} from "@material-ui/core";
import {Link } from 'react-router-dom';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SchoolIcon from '@mui/icons-material/School';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,MDBCardHeader,MDBCardFooter,MDBInput 
} from 'mdb-react-ui-kit';
const Settings = ({ image, handleImageChange }) => {
  const card_data =[
    {
        "id": 1,
        "value":"Class",
        "url":'/class_table',
        "icon_color":'primary',
        "last_update":"22-May-2023",
        "icon":<SchoolIcon/>,
    },
    {
        "id": 2,
        "value":"Section",
        "url":'/section_table',
        "icon_color":'secondary',
        "last_update":"25-May-2023",
        "icon":<SchoolIcon/>,
    },
    {
      "id": 3,
      "value":"Bus Root",
      "url":'/busroot_table',
      "icon_color":'success',
      "last_update":"23-May-2023",
      "icon":<DirectionsBusIcon/>,
    },
    {
      "id": 4,
      "value":"Extra Fee",
      "url":'/extrafee_table',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<CurrencyRupeeIcon/>,
    }
    ,
    {
      "id": 5,
      "value":"Hostel",
      "url":'/hostel_table',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<AddHomeWorkIcon/>,
    },
    {
      "id": 6,
      "value":"H.Extra Fee",
      "url":'/hostel_extrafee_table',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<CurrencyRupeeIcon/>,
    },
    {
      "id": 7,
      "value":"Other Fee",
      "url":'/otherfee_table',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<CurrencyRupeeIcon/>,
    },
    {
      "id": 8,
      "value":"Discount",
      "url":'/discount_table',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<TextSnippetIcon/>,
    },
    {
      "id": 9,
      "value":"Settings",
      "url":'/school_setting',
      "icon_color":'danger',
      "last_update":"24-May-2023",
      "icon":<SettingsSuggestIcon/>,
    }
  ]
  return (
    <>
    <Grid container>
        {card_data.map((card_data, k) => (
          <Grid item xs={12} md={6} lg={4} sm={6} xl={4}>
            <Link to={`${card_data.url}/${card_data.id}`} style={{ color: 'white' ,textDecoration: 'none'}}>
              <MDBCard className='m-2 square border border-0'style={{backgroundColor:'#f2f2f2'}}>
              <MDBCardBody className=''>
                <MDBRow className={`text-center square border border-secondary`}>
                      <MDBCol col="3"  className='fancy-border-radius border d-flex align-items-center justify-content-center' >{card_data.icon}</MDBCol>
                      <MDBCol col="9" >
                        <h4  style={{ color: 'black' }}>{card_data.value}</h4>
                        <p style={{fontSize:'10px',color: 'black'}}>Last Update :{card_data.last_update}</p>
                        </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </Link>
          </Grid>
        ))}
    </Grid>
    </>
  );
};

export default Settings;


