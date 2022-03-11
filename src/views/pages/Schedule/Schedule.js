import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/styles';
import { Avatar, CardActions, CardContent } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Table, TableHead, TableCell, TableRow, TableBody, stepContentClasses } from '@material-ui/core';
import {Button} from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const api = axios.create({
    baseURL: 'http://localhost:3005'
  });

function Schedule(){
    const [goalData, setGoalData] = React.useState();

   

    useEffect(() => {
        api.get('api/goal')
        .then((res) => {
            console.log(res.data);
            setGoalData(res.data.data);
        })
        .catch((err) => {
            console.log('error');
        })
    },[])

    const[scheduleData,setScheduleData] = React.useState();
    const[date1,getDate1] = React.useState();


    useEffect(() => {
        api.get('api/schedule')
        .then((res) => {
            console.log(res.data);
            setScheduleData(res.data.data);
            console.log(res.data.data.data);
        })
        .catch((err) =>{
            console.log("error")
        })
    })

    const[contacts,setContacts] = React.useState();

    const [editFormData, setEditFormData] = React.useState({
        expireDate:''
    });

    const [editContactId, setEditContctId] = React.useState(null);

    //  Add New gym data
 const handleAddFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...contacts};
    newFormData[fieldName] = fieldValue;

    setContacts(newFormData);
    console.log(contacts);
}
//Send New gym data to server
const handleAddFormSubmit = () => {
    console.log(contacts);
  
    api.post('/api/schedule/', { expireDate: contacts.expireDate})
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            
            
        })
        .catch((error) => {
            console.log(error);
        
            
        });
  };

//check expired or not


    return(
        <>
        <MainCard title="Schedule">
        <CardActions>

            <Avatar alt="Remy Sharp" src="1.jpg" />&nbsp;&nbsp;
            <b>Nimal Fernando</b>&nbsp;&nbsp;
            </CardActions>
            <CardActions>
             {goalData != null ? goalData.map((e, i) => <li key={i}>{e.heightTarget}</li>) : <></>}cm
             {goalData != null ? goalData.map((e, i) => <li key={i}>{e.weightTarget}</li>) : <></>}kg
             {goalData != null ? goalData.map((e, i) => <li key={i}>{e.description}</li>) : <></>}
             </CardActions>
            
            </MainCard><br></br>

            <MainCard>
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Expire Date&nbsp;</TableCell>
                        <TableCell>Current Status&nbsp;</TableCell>
                       
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {scheduleData != null ? (
                        scheduleData.map((e, i) => {
                            return (
                                <TableRow>
                                    <TableCell>{e.expireDate}</TableCell>
                                    <TableCell>{e.expireDate}</TableCell>
                                    <TableCell>
                                    <Button disableElevation size="medium" variant="contained" color="secondary">
                           View
                        </Button>
                        </TableCell>   
                                </TableRow>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </TableBody>
            </Table>
            </MainCard><br/>

            <MainCard title="Add new Schedule">
                <CardActions>
            <TextField required onChange={handleAddFormChange} type='date' margin="dense" name="expireDate" />&nbsp;&nbsp;

            <Button disableElevation onClick={handleAddFormSubmit}size="medium" variant="contained" color="secondary">
                            Add Expire Date
                        </Button>&nbsp;&nbsp;
                        <Button disableElevation size="medium" variant="contained" color="secondary">
                            Add Schedule Items
                        </Button>
                        </CardActions>
            </MainCard>
         </>   
            
    )
}

export default Schedule;