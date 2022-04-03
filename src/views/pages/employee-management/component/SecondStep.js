import React from 'react';
import { Button, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const SecondStep = ({ firstName, lastName, birthday, genderValue, setFirstName, setLastName, setBirthday, setGenderValue }) => {
    const handleFirstName = (event) => {
        console.log(event.target.value);
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    };
    // const handleBirthday = (event) => {
    //     console.log(event);
    //     // setBirthday(event.target.value);
    // };
    const handleGender = (event) => {
        console.log(event.target.value);
        setGenderValue(event.target.value);
    };
    return (
        <div>
            <TextField
                required
                fullWidth
                value={firstName}
                onChange={handleFirstName}
                label="First Name"
                margin="dense"
                name="firstName"
                inputProps={{ maxLength: 255 }}
            />
            <TextField
                required
                fullWidth
                value={lastName}
                onChange={handleLastName}
                label="Last Name"
                margin="dense"
                name="lastName"
                inputProps={{ maxLength: 255 }}
            />
            <div style={{ height: 10 }} />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    required
                    label="Birthday"
                    value={birthday}
                    onChange={(newValue) => {
                        setBirthday(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <div style={{ height: 10 }} />

            <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup row value={genderValue} onChange={handleGender}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default SecondStep;
