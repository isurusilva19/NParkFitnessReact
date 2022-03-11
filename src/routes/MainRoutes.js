import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import GymDetails from 'views/pages/Gym/GymDetails';
import BranchDetails from 'views/pages/Branch/BranchDetails';
import BranchEdit from 'views/pages/Branch/BranchEdit';
import Schedule from 'views/pages/Schedule/Schedule';
import ScheduleItems from 'views/pages/Schedule/ScheduleItems';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },

        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/pages/gym',
            element: <GymDetails />
        },
        {
            path:'/pages/branch',
            element: <BranchDetails/>
        },
        {
            path:'/pages/branch/create',
            element:<BranchEdit/>
        },
        {
            path:'/pages/schedule',
            element:<Schedule/>
        },
        {
            path:'/pages/scheduleItems',
            element:<ScheduleItems/>
        }
        
    ]
};

export default MainRoutes;
