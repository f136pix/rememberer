import {ClipboardIcon, Home, UsersRoundIcon} from "lucide-react";

export const SOCIAL_LINKS = [{
    component: 'Github',
    link: 'https://github.com/f136pix'
}, {
    component: 'Linkedin',
    link: 'https://www.linkedin.com/in/filipe-cinel/'
}, {
    component: 'Mail',
    link: 'https://github.com/f136pix'
}];

export const CARD_COLORS = [{
    color: 'bg-calm-blue',
}, {
    color: 'bg-calm-peach'
}, {
    color: 'bg-calm-yellow'
}, {
    color: 'bg-calm-green'
}];

export const FEATURES_LIST = [{
    icon: <Home/>,
    title: 'Home',
    href: '/'
}, {
    icon: <UsersRoundIcon/>,
    title: 'Teams',
    href: '/teams/'
}, {
    icon: <ClipboardIcon/>,
    title: 'Tasks',
    href: '/tasks/'
}];

export const FEATURES_ICONS = [];