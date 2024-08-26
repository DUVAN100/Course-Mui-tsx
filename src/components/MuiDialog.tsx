import React,{ useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={()=>setOpen(true)}>Open dialog</Button>
        <Dialog open={open}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => setOpen(false)} color="primary">
                    OK
                </Button>
                <Button onClick={() => setOpen(false)} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
