import PropTypes from 'prop-types';
import React from 'react';

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

import { purple, grey } from '@mui/material/colors';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

//= ==============================|| SHADOW BOX ||===============================//
let theme;

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
    }
}));

const ShadowBox = ({ shadow }) => {
    theme = useTheme();

    return (
        <Card sx={{ height: 100, width: 100, mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    height: 100,
                    width: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <MuiTypography style={{ fontSize: '40px' }} right variant="subtitle1">
                    IN
                </MuiTypography>
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

const ActivityCard = () => {
    theme = useTheme();
    const classes = useStyles();

    return (
        <MainCard border={false} className={classes.card} contentClass={classes.content}>
            <List className={classes.padding}>
                <ListItem alignItems="center" disableGutters className={classes.padding}>
                    <Grid container justifyContent="center" alignItems="center" direction="column" xs={12} sm={6} md={6} lg={6}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <CreditCardIcon sx={{ color: 'white' }} />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '150px', minWidth: '150px', color: 'white' }} variant="subtitle1">
                                Method
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '100px', minWidth: '100px', color: 'white' }} variant="subtitle1">
                                Cash
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <EventIcon sx={{ color: 'white' }} />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '150px', minWidth: '150px', color: 'white' }} variant="subtitle1">
                                Date
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '100px', minWidth: '100px', color: 'white' }} variant="subtitle1">
                                2021/12/02
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <LocalAtmIcon sx={{ color: 'white' }} />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '150px', minWidth: '150px', color: 'white' }} variant="subtitle1">
                                Amount
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '100px', minWidth: '100px', color: 'white' }} variant="subtitle1">
                                2500.00
                            </MuiTypography>
                        </div>
                    </Grid>
                </ListItem>
            </List>
        </MainCard>
    );
};

//= ===========================|| UTILITIES SHADOW ||============================//

const CustomTypography = withStyles({
    root: {
        color: '#7E7676'
    }
})(MuiTypography);

const CustomerPayment = () => {
    const classes = useStyles();
    return (
        <Grid spacing={gridSpacing}>
            <SubCard>
                <Grid container alignItems="center" justifyContent="start" spacing={gridSpacing}>
                    <Grid item direction="row" xs={12} sm={6} md={3} lg={3}>
                        <MuiTypography minWidth={10} right variant="subtitle1">
                            Enter Membership ID For Search :
                        </MuiTypography>
                        {/* <TextField id="outlined-basic" variant="outlined" /> */}

                        {/* <Typography className={classes.subHeading}>MembershipID :</Typography> */}
                    </Grid>
                    <Grid align="left" item xs={12} sm={6} md={3} lg={3}>
                        <TextField style={{ maxWidth: '200px', minWidth: '200px' }} id="outlined-basic" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Button style={{ maxWidth: '100px', minWidth: '100px' }} color="secondary" variant="contained">
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </SubCard>
            <div style={{ height: '20px' }} />
            {/* bgcolor: 'secondary.main', */}
            <SubCard sx={{ color: 'white' }} title="Customer Detailes">
                <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                    <Grid align="center" item xs={12} sm={6} md={6} lg={6}>
                        <ShadowBox shadow="0" />
                        {/* <Grid alignItems="center" justifyContent="center" container xs={12} sm={6} md={6} lg={6}>
                            <MuiTypography align="center" justifyContent="center" variant="subtitle1">
                                Induwara Nagodavithana
                            </MuiTypography>
                        </Grid> */}
                        <Grid alignItems="center" container xs={12} sm={6} md={6} lg={6}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '10px' }}>
                                <MuiTypography
                                    align="center"
                                    justifyContent="center"
                                    style={{ maxWidth: '150px', minWidth: '150px', fontSize: '20px' }}
                                    variant="subtitle1"
                                >
                                    Pay Amount
                                </MuiTypography>
                                <MuiTypography
                                    align="center"
                                    style={{ maxWidth: '150px', minWidth: '150px', fontSize: '20px' }}
                                    variant="subtitle1"
                                    justifyContent="center"
                                >
                                    Rs 2500.00
                                </MuiTypography>
                            </div>
                        </Grid>
                        <Grid alignItems="center" justifyContent="center" container xs={12} sm={6} md={6} lg={6}>
                            <Button
                                align="center"
                                justifyContent="center"
                                style={{ maxWidth: '100px', minWidth: '100px' }}
                                color="secondary"
                                variant="contained"
                            >
                                Pay
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" direction="column" xs={12} sm={6} md={6} lg={6}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <CreditCardIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                Membership ID
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                1203245
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <BadgeIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                First Name
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Induwara
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <BadgeIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                Last Name
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Nagodavithana
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <LocationOnIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                Street
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Niladeniya
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <LocationOnIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                Lane
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Hapugala
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <FlagIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                City
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Galle
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <MapIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                Province
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Southern
                            </CustomTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <EmailIcon sx={{ color: '#7E7676' }} />
                            <div style={{ width: '20px' }} />
                            <CustomTypography style={{ maxWidth: '150px', minWidth: '150px' }} variant="subtitle1">
                                email
                            </CustomTypography>
                            <CustomTypography style={{ maxWidth: '100px', minWidth: '100px' }} variant="subtitle1">
                                Induwara
                            </CustomTypography>
                        </div>
                    </Grid>
                </Grid>
            </SubCard>
            <div style={{ height: '20px' }} />
            <SubCard title="Payment Activity">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <ActivityCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <ActivityCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <ActivityCard />
                    </Grid>
                </Grid>
            </SubCard>
        </Grid>
    );
};

export default CustomerPayment;
