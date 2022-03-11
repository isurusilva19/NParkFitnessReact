import React, { useEffect, useRef, useState } from 'react';

// material-ui
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


// project imports
import MainCard from 'ui-component/cards/MainCard';

const api = axios.create({
  baseURL: 'http://localhost:3005'
});

//styles
const useStyle = makeStyles({
  
  btnedit:{
    color:'#1565C0',
    cursor:'pointer'   
  },
  textbox1:{
      width:300
  }

})

const provinces = [
    {label:'Southern'},
    {label:'Northern'},
    {label:'Western'},
    {label:'Uva'},
    {label:'Eastern'},
    {label:'Central'},
    {label:'Sabaragamuwa'},
    {label:'North Central'},
    {label:'North Western'}
  ]


function BranchEdit(){
  const classes = useStyle();

  const [branchData,setBranchData] = React.useState();

  

  
  return(
    <MainCard title="Create New Branch">
   
   <TextField className={classes.textbox1} id="outlined-basic" label="Name" variant="outlined" /><br/><br/>
   <TextField id="outlined-basic" label="Street" variant="outlined" />&nbsp;&nbsp;
   <TextField  id="outlined-basic" label="Lane" variant="outlined" />&nbsp;&nbsp;
    <TextField  id="outlined-basic" label="City" variant="outlined" /><br/><br/>
    <Autocomplete 
            disablePortal
            id="combo-box-demo"
            options={provinces}
            sx={{ width: 300 }} 
            renderInput={(params) => <TextField {...params} label="Province" />}/><br/>
    <TextField className={classes.textbox} id="outlined-basic" label="GymID" variant="outlined" /><br/><br/>
    <Button className={classes.btnadd} variant="contained">Add Branch</Button>

    </MainCard>
  )
}

export default BranchEdit;
