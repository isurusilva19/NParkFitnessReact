// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Admin Dashboard',
            type: 'item',
            url: '/pages/dashboard/admin',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'owner',
            title: 'Owner Dashboard',
            type: 'item',
            url: '/pages/dashboard/owner',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'manager',
            title: 'Manager Dashboard',
            type: 'item',
            url: '/pages/dashboard/manager',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'trainer',
            title: 'Trainer Dashboard',
            type: 'item',
            url: '/pages/dashboard/trainer',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
