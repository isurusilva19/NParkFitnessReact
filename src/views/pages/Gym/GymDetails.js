import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AnimateButton from 'ui-component/extended/AnimateButton';
import EditableRowGym from 'ui-component/GymModels/EditableRowGym';
import ReadableRowGym from 'ui-component/GymModels/ReadableRowGym';

// material-ui
import { Table, TableHead, TableCell, TableRow, TableBody, stepContentClasses, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import {Button} from '@material-ui/core';
import MuiAlert from '@mui/material/Alert';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Contacts } from '@material-ui/icons';

const api = axios.create({
    baseURL: 'http://localhost:3005'
});

const useStyle = makeStyles({
    btnedit: {
        color: '#1565C0',
        cursor: 'pointer'
    }
});

function GymDetails() {
    const classes = useStyle();

    const [gymData, setGymData] = React.useState();

    useEffect(() => {
        api.get('/api/gym/')
            .then(res => {
                console.log(res.data);
                console.log(res.data.data[1]);
                setGymData(res.data.data);
                console.log(gymData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const[contacts,setContacts] = React.useState();

    const [editFormData, setEditFormData] = React.useState({
        name: '',
        CreatedAt: '',
        userId:''
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

  // Data entering to text feilds in Edit branch details
  const handleEditFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
    console.log('after type edit data');
    console.log(editFormData);
};

// Send New gym data to server
const handleAddFormSubmit = () => {
    console.log(contacts);
  
    api.post('/api/gym/', { name: contacts.name, CreatedAt:contacts.CreatedAt})
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            setOpenSnackBar(true);
            setSeverity("success");
            setMassege("Add new Gym Sucessfully")
            
        })
        .catch((error) => {
            console.log(error);
            setOpenSnackBar(true);
            setSeverity("error");
            setMassege("Fail:Some Error Occured")
            
        });
  };

  // Send Edited branch data to server
const handleEditFormSubmit = () => {
    const link = '/api/gym/';
    const key = editContactId;
    const url = link + key;
  
    api.put(url, {
        name: editFormData.name,
        CreatedAt:editFormData.CreatedAt,
        userId: editFormData.userId,
  
    })
        .then((res) => {
            console.log(res);
            window.location.reload(false);
            setOpenSnackBar(true);
            setSeverity("success");
            setMassege("Updated Sucessfully");
           
        })
        .catch((error) => {
            console.log(error);
            setOpenSnackBar(true);
            setSeverity("error");
            setMassege("Fail:Some Error Occured")
           
        });
  
    setEditContctId(null);
  };

  // Handling edit click
const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditContctId(row.id);
  
    const formValues = {
        name: row.name,
        CreatedAt:row.CreatedAt,
        userId:row.userId
    };
    setEditFormData(formValues);
  };
  
  const handleCancelClick = () => {
    setEditContctId(null);
  };
  
  // Create and get my reference in Add New branch
  const myRef = useRef(null);
  
  // Scroll to myRef view
  const executeScroll = () => {
      myRef.current.scrollIntoView(
          {
              behavior: "smooth",
              block: "nearest",
              inline: "start"
          }
      );
  };
  React.useEffect(() => {
      if (myRef.current) {
        executeScroll();
      }
    }, [myRef]);
  
// Handle Snackbar
const [openSnackBar, setOpenSnackBar] = React.useState(false);
const [severity, setSeverity] = React.useState();
const [massege, setMassege] = React.useState();

//alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



    return (
        <>
        <MainCard title="Gyms">
            {/* {gymData>0 && gymData.map((e,i) => <li key={i}>{e}</li>)} */}
            {/*gymData != null ? gymData.map((e, i) => <li key={i}>{e.name}</li>) : <></>*/}
            <Table className={classes.table} sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="right">GymID</TableCell>
                        <TableCell align="right">Gym Name</TableCell>
                        <TableCell align="right">CreatedAt</TableCell>
                        <TableCell align="right">
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            size="medium"
                                            variant="contained"
                                            color="secondary"
                                            ref={myRef}
                                            onClick={myRef}
                                        >
                                            Add New Gym
                                        </Button>
                                    </AnimateButton>
                                </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {gymData != null ? (
                                gymData.map((row) => (
                                    <React.Fragment key={row.id}>
                                        {editContactId === row.id ? (
                                            <EditableRowGym 
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleEditFormSubmit={handleEditFormSubmit}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadableRowGym row={row} handleEditClick={handleEditClick} />
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <></>
                            )}
                </TableBody>
            </Table>
        </MainCard>

        <div style={{ height: 10 }} />
                <MainCard title="Add new Gym">
                <TextField required onChange={handleAddFormChange}  label="Gym Name" margin="dense" name="name" /><br/>


                <Button disableElevation onClick={handleAddFormSubmit} size="medium" variant="contained" color="secondary">
                            Add Gyms--
                        </Button>
                </MainCard>

                <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackBar}
                autoHideDuration={10000}
                onClose={() => setOpenSnackBar(false)}
            >
                <Alert onClose={() => setOpenSnackBar(false)} severity={severity} sx={{ width: '100%' }}>
                    {massege}
                </Alert>
            </Snackbar>
            <div style={{ height: 50 }} />
              
                </>
    );
}

export default GymDetails;
