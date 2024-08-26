import React, { useState, forwardRef } from 'react';
import { Snackbar, Button, Alert, AlertProps } from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props} />;
    }
)
export const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event?:React.SyntheticEvent | Event, reason?:string) => {
        if (reason === 'clickaway') 
            return
        setOpen(false)
    }
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Snackbar</Button>
        {/* <Snackbar open={open} autoHideDuration={3000} message="Form submitted successfully!" onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'center'}}/>
         */}
         <Snackbar open={open}  autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity='success'>
                Form submited successfully!
            </SnackbarAlert>
         </Snackbar>
    </>
  )
}
