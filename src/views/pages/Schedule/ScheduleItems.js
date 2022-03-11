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

function ScheduleItems(){
   
    const[scheduleItemData,setScheduleItemData] = React.useState();

    useEffect(() => {
        api.get('api/scheduleItem')
        .then((res) => {
            console.log(res.data);
            setScheduleItemData(res.data.data);
        })
        .catch((err) =>{
            console.log("error")
        })
    })

    const[contacts,setContacts] = React.useState();

    const [editFormData, setEditFormData] = React.useState({
        serviceId:'',
        noOfSet:'',
        noOfRepetition:'',
        timeBySeconds:''
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
  
    api.post('/api/scheduleItem/', { serviceId:contacts.serviceId,noOfSet: contacts.noOfSet, noOfRepetition:contacts.noOfRepetition, timeBySeconds:contacts.timeBySeconds})
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            
            
        })
        .catch((error) => {
            console.log(error);
        
            
        });
  };
    return(
        <>
      
            <MainCard title="Schedule Items">
                
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Service&nbsp;</TableCell>
                        <TableCell>No Of Set&nbsp;</TableCell>
                        <TableCell>No Of Tepetition&nbsp;</TableCell>
                        <TableCell>Time(seconds)&nbsp;</TableCell>

                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {scheduleItemData != null ? (
                        scheduleItemData.map((e, i) => {
                            return (
                                <TableRow>
                                    <TableCell>{e.serviceId}</TableCell>
                                    <TableCell>{e.noOfSet}</TableCell>
                                    <TableCell>{e.noOfRepetition}</TableCell>
                                    <TableCell>{e.timeBySeconds}</TableCell>

                                    <TableCell>
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

            <MainCard title="Add new Schedule Item">
            <Button disableElevation size="medium" variant="contained" color="secondary">
                            View Services Available
                        </Button><br/>
                        <TextField required  onChange={handleAddFormChange} label="Service" margin="dense" name="serviceId" /><br/>
                <TextField required  onChange={handleAddFormChange} type="number" label="No of Sets" margin="dense" name="noOfSet"  />&nbsp;&nbsp;
                <TextField required  onChange={handleAddFormChange} type="number" label="No of Repetitions" margin="dense" name="noOfRepetition"  />&nbsp;&nbsp;
                <TextField required  onChange={handleAddFormChange} type="number" label="Time(seconds)" margin="dense" name="timeBySeconds"  /><br/>
                <Button disableElevation onClick={handleAddFormSubmit} size="medium" variant="contained" color="secondary">
                            Add Schedule Item
                        </Button>
            </MainCard>
         </>   
            
    )
}

export default ScheduleItems;