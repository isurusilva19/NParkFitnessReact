// assets
import {
    IconKey,
    IconReceipt2,
    IconBug,
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

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconCash
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        // {
        //     id: 'authentication',
        //     title: 'Authentication',
        //     type: 'collapse',
        //     icon: icons.IconKey,
        //     children: [
        //         {
        //             id: 'login3',
        //             title: 'Login',
        //             type: 'item',
        //             url: '/pages/login/login3',
        //             target: true
        //         },
        //         {
        //             id: 'register3',
        //             title: 'Register',
        //             type: 'item',
        //             url: '/pages/register/register3',
        //             target: true
        //         }
        //     ]
        // },
        {
            id: 'customerPayment',
            title: 'Customer Payment',
            type: 'item',
            url: '/pages/customerPayment',
            icon: icons.IconCash,
            breadcrumbs: false
        },
        {
            id: 'subscriptionPayment',
            title: 'Subscription',
            type: 'item',
            url: '/pages/subscription',
            icon: IconReceipt,
            breadcrumbs: false
        },
        {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/pages/notification',
            icon: IconBrandCodesandbox,
            breadcrumbs: false
        },
        {
            id: 'customerPayment2',
            title: 'Gym Managment',
            type: 'item',
            url: '/sample-page',
            icon: IconBuildingCommunity,
            breadcrumbs: false
        },
        {
            id: 'customerPayment3',
            title: 'Branch Managment',
            type: 'item',
            url: '/sample-page',
            icon: IconBuildingArch,
            breadcrumbs: false
        },
        {
            id: 'customerPayment4',
            title: 'Services',
            type: 'item',
            url: '/sample-page',
            icon: IconReportAnalytics,
            breadcrumbs: false
        },
        {
            id: 'customerPayment5',
            title: 'Member Managment',
            type: 'item',
            url: '/sample-page',
            icon: IconUsers,
            breadcrumbs: false
        }
    ]
};

export default pages;
