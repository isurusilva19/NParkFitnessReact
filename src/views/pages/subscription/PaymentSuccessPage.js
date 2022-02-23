import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import { Card, Box, Divider, Grid, Stack, Typography, useMediaQuery } from '@material-ui/core';

// project imports
import AuthWrapper1 from '../authentication/AuthWrapper1';
import AuthCardWrapper from '../authentication/AuthCardWrapper';
import FirebaseLogin from '../authentication/firebase-forms/FirebaseLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import SubCard from 'ui-component/cards/SubCard';
import { makeStyles } from '@material-ui/styles';

// assets

const useStyles = makeStyles((theme) => ({
    card: {
        // backgroundColor: theme.palette.secondary.dark,
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            zIndex: 1,
            position: 'absolute',
            width: '1000px',
            height: '1000px',
            background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: '-300px',
            right: '-250px'
        }
        // '&:before': {
        //     content: '""',
        //     position: 'absolute',
        //     width: '610px',
        //     height: '610px',
        //     background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        //     borderRadius: '250%',
        //     top: '-160px',
        //     right: '-100px'
        // }
    }
}));

//= ===============================|| AUTH3 - LOGIN ||================================//

const PaymentSuccess = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid container xs={12} sm={12} md={8} lg={6}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 2, sm: 6 }, mb: 0 }}>
                            <SubCard className={classes.card} sx={{ color: 'white' }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center">
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h3'}
                                                    >
                                                        Receipt from The NParkFitness Platform
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="14px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Invoice #1234
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="14px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Receipt #56487
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Stack alignItems="left" justifyContent="center">
                                            <Typography
                                                variant="button"
                                                color="#666262"
                                                fontSize="15px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                Amount Paid
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="black"
                                                fontSize="14px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                $24.19
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Stack alignItems="left" justifyContent="center">
                                            <Typography
                                                variant="button"
                                                color="#666262"
                                                fontSize="15px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                Date Paid
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="black"
                                                fontSize="14px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                June 25, 2021
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Stack alignItems="left" justifyContent="center">
                                            <Typography
                                                variant="button"
                                                color="#666262"
                                                fontSize="15px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                Payment Method
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="black"
                                                fontSize="14px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                Visa Card
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div>
                                            <Typography
                                                variant="button"
                                                color="#666262"
                                                fontSize="15px"
                                                textAlign={matchDownSM ? 'center' : ''}
                                            >
                                                Summary
                                            </Typography>
                                            <Card sx={{ boxShadow: 0 }}>
                                                <Box
                                                    sx={{
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'center',
                                                        py: 3,
                                                        pl: 3,
                                                        bgcolor: '#F2F2F2',
                                                        color: theme.palette.grey[800]
                                                    }}
                                                >
                                                    <Typography style={{ fontSize: '15px' }} variant="button">
                                                        May 25, 2021 - Jun 25, 2021
                                                    </Typography>
                                                    <div style={{ height: '10px' }} />
                                                    <Typography style={{ fontSize: '15px' }} variant="h3">
                                                        Subscription Details
                                                    </Typography>
                                                    <Grid container direction="row" alignItems="center" padding={3}>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Subscription Plan
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                Gold Plan
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Gym Count Available
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                1
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Branch Count Available
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                3
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Calorie Calculator
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                Available
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Diet Plan
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                Available
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Plan Description
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                This has only branch
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Amount
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                Rs 1500.00
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container direction="row" alignItems="center">
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h4">
                                                                Amount Paid
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6} pb={2}>
                                                            <Typography style={{ fontSize: '15px' }} variant="h6">
                                                                Rs 1500.00
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" alignItems="center" justifyContent="center" xs={12}>
                                            <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                If you have any questions, contact NParkFitenss by&nbsp;
                                            </Typography>
                                            <Typography color="primary" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                nParkSolution@gmail.com
                                            </Typography>
                                            <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                &nbsp;or call at&nbsp;
                                            </Typography>
                                            <Typography color="primary" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                +94752369841
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default PaymentSuccess;
