import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReadOnlyRow from 'ui-component/BranchModels/ReadOnlyRow';
import EditableRow from 'ui-component/BranchModels/EditableRow';
import AnimateButton from 'ui-component/extended/AnimateButton';

// material-ui
import {Button,SearchBar} from '@material-ui/core';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, TableContainer, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MuiAlert from '@mui/material/Alert';



// project imports
import MainCard from 'ui-component/cards/MainCard';
import BranchEdit from './BranchEdit';

const api = axios.create({
  baseURL: 'http://localhost:3005'
});



const provinces = [
  {label:'Southern'},
  {label:'Northern'},
  {label:'Western'},
  {label:'Uva'},
  {label:'Eastern'},
  {label:'Central'},
  {label:'Sabaragamuwa'},
  {label:'North Central'},
  {label:'North Wetern'}
]

const gymArray = [];


function BranchDetails(){

  const [branchData, setBranchData] = useState([]);
    useEffect(() => {
        api.get('/api/branch/')
            .then((res) => {
                setBranchData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api.get('/api/gym')
        .then((res) => {
            console.log(res.data);
            var l=res.data[0];
            console.log(l);
            res.data.data.map((row) => gymArray.push({ label: row.name, value: row.id }));
          // console.log("j"+gymArray[1].name);
        })
        .catch((err) => {
            console.log(err);
        })
    })

    const [contacts, setContacts] = React.useState();

    const [editFormData, setEditFormData] = React.useState({
      name: '',
      street: '',
      lane: '',
      city:'',
      province:'',
      gymId:''
  });

  const [editContactId, setEditContctId] = React.useState(null);

  //  Add New Branch
  const handlAddFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...contacts };
    newFormData[fieldName] = fieldValue;

    setContacts(newFormData);
    console.log(contacts);
};


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

// Send New branch data to server
const handleAddFormSubmit = () => {
  console.log(contacts);

  api.post('/api/branch/', { name: contacts.name, street: contacts.street, lane: contacts.lane, city: contacts.city,province: contacts.province,gymId: contacts.gymId })
      .then((res) => {
          console.log(res);
          window.location.reload(false);
          setOpenSnackBar(true);
          setSeverity('success');
          setMassege('Add New Branch SuccessFully');
          
      })
      .catch((error) => {
          console.log(error);
          setOpenSnackBar(true);
          setSeverity('error');
          setMassege('Fail: Some Error Occured');
          
      });
};

// Send Edited branch data to server
const handleEditFormSubmit = () => {
  const link = '/api/branch/';
  const key = editContactId;
  const url = link + key;

  api.put(url, {
      name: editFormData.name,
      street: editFormData.street,
      lane: editFormData.lane,
      city: editFormData.city,
      province: editFormData.province,
      gymId: editFormData.gymId,

  })
      .then((res) => {
          console.log(res);
          window.location.reload(false);
          setOpenSnackBar(true);
          setSeverity('success');
          setMassege('Updated SuccessFully');
         
      })
      .catch((error) => {
          console.log(error);
          setOpenSnackBar(true);
          setSeverity('error');
          setMassege('Fail: Some Error Occured');
         
      });

  setEditContctId(null);
};

// Handling edit click
const handleEditClick = (event, row) => {
  event.preventDefault();
  setEditContctId(row.id);

  const formValues = {
      name: row.name,
      street: row.street,
      lane: row.lane,
      city:row.city,
      province:row.province,
      gymId:row.gymId
  };
  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditContctId(null);
};

// Create and get my reference in Add New branch
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

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

  return(
      <>
    <MainCard title="Branches">

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={gymArray}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Gym" />}
    />
      <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Street</TableCell>
                                <TableCell align="right">Lane</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Province</TableCell>
                                <TableCell align="right">isActive</TableCell>

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
                                            Add New Branch
                                        </Button>
                                    </AnimateButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {branchData != null ? (
                                branchData.map((row) => (
                                    <React.Fragment key={row.id}>
                                        {editContactId === row.id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleEditFormSubmit={handleEditFormSubmit}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow row={row} handleEditClick={handleEditClick} />
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <></>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                </MainCard>

                <div style={{ height: 10 }} />
                <MainCard title="Add new Branch">
                <TextField required  onChange={handlAddFormChange} label="name" margin="dense" name="name" /><br/>
                <TextField required  onChange={handlAddFormChange} label="Street" margin="dense" name="street"  />&nbsp;&nbsp;
                <TextField required  onChange={handlAddFormChange} label="Lane" margin="dense" name="lane"  />&nbsp;&nbsp;
                <TextField required  onChange={handlAddFormChange} label="City" margin="dense" name="city"  /><br/>
                <TextField required  onChange={handlAddFormChange} label="Province" margin="dense" name="province"  /><br/>
                <TextField required  onChange={handlAddFormChange} label="GymID" margin="dense" name="gymId"  /><br/>

                <Button disableElevation onClick={handleAddFormSubmit} size="medium" variant="contained" color="secondary">
                            Add Branch
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

export default BranchDetails;
