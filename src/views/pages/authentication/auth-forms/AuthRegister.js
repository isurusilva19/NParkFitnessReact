import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    RadioGroup,
    Radio,
    FormLabel
} from '@mui/material';

// project imports
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import HttpCommon from 'utils/http-common';
import { Store } from 'react-notifications-component';
import { useNavigate } from 'react-router';

import Lottie from 'react-lottie';
import * as success from 'assets/images/loading.json';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import app from './firebase';
import { getAuth, createUserWithEmailAndPassword, IdTokenResult } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// ===========================|| FIREBASE - REGISTER ||=========================== //
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const FirebaseRegister = ({ ...others }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [isDataLoading, setDataLoading] = React.useState(false);

    const [checked, setChecked] = useState(true);

    const [lane, setLane] = useState('');
    const [city, setCity] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male');
    const [street, setStreet] = useState('');
    const [province, setProvince] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const [showPassword, setShowPassword] = useState(false);
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    };
    const [showNewPassword, setShowNewPassword] = useState(false);
    const showNewPasswordHandler = () => {
        setShowNewPassword(!showPassword);
    };
    const googleHandler = async () => {
        console.error('Register');
    };
    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    const addUserHandler = async (event) => {
        event.preventDefault();
        setDataLoading(true);

        let fireUID = '';

        const newUser = {
            firstName: fName,
            lastName: lName,
            password: newPassword,
            birthDay: birthday,
            email,
            contactNo: contactNumber,
            gender,
            type: 'owner',
            street,
            lane,
            city,
            province,
            image: null
        };
        console.log(newUser);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, newPassword)
            .then((UserCredential) => {
                // const user = UserCredential.user;
                console.log(UserCredential.user);
                fireUID = UserCredential.user.uid;
                console.log(fireUID);
                newUser.fireUID = fireUID;
                console.log(newUser);
                HttpCommon.post('/auth/signUp', newUser).then(async (response) => {
                    console.log(response);
                    setDataLoading(false);
                    if (response.data.success) {
                        navigate('/pages/login/login3', { replace: true });
                    } else {
                        Store.addNotification({
                            title: 'Error Occured!',
                            message: 'User Account Registration Not Succesful!',
                            type: 'danger',
                            insert: 'top',
                            container: 'top-right',
                            animationIn: ['animate__animated', 'animate__fadeIn'],
                            animationOut: ['animate__animated', 'animate__fadeOut'],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            },
                            width: 500
                        });
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                Store.addNotification({
                    title: 'Error Occured!',
                    message: errorMessage,
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    },
                    width: 500
                });
            });

        // setTimeout(async () => {
        //     newUser.fireUID = fireUID;
        //     console.log(newUser);

        //     const response = await fetch('http://localhost:3005/auth/signUp', {
        //         method: 'POST',
        //         body: JSON.stringify(newUser),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     const data = await response.json();
        //     console.log(data);
        //     console.log(newUser);
        // }, 5000);

        // setFName('');
        // setLName('');
        // setEmail('');
        // setNewPassword('');
        // setPassword('');
        // setContactNumber('');
        // setGender('');
        // setBirthday(null);
        // setLane('');
        // setProvince('');
        // setStreet('');
        // setCity('');
    };

    return (
        <div>
            {/* <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign up with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid> */}

            <form noValidate {...others} onSubmit={addUserHandler}>
                {/* <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            margin="normal"
                            value={fName}
                            type="text"
                            sx={{ ...theme.typography.customInput }}
                            onChange={(event) => {
                                setFName(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            margin="normal"
                            value={lName}
                            type="text"
                            sx={{ ...theme.typography.customInput }}
                            onChange={(event) => {
                                setLName(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
                <FormControl fullWidth>
                    <TextField
                        label="Email"
                        type="email"
                        margin="normal"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        sx={{ ...theme.typography.customInput }}
                        // error
                        // helperText={error ? 'Unvalid email' : null}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(event) => {
                            setNewPassword(event.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={showNewPasswordHandler}
                                    edge="end"
                                    size="large"
                                >
                                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={showPasswordHandler} edge="end" size="large">
                                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {strength !== 0 && (
                    <FormControl fullWidth>
                        <Box sx={{ mb: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" fontSize="0.75rem">
                                        {level?.label}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </FormControl>
                )} */}
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={gender}
                        name="radio-buttons-group"
                        onChange={(event) => {
                            setGender(event.target.value);
                        }}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth>
                    <TextField
                        label="Contact Number"
                        type="text"
                        value={contactNumber}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        margin="normal"
                        onChange={(newValue) => {
                            setContactNumber(newValue.target.value);
                        }}
                        sx={{ ...theme.typography.customInput }}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                    <LocalizationProvider fullWidth sx={{ ...theme.typography.customInput }} dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date of Birth"
                            value={birthday}
                            onChange={(newValue) => {
                                setBirthday(newValue.toLocaleDateString('en-CA'));
                            }}
                            renderInput={(params) => <TextField sx={{ ...theme.typography.customInput }} {...params} />}
                        />
                    </LocalizationProvider>

                    <FormControl fullWidth>
                        <FormLabel>Address</FormLabel>
                        <TextField
                            label="Street"
                            type="text"
                            margin="normal"
                            value={street}
                            onChange={(event) => {
                                setStreet(event.target.value);
                            }}
                            sx={{ ...theme.typography.customInput }}
                        />
                        <TextField
                            label="Lane"
                            type="text"
                            margin="normal"
                            value={lane}
                            onChange={(event) => {
                                setLane(event.target.value);
                            }}
                            sx={{ ...theme.typography.customInput }}
                        />
                        <TextField
                            label="City"
                            type="text"
                            margin="normal"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value);
                            }}
                            sx={{ ...theme.typography.customInput }}
                        />
                        <TextField
                            label="Province"
                            type="text"
                            margin="normal"
                            value={province}
                            onChange={(event) => {
                                setProvince(event.target.value);
                            }}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </FormControl>
                </FormControl>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                />
                            }
                            label={
                                <Typography variant="subtitle1">
                                    Agree with &nbsp;
                                    <Typography variant="subtitle1" component={Link} to="#">
                                        Terms & Condition.
                                    </Typography>
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <FormHelperText error />
                </Box>
                {/* 
                <Box sx={{ mt: 2 }}>
                    <AnimateButton>
                        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                            Next
                        </Button>
                    </AnimateButton>
                </Box> */}

                <Box sx={{ mt: 2 }}>
                    <AnimateButton>
                        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
                            Sign up
                        </Button>
                    </AnimateButton>
                </Box>
            </form>
        </div>
    );
};

export default FirebaseRegister;
