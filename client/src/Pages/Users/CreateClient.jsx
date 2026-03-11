import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createClient } from "../../redux/action/user";
import {
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  DialogActions,
  TextField,
  Autocomplete,
} from "@mui/material";
import { PiNotepad, PiXLight } from "react-icons/pi";
import { pakistanCities } from "../../constant";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CreateClient = ({ open, setOpen, scroll }) => {
  //////////////////////////////////////// VARIABLES /////////////////////////////////////
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialClientState = {
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    city: "",
  };

  //////////////////////////////////////// STATES /////////////////////////////////////
  const [clientData, setClientData] = useState(initialClientState);
  const [errors, setErrors] = useState({});

  //////////////////////////////////////// FUNCTIONS /////////////////////////////////////
  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, username, phone, email } = clientData;

    if (!firstName.trim()) newErrors.firstName = "First Name is required";
    if (!lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!username.trim()) newErrors.username = "Username is required";
    
    if (!phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(phone)) newErrors.phone = "Invalid phone format (10-15 digits)";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    dispatch(createClient(clientData, setOpen));
    setClientData(initialClientState);
    setErrors({});
  };

  const handleChange = (field, value) => {
    setClientData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setClientData(initialClientState);
    setErrors({});
  };

  return (
    <div>
      <Dialog
        scroll={scroll}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle className="flex items-center justify-between">
          <div className="text-sky-400 font-primary">Add New Client</div>
          <div className="cursor-pointer" onClick={handleClose}>
            <PiXLight className="text-[25px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-2 p-3 text-gray-500 font-primary">
            <div className="text-xl flex justify-start items-center gap-2 font-normal">
              <PiNotepad size={23} />
              <span>Client Details</span>
            </div>
            <Divider />
            <table className="mt-4 border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">First Name </td>
                  <td className="pb-2">
                    <TextField
                      size="small"
                      fullWidth
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      value={clientData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">Last Name </td>
                  <td className="pb-2">
                    <TextField
                      size="small"
                      fullWidth
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      value={clientData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">User Name </td>
                  <td className="pb-2">
                    <TextField
                      size="small"
                      fullWidth
                      error={!!errors.username}
                      helperText={errors.username}
                      value={clientData.username}
                      onChange={(e) => handleChange('username', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">Email </td>
                  <td className="pb-2">
                    <TextField
                      size="small"
                      fullWidth
                      placeholder="Optional"
                      error={!!errors.email}
                      helperText={errors.email}
                      value={clientData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">Phone </td>
                  <td className="pb-2">
                    <TextField
                      type="number"
                      size="small"
                      error={!!errors.phone}
                      helperText={errors.phone}
                      value={clientData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 text-lg align-top pt-1">City </td>
                  <td className="pb-2">
                    <Autocomplete
                      size="small"
                      options={pakistanCities}
                      value={clientData.city || null}
                      onChange={(e, newValue) => handleChange('city', newValue)}
                      renderInput={(params) => <TextField {...params} variant="outlined" fullWidth />}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="bg-[#d7d7d7] px-4 py-2 rounded-lg text-gray-500 mt-4 hover:text-white hover:bg-[#6c757d] border-[2px] border-[#efeeee] hover:border-[#d7d7d7] font-thin transition-all">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primary-red px-4 py-2 rounded-lg text-white mt-4 hover:bg-red-400 font-thin transition-all">
            {isFetching ? 'Submitting...' : 'Submit'}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateClient;
