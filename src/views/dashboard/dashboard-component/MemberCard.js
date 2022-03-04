import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
    Avatar,
    Chip,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Menu,
    MenuItem,
    Typography,
    ListItemAvatar
} from '@material-ui/core';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import { IconFileAnalytics, IconCalendarEvent, IconBulb, IconReceipt2 } from '@tabler/icons';
import User1 from 'assets/images/users/user-round.svg';
// style constant
const useStyles = makeStyles((theme) => ({
    cardAction: {
        padding: '10px',
        paddingTop: 0,
        justifyContent: 'center'
    },
    primaryLight: {
        color: theme.palette.primary[200],
        cursor: 'pointer'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    listChipSuccess: {
        color: theme.palette.success.dark,
        backgroundColor: theme.palette.success.light,
        height: '24px',
        padding: '0 6px',
        marginBottom: '5px',
        fontWeight: '500'
    },
    listChipError: {
        color: theme.palette.orange.dark,
        backgroundColor: theme.palette.orange.light,
        height: '24px',
        padding: '0 6px',
        marginRight: '5px',
        fontWeight: '500'
    },
    avatarSuccess: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
        marginLeft: '15px'
    },
    avatarPrimary: {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        borderRadius: '20px',
        marginLeft: '2px',
        borderColor: theme.palette.primary.main
    },
    successDark: {
        color: theme.palette.success.dark
    },
    secondary: {
        color: theme.palette.grey[500]
    },
    avatarError: {
        width: '16px',
        height: '16px',
        borderRadius: '5px',
        backgroundColor: theme.palette.orange.light,
        color: theme.palette.orange.dark,
        marginLeft: '15px'
    },
    errorDark: {
        color: theme.palette.orange.dark
    }
}));

// ===========================|| DASHBOARD DEFAULT - POPULAR CARD ||=========================== //

const MemberCard = ({ isLoading, data }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Members</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            className={classes.primaryLight}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                <BajajAreaChartCard />
                            </Grid> */}
                            <Grid item xs={12}>
                                {data !== undefined && data.serviceType.length > 0 ? (
                                    <>
                                        {data.serviceType.map((element) => (
                                            <>
                                                <Grid container direction="row" justifyContent="space-between">
                                                    <div style={{ display: 'flex' }}>
                                                        <ListItemAvatar>
                                                            <Avatar src={User1} variant="rounded" className={classes.avatarPrimary} />
                                                        </ListItemAvatar>

                                                        <div style={{ width: 10 }} />
                                                        <Grid item direction="column">
                                                            <Grid container direction="row" justifyContent="flex-start">
                                                                <Grid item lg={12} md={6} sm={6} xs={12}>
                                                                    <Typography variant="subtitle1" color="inherit">
                                                                        Induwara
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item lg={12} md={6} sm={6} xs={12}>
                                                                    <Typography variant="subtitle1" color="inherit">
                                                                        Nagodavithana
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>

                                                            <Grid container direction="row" justifyContent="flex-start">
                                                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                                                    <Chip
                                                                        size="small"
                                                                        label="DietPlan"
                                                                        className={classes.listChipSuccess}
                                                                    />
                                                                </Grid>
                                                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                                                    <Chip size="small" label="Schedule" className={classes.listChipError} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <Grid item>
                                                        <Typography variant="subtitle2" textAlign="center" className={classes.secondary}>
                                                            ID(12053)
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Divider className={classes.divider} />
                                            </>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

MemberCard.propTypes = {
    isLoading: PropTypes.bool
};

export default MemberCard;
