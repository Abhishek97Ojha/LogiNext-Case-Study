import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MyContext } from "../../App";
import { useState, useContext } from "react";

export default function FormDialog({
  check,
  setIsOpen,
  name,
  email,
  phone,
  website,
  id,
  username,
  address,
  company,
}) {
  const [open, setOpen] = React.useState(true);
  const context = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    phone: phone,
    website: website,
    username: username,
    address: address,
    company: company,
  });
  function edit() {
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.phone.length > 0 &&
      formData.website.length > 0 &&
      formData.address.city.length > 0 &&
      formData.company.name.length > 0
    ) {
      setOpen(false);
      setIsOpen(false);
      let data = context.userData.map((e) =>
        e.id === id ? { ...formData } : e
      );
      context.setUserData(data);
    }
  }
  //   console.log("formData",formData);
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Edit </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              required
              type="text"
              value={formData.name}
              error={formData.name.length === 0 ? true : false}
              helperText={formData.name.length === 0 && "Empty data found"}
              fullWidth
              variant="standard"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              required
              type="email"
              value={formData.email}
              error={formData.email.length === 0 ? true : false}
              helperText={formData.email.length === 0 && "Empty data found"}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Phone"
              required
              type="text"
              value={formData.phone}
              error={formData.phone.length === 0 ? true : false}
              helperText={formData.phone.length === 0 && "Empty data found"}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              required
              label="Website"
              value={formData.website}
              error={formData.website.length === 0 ? true : false}
              helperText={formData.website.length === 0 && "Empty data found"}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              required
              label="City"
              value={formData.address.city}
              error={formData.address.city.length === 0 ? true : false}
              helperText={
                formData.address.city.length === 0 && "Empty data found"
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...address, city: e.target.value },
                })
              }
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              required
              label="Company"
              value={formData.company.name}
              error={formData.company.name.length === 0 ? true : false}
              helperText={
                formData.company.name.length === 0 && "Empty data found"
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: { ...company, name: e.target.value },
                })
              }
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setIsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              edit();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
