import React from 'react';
import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoIcon from '@mui/icons-material/Info';

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>This is an error alert</Alert>
        <Alert severity='warning'>This is a warning alert</Alert>
        <Alert severity='info'>This is an information alert</Alert>
        <Alert severity='success'>This is a success alert</Alert>
        
        <Alert variant='outlined' severity='error'>This is an error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is a warning alert</Alert>
        <Alert variant='outlined' severity='info'>This is an information alert</Alert>
        <Alert variant='outlined' severity='success'>This is a success alert</Alert>
        
        <Alert variant='filled' severity='error'>This is an error alert</Alert>
        <Alert variant='filled' severity='warning'>This is a warning alert</Alert>
        <Alert variant='filled' severity='info'>This is an information alert</Alert>
        <Alert variant='filled' severity='success'>This is a success alert</Alert>

        <Alert icon={<CheckIcon />} severity='success' onClose={()=>alert("close")}>
            <AlertTitle>Success</AlertTitle>
            This is a success alert
        </Alert>

        <Alert icon={<ErrorOutlineIcon />} severity='error'>
            <AlertTitle>Error</AlertTitle>
            This is an error alert
        </Alert>

        <Alert icon={<WarningAmberIcon />} severity='warning'>
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert
        </Alert>

        <Alert icon={<InfoIcon  fontSize='inherit'/>} severity='info' action={<Button color='inherit' size='small'>UNDO</Button>}>
            <AlertTitle>Information</AlertTitle>
            This is an information alert
        </Alert>
    </Stack>
  )
}
