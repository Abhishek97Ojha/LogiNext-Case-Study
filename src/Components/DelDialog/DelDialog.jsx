import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DelDialog({check,setIsDelOpen,name,delItem,id}) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete ? <b>{name}</b> records
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            setOpen(false)
            setIsDelOpen(false)
          }}>Cancel</Button>
          <Button onClick={()=>{setOpen(false)
        setIsDelOpen(false)
        delItem(id)
        }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}