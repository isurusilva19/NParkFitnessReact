import React from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Edit } from '@material-ui/icons';


const ReadOnlyRow = ({ row, handleEditClick }) => (
    <>
        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align='right'>
                {row.id}
            </TableCell>
            <TableCell align='right'>
                {row.name}
            </TableCell>
            <TableCell align='right'>
                {row.CreatedAt.substring(0,10)}
            </TableCell>

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
