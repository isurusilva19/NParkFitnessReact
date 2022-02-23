import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardContent, Grid, Link, Stack, Typography } from '@material-ui/core';
import BadgeIcon from '@mui/icons-material/Badge';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

import { IconFileAnalytics, IconCalendarEvent, IconBulb, IconReceipt2 } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    card: {
        paddingTop: '20px',
        background: theme.palette.warning.main,
        marginTop: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        boxShadow: theme.shadows[3],
        position: 'relative',
        '&:hover': {
            boxShadow: theme.shadows[8]
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '19px solid ',
            borderColor: theme.palette.warning.dark,
            borderRadius: '50%',
            top: '65px',
            right: '-150px'
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '3px solid ',
            borderColor: theme.palette.warning.dark,
            borderRadius: '50%',
            top: '145px',
            right: '-70px',
            opacity: 0.5
        }
    },
    tagLine: {
        color: theme.palette.grey[900],
        opacity: 0.6
    },
    button: {
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.warning.main,
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.warning.dark
        }
    }
}));

// ===========================|| PROFILE MENU - UPGRADE PLAN CARD ||=========================== //

const SubscriptionCard = (subscriptionData) => {
    const classes = useStyles();
    console.log(subscriptionData);
    console.log(subscriptionData.subscriptionData.id);
    let status;
    if (subscriptionData.subscriptionData.isActive) {
        status = 'Active';
    } else {
        status = 'InsActive';
    }
    return (
        <Card className={classes.card}>
            <CardContent justifyContent="center" alignItems="center">
                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', margin: '5px' }}>
                        <IconFileAnalytics color="black" />
                        <div style={{ width: '20px' }} />
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                            Subscription
                        </Typography>
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                            {subscriptionData !== null ? subscriptionData.subscriptionData.subscriptionType.type : 'NotFound'}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', margin: '5px' }}>
                        <IconCalendarEvent color="black" />
                        <div style={{ width: '20px' }} />
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                            Expire Date
                        </Typography>
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                            {subscriptionData !== null ? subscriptionData.subscriptionData.expireDate : 'NotFound'}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                        <IconBulb color="black" />
                        <div style={{ width: '20px' }} />
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                            Status
                        </Typography>
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                            {subscriptionData !== null ? status : 'NotFound'}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px' }}>
                        <IconReceipt2 color="black" />
                        <div style={{ width: '20px' }} />
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '150px', minWidth: '150px' }}>
                            Amount
                        </Typography>
                        <Typography align="left" variant="subtitle1" style={{ maxWidth: '100px', minWidth: '110px' }}>
                            {subscriptionData !== null ? subscriptionData.subscriptionData.subscriptionType.amount : 'NotFound'}
                        </Typography>
                    </div>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SubscriptionCard;
