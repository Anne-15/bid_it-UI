import Suppliers from "./pages/Suppliers";
import Tenders from "./pages/Tenders";
export const links = [
    {
        id: 1,
        url: '/',
        text: 'home'
    },
    {
        id: 2,
        url: <Suppliers/>,
        text: 'suppliers'
    },
    {
        id: 3,
        url: <Tenders/>,
        text: 'tenders'
    },
    {
        id: 4,
        url: '/profile',
        text: 'profile'
    }
];

export const profile = [
    {
        id: 1,
        url: '/tender',
        text: 'add a tender'
    },
    {
        id: 2,
        url: '/company',
        text: 'add company'
    }
]