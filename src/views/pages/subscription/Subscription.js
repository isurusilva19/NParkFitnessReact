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

import SubscriptionCard from './component/SubscriptionCard';
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
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
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

// const CustomTypography = withStyles({
//     root: {
//         color: 'black'
//     }
// })(MuiTypography);

const Subscription = () => {
    const classes = useStyles();
    const [plan, setPlan] = React.useState('');

    const handleChange = (event) => {
        setPlan(event.target.value);
    };
    return (
        <Grid spacing={gridSpacing}>
            {/* bgcolor: 'secondary.main', */}
            <SubCard sx={{ color: 'white' }} title="Subscription Detailes">
                <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                    <Grid align="center" item xs={12} sm={12} md={12} lg={6}>
                        <div
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                maxWidth: '400px',
                                minWidth: '400px'
                            }}
                        >
                            <SubscriptionCard />
                        </div>
                    </Grid>
                    <Grid
                        style={{ paddingLeft: '150px' }}
                        container
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                    >
                        <div style={{ height: '20px' }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <IconBuildingCommunity color="black" />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Gym Count Available
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                2
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <IconBuildingArch color="black" />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Branch Count Available
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                3
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <IconBrandTinder color="black" />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Calorie Calculator
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Available
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <IconToolsKitchen2 color="black" />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Diet Plan
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Not Available
                            </MuiTypography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                            <IconListCheck color="black" />
                            <div style={{ width: '20px' }} />
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                Plan Description
                            </MuiTypography>
                            <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                This is a Description about Gold plan
                            </MuiTypography>
                        </div>
                    </Grid>
                </Grid>
            </SubCard>
            <div style={{ height: '20px' }} />
            <SubCard sx={{ color: 'white' }} title="Renew Subscription">
                <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
                    <Grid align="center" item xs={12} sm={12} md={12} lg={6}>
                        <div
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                maxWidth: '400px',
                                minWidth: '400px'
                            }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Subscription Plan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={plan}
                                    label="Subscription Plan"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Gold</MenuItem>
                                    <MenuItem value={20}>Silver</MenuItem>
                                    <MenuItem value={30}>Platinum</MenuItem>
                                </Select>
                            </FormControl>
                            <AnimateButton>
                                <Button variant="contained" className={classes.button}>
                                    Renew Plan
                                </Button>
                            </AnimateButton>
                        </div>
                    </Grid>
                    {plan === null || plan === '' ? (
                        <></>
                    ) : (
                        <Grid
                            style={{ paddingLeft: '150px' }}
                            container
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                        >
                            <div style={{ height: '20px' }} />
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconBuildingCommunity color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Gym Count Available
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    2
                                </MuiTypography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconBuildingArch color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Branch Count Available
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    3
                                </MuiTypography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconBrandTinder color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Calorie Calculator
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Available
                                </MuiTypography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconToolsKitchen2 color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Diet Plan
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Not Available
                                </MuiTypography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconCash color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Amount
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Rs 3200.00
                                </MuiTypography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                                <IconListCheck color="black" />
                                <div style={{ width: '20px' }} />
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    Plan Description
                                </MuiTypography>
                                <MuiTypography style={{ maxWidth: '200px', minWidth: '200px' }} variant="subtitle1">
                                    This is a Description about Gold plan
                                </MuiTypography>
                            </div>
                        </Grid>
                    )}
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

export default Subscription;
