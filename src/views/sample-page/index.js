import React, { useEffect, useState } from 'react';
// material-ui
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import NextPaymetCard from './NextPaymentCard';
import CurrentSubPlanCard from './CurrentSubPlanCard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

const SamplePage = () => {
    const [subType, setSubType] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetch('http://localhost:3005/api/subscriptionType/3')
            .then((response) => response.json())
            .then((data) => {
                setSubType(data.data.type);
                setAmount(data.data.amount);
            });
    }, []);

    return (
        <MainCard title="Subscription">
            <Grid container spacing={2}>
                {/* <button type="button" onClick={fetchSubscriptionType}>
                    click
                </button> */}
                <Grid item xs={6}>
                    <CurrentSubPlanCard typesub={subType} amount={amount} />
                </Grid>
                <Grid item xs={6}>
                    <NextPaymetCard />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default SamplePage;
