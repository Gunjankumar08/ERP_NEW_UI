import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { DataGrid, GridRowsProp, GridColDef ,GridToolbar} from '@mui/x-data-grid';
import { DataGrid, GridToolbar,GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {data} from "./TableHeader"
import Form from './Form';
import {Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader"
import {getEnquiryData} from "../services/index"
import { useState,useEffect } from "react";

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
export function CustomLoader() {
 
  return (
    <FadeLoader color="#36d7b7"/>
    // <LoadingWidget className="" type="ThreeCircles" />
  );
}

function CustomToolbar() {
  return (
    <GridToolbarContainer
      // sx={{ backgroundColor: "#6aa66b", flexWrap: "wrap" }}
      sx={{ flexWrap: "wrap" }}
      >
      <GridToolbarQuickFilter color="success" sx={{ marginRight: 2 }} />
      {/* <GridToolbarColumnsButton sx={{ color: "black" }} /> */}
      {/* <GridToolbarFilterButton sx={{ color: "black" }} /> */}
      {/* <GridToolbarDensitySelector sx={{ color: "black" }} /> */}
      <GridToolbarExport
        sx={{ color: "black" }}
        printOptions={{ disableToolbarButton: true,}}
        csvOptions={{
          fileName: 'Table1',
        
          utf8WithBom: true,
          // columnsStyles: {
          //   // replace the dd.mm.yyyy default date format
          //   // recruitmentDay: { numFmt: 'dd/mm/yyyy' },
          //   // set this column in green
          //   emp_name: { font: { argb: 'FF00FF00' } },
          // },
        }}

        excelOptions={{
          columnsStyles: {
            // replace the dd.mm.yyyy default date format
            // recruitmentDay: { numFmt: 'dd/mm/yyyy' },
            // set this column in green
            emp_name: { font: { argb: 'FF00FF00' } },
          },
        }}
       
      />
      <Button variant="outlined" style={{ marginLeft: "auto" }}><Link to='/form'>+Add Form</Link> </Button>
     
      
    </GridToolbarContainer>
  );
}

export default function Table() {
  const [loading,setLoading]=React.useState(false);
  useEffect(()=>{
    getEnquiryData().then((result) =>
      console.log('resssss')
    )
    // eslint-disable-next-line 
  },[])

  return (
    <div style={{ height: '100%', width: '100%'}}>
      <DataGrid 
       sx={{
        ".MuiDataGrid-row.Mui-odd": {
          backgroundColor: "#c5f1ce47",
        },
        '&.MuiDataGrid-root': {
        },
        "& .super-app-theme--header": {
          backgroundColor:'#353535',
          fontFamily: 'sans-serif',
          color:'white'
         
        },
      }}
      {...data} 
      density="compact"
      loading={loading}
      // slots={{ toolbar: GridToolbar}}

      components={{
        Toolbar: CustomToolbar,
        LoadingOverlay: CustomLoader,
      }}
    
      />
      {/* <DataGrid {...data} slots={{ toolbar: GridToolbar }} /> */}
    </div>
  );
}
