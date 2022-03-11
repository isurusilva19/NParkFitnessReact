import React from 'react';
import { Cancel, Save } from '@material-ui/icons';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, IconButton, TextField } from '@material-ui/core';
import AnimateButton from 'ui-component/extended/AnimateButton'
import BranchDetails from 'views/pages/Branch/BranchDetails';

const EditableRow = ({ editFormData, handleEditFormChange, handleEditFormSubmit, handleCancelClick }) => (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='right'>
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
            <TableCell align='right'>
                <TextField
                    required
                    fullWidth
                    label="Street"
                    multiline
                    margin="dense"
                    name="street"
                    value={editFormData.street}
                    onChange={handleEditFormChange}
                />
            </TableCell>
          
             <TableCell align='right'>
                <TextField
                    required
                    fullWidth
                    label="Lane"
                    margin="dense"
                    name="lane"
                    value={editFormData.lane}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell align='right'>
                <TextField
                    required
                    fullWidth
                    label="City"
                    margin="dense"
                    name="city"
                    value={editFormData.city}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell align='right'>
                <TextField
                    required
                    fullWidth
                    label="Province"
                    margin="dense"
                    name="province"
                    value={editFormData.province}
                    onChange={handleEditFormChange}
                />
            </TableCell>
            <TableCell align='right'>
                <TextField
                    required
                    fullWidth
                    label="isActive"
                    margin="dense"
                    name="gymId"
                    value={editFormData.gymId}
                    onChange={handleEditFormChange}
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

export default EditableRow;
