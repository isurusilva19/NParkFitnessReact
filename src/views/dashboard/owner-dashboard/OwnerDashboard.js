import React, { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import IncomeCard from '../dashboard-component/IncomeCard';
import SmallDarkCard from '../dashboard-component/SmallDarkCard';
import AttendanceCard from '../dashboard-component/AttendanceCard';
import SmallLightCard from '../dashboard-component/SmallLightCard';
import PopularCard from '../dashboard-component/PopularCard';
// import PopularCard from '../Default/PopularCard';
import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../Default/TotalIncomeLightCard';
import TotalGrowthBarChart from '../Default/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// ===========================|| DEFAULT DASHBOARD ||=========================== //

const OwnerDashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <IncomeCard isLoading={isLoading} amount="40" title="Total Member Count" />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <AttendanceCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <SmallDarkCard isLoading={isLoading} amount="40 Branches" title="Total Active Branch" />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <SmallLightCard isLoading={isLoading} amount="20 Staff" title="Total Staff" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OwnerDashboard;
