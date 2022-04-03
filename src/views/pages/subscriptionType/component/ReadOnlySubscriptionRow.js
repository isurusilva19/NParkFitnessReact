import React from 'react';
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Edit } from '@material-ui/icons';

const ReadOnlyRow = ({ row, handleEditClick }) => (
    <>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                {row.type}
            </TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="left">{row.gymCount}</TableCell>
            <TableCell align="left">{row.branchCount}</TableCell>
            <TableCell align="left">{row.amount}</TableCell>
            <TableCell align="left">{row.isActive ? 'Active' : 'Not Active'}</TableCell>
            <TableCell align="left">{row.isCalAvailable ? 'Available' : 'Not Available'}</TableCell>
            <TableCell align="left">{row.isDietAvailable ? 'Available' : 'Not Available'}</TableCell>
            <TableCell align="right">
                <AnimateButton>
                    <IconButton aria-label="edit" color="secondary" onClick={(event) => handleEditClick(event, row)}>
                        <Edit />
                    </IconButton>
                </AnimateButton>
            </TableCell>
        </TableRow>
    </>
);

export default ReadOnlyRow;
