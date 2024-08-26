import React, { useState, useEffect } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Checkbox } from '@mui/material';
import { contentTable } from '../test/testTable'

  
export const MuiTable = () => {
    const [data, setData] = useState(contentTable);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('../test/testTable.json');
    //         console.log("response", response)
    //         await setData(await response.json());
    //     }
    //     fetchData();
    // }, []);
    console.log("data", data)
    let columns = ['ID', 'First Name', 'Last Name', 'Email', 'Gender', 'IP Address', 'selected'];
    const handleCheckboxChange = (id:number) => {
        setData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, selected: !row.selected } : row
            )
        );
    };
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label='simple-table' stickyHeader>
            <TableHead>
                {columns.map((column) => <TableCell key={column}>{column}</TableCell>)}
            </TableHead>
            <TableBody>
                {data.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell>
                                <Checkbox checked={row.selected} onChange={() => handleCheckboxChange(row.id)}/>
                            </TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.gender}</TableCell>
                            <TableCell>{row.ip_address}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
