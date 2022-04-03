import React, { useEffect, useState } from 'react';
import { TableCell, TextField, TableRow, IconButton, Autocomplete } from '@material-ui/core';
import { Cancel, Save } from '@material-ui/icons';
import AnimateButton from 'ui-component/extended/AnimateButton';

const bodyparts = ['ABS', 'Back', 'Biceps', 'Chest', 'Forearm', 'Hips', 'Legs', 'Shoulder', 'Triceps'];

const EditableRow = ({ setEditedValue, editFormData, handleCancelClick, handleEditFormChange, handleEditFormSubmit }) => {
    const indexOfArray = (element) => element === `${editFormData.bodyPart}`;
    const index = bodyparts.findIndex(indexOfArray);
    const [bodyPartValue, setBodyPartValue] = useState(bodyparts[index]);

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                    <TextField
                        required
                        fullWidth
                        label="Name"
                        margin="dense"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        required
                        fullWidth
                        label="Type"
                        multiline
                        margin="dense"
                        name="status"
                        value={editFormData.status}
                        onChange={handleEditFormChange}
                    />
                </TableCell>
                <TableCell>
                    <Autocomplete
                        value={bodyPartValue}
                        // inputValue={editFormData.bodyType}
                        onChange={(event, newValue) => {
                            setEditedValue(newValue);
                        }}
                        id="controllable-states-demo"
                        options={bodyparts}
                        renderInput={(params) => (
                            <TextField {...params} label="Body Part" variant="outlined" fullWidth margin="dense" name="bodyPart" />
                        )}
                    />
                </TableCell>
                <TableCell align="right">
                    <AnimateButton>
                        <IconButton aria-label="edit" color="secondary" onClick={handleEditFormSubmit}>
                            <Save />
                        </IconButton>
                        <IconButton aria-label="edit" color="secondary" onClick={handleCancelClick}>
                            <Cancel />
                        </IconButton>
                    </AnimateButton>
                </TableCell>
            </TableRow>
        </>
    );
};

export default EditableRow;
