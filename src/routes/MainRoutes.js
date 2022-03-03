import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardOwner = Loadable(lazy(() => import('views/dashboard/owner-dashboard/OwnerDashboard')));
const DashboardManager = Loadable(lazy(() => import('views/dashboard/manager-dashboard/ManagerDashboard')));
const DashboardTrainer = Loadable(lazy(() => import('views/dashboard/trainer-dashboard/TrainerDashboard')));
const DashboardAdmin = Loadable(lazy(() => import('views/dashboard/admin-dashboard/AdminDashboard')));

const CustomerPayment = Loadable(lazy(() => import('views/pages/customer-payment/CustomerPayment')));
const Subscription = Loadable(lazy(() => import('views/pages/subscription/Subscription')));
const Notification = Loadable(lazy(() => import('views/pages/notification/Notification')));

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
            path: '/dashboard/owner',
            element: <DashboardOwner />
        },
        {
            path: '/dashboard/manager',
            element: <DashboardManager />
        },
        {
            path: '/dashboard/trainer',
            element: <DashboardTrainer />
        },
        {
            path: '/dashboard/admin',
            element: <DashboardAdmin />
        },
        {
            path: '/pages/customerPayment',
            element: <CustomerPayment />
        },
        {
            path: '/pages/subscription',
            element: <Subscription />
        },
        {
            path: '/pages/notification',
            element: <Notification />
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
        }
    ]
};

export default MainRoutes;
