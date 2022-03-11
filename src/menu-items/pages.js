// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconJumpRope } from '@tabler/icons';
import {AccountBalance} from '@material-ui/icons'
// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'gym',
            title: 'Gym',
            type: 'item',
            url: '/pages/gym',
            target: false
        },
        {
            id: 'branch',
            title: 'Branch',
            type: 'item',
            icon: icons.AccountBalance,
            url: '/pages/branch',
            target: false
        },
    ]
};

export default pages;
