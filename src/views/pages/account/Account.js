import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// material-ui
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
import { Box, Button, Card, Grid, TextField, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@material-ui/core/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlagIcon from '@mui/icons-material/Flag';
import MapIcon from '@mui/icons-material/Map';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { purple, grey } from '@mui/material/colors';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

import {
    IconBrandTinder,
    IconToolsKitchen2,
    IconListCheck,
    IconBellRinging,
    IconPhoneCall,
    IconCash,
    IconBuildingCommunity,
    IconBrandCodesandbox,
    IconBuildingArch,
    IconUsers,
    IconReportAnalytics,
    IconReceipt
} from '@tabler/icons';
import {
    Autocomplete,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    CardMedia,
    OutlinedInput,
    InputAdornment,
    IconButton
} from '@mui/material';

import HttpCommon from 'utils/http-common';
import { useNavigate } from 'react-router-dom';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

import { Store } from 'react-notifications-component';
import Lottie from 'react-lottie';
import * as success from 'assets/images/loading.json';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

//= ==============================|| SHADOW BOX ||===============================//
let theme;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: '-30px',
            right: '-140px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '210px',
            height: '210px',
            background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
            borderRadius: '50%',
            top: '-160px',
            right: '-100px'
        }
    },
    primary: {
        color: '#fff'
    },
    secondary: {
        color: theme.palette.primary.light,
        marginTop: '5px'
    },
    content: {
        zIndex: 1,
        padding: '20px !important'
    },
    backColor: theme.palette.secondary[800],
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '2px',
        fontSize: '120'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200]
        // zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px'
    },
    subHeading: {
        fontSize: '0.9rem',
        fontWeight: 500,
        color: theme.palette.grey
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark,
        fontSize: '120'
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    },
    padding: {
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: theme.palette.white,
        marginTop: 20,
        backgroundColor: theme.palette.secondary.main,
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
}));

//= ===========================|| UTILITIES SHADOW ||============================//

// const CustomTypography = withStyles({
//     root: {
//         color: 'black'
//     }
// })(MuiTypography);

const ShadowBox = ({ image, name }) => {
    theme = useTheme();

    return (
        <Card sx={{ height: 160, width: 160, mb: 3, boxShadow: 0 }}>
            {image !== null ? (
                // <CardMedia component="img" image={image} alt="green iguana" />
                <Avatar sx={{ width: 160, height: 160 }} aria-haspopup="true" color="inherit">
                    <Avatar src={image} sx={{ width: 150, height: 150 }} aria-haspopup="true" color="inherit" />
                </Avatar>
            ) : (
                <Avatar sx={{ width: 150, height: 150 }} aria-haspopup="true" color="inherit">
                    <MuiTypography style={{ fontSize: '50px', color: theme.palette.grey[800] }} right variant="subtitle1">
                        {name}
                    </MuiTypography>
                </Avatar>
            )}
        </Card>
    );
};

const Transition = React.forwardRef((props, ref) => {
    console.log('');
    return <Slide direction="up" ref={ref} {...props} />;
});

const Account = () => {
    const classes = useStyles();
    theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [strength, setStrength] = React.useState(0);
    const [level, setLevel] = React.useState();
    const [showNewPassword, setShowNewPassword] = React.useState(false);

    const [isDataLoading, setDataLoading] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        birthDay: '',
        contactNo: '',
        email: '',
        gender: '',
        height: '',
        image: '',
        street: '',
        lane: '',
        city: '',
        province: '',
        type: ''
    });

    const navigate = useNavigate();
    const ownerName = 'Saman';
    const userId = 1;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
        const temp = strengthIndicator(event.target.value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    const handleChangeConfirmPassword = (event) => {
        console.log(event.target.value);
        setConfirmPassword(event.target.value);
    };

    const showNewPasswordHandler = () => {
        setShowNewPassword(!showNewPassword);
    };
    function getUserDetails(userId) {
        // let arr = [];
        HttpCommon.get(`/api/user/${userId}`).then((response) => {
            console.log(response.data.data);
            setValues({
                firstName: response.data.data.firstName,
                lastName: response.data.data.lastName,
                birthDay: response.data.data.birthDay,
                contactNo: response.data.data.contactNo,
                email: response.data.data.email,
                gender: response.data.data.gender,
                height: response.data.data.height,
                image: response.data.data.image,
                street: response.data.data.street,
                lane: response.data.data.lane,
                city: response.data.data.city,
                province: response.data.data.province,
                type: response.data.data.type
            });
            setDataLoading(false);
        });
    }

    // Store.addNotification({
    //     title: 'Error Occured!',
    //     message: error.message,
    //     type: 'danger',
    //     insert: 'top',
    //     container: 'top-right',
    //     animationIn: ['animate__animated', 'animate__fadeIn'],
    //     animationOut: ['animate__animated', 'animate__fadeOut'],
    //     dismiss: {
    //         duration: 5000,
    //         onScreen: true
    //     },
    //     width: 500
    // });

    useEffect(async () => {
        setDataLoading(true);
        const key = localStorage.getItem('userID');
        getUserDetails(key);
    }, []);

    return (
        <>
            {isDataLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
            ) : (
                <Grid spacing={gridSpacing}>
                    {/* bgcolor: 'secondary.main', */}
                    <SubCard sx={{ color: 'white' }} title="Personal Detailes">
                        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                            <Grid item alignItems="center" justifyContent="center" sm={12} xs={12} md={12} lg={12}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <ShadowBox name={values.firstName.charAt(0) + values.lastName.charAt(0)} image={values.image} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button variant="contained" color="secondary" startIcon={<CameraAltIcon />}>
                                        Edit Image
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="First Name"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="Last Name"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={4}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Birth Date"
                                        inputFormat="MM/dd/yyyy"
                                        value={values.birthDay}
                                        sx={{ width: 600 }}
                                        onChange={(newValue) => {
                                            setValues({ ...values, birthDay: newValue.toISOString().substring(0, 10) });
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.gender.toLowerCase()}
                                        label="Gender"
                                        onChange={handleChange('gender')}
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={4}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    id="outlined-name"
                                    label="Height (cm)"
                                    value={values.height}
                                    onChange={handleChange('height')}
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                    <div style={{ height: '20px' }} />
                    <SubCard sx={{ color: 'white' }} title="Account Detailes">
                        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                            <div style={{ height: '20px' }} />
                            <Grid item sm={12} xs={12} md={6} lg={6}>
                                <TextField contentEditable={false} fullWidth id="outlined-name" label="Type" value={values.type} />
                            </Grid>
                            <Grid item sm={12} xs={12} md={6} lg={6}>
                                <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                                    Change Password
                                </Button>
                            </Grid>
                        </Grid>
                    </SubCard>
                    <div style={{ height: '20px' }} />

                    <SubCard sx={{ color: 'white' }} title="Contact Detailes">
                        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="ContactNo"
                                    value={values.contactNo}
                                    onChange={handleChange('contactNo')}
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="Street"
                                    value={values.street}
                                    onChange={handleChange('street')}
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField fullWidth id="outlined-name" label="Lane" value={values.lane} onChange={handleChange('lane')} />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField fullWidth id="outlined-name" label="City" value={values.city} onChange={handleChange('city')} />
                            </Grid>
                            <Grid item sm={12} xs={12} md={12} lg={6}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="Province"
                                    value={values.province}
                                    onChange={handleChange('province')}
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                    <div style={{ height: '20px' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="contained" color="secondary">
                            Save Changes
                        </Button>
                    </div>

                    <div style={{ height: '20px' }} />
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>Enter New Password</DialogTitle>
                        <DialogContent>
                            <FormControl fullWidth sx={{ ...theme.typography.passwordInput, mb: 1, mt: 1 }}>
                                <InputLabel>Password</InputLabel>
                                <OutlinedInput
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handleChangePassword}
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

                            {strength !== 0 && (
                                <FormControl fullWidth>
                                    <Box sx={{ mb: 2 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Box
                                                    style={{ backgroundColor: level?.color }}
                                                    sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontSize="0.75rem">
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </FormControl>
                            )}
                            <FormControl fullWidth sx={{ ...theme.typography.passwordInput, mb: 1 }}>
                                <InputLabel>Confirm Password</InputLabel>
                                <OutlinedInput
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={handleChangeConfirmPassword}
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
                        </DialogContent>
                        <DialogActions>
                            <Button color="secondary" onClick={handleClose}>
                                Change Password
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            )}
        </>
    );
};

export default Account;
