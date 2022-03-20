import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const PaymentSuccess = Loadable(lazy(() => import('views/pages/subscription/PaymentSuccessPage')));

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        },
        {
            path: '/pages/paymentSuccess',
            element: <PaymentSuccess />
        }
    ]
};

export default AuthenticationRoutes;
