import { createBrowserRouter } from 'react-router-dom';
import ClientPage from '../pages/client-page';
import Layout from '../components/layout/layout';
import ClientAdd from '../pages/client-page/components/clientAdd';
import TotalPage from '../Q3';
import Page1Q from '../Q3/1/Q1';
import Page2Q from '../Q3/2/Q2-1';
import JoinPage from '../Q3/2/Q2-2';
import Page3Q from '../Q3/3/Q3-1';
import Page4Q from '../Q3/4/Q4-1';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <ClientPage />,
            },
            {
                path: '/add',
                element: <ClientAdd />,
            },
        ],
    },
    {
        path: '/Q',
        element: <TotalPage />,
    },
    {
        path: '/1',
        element: <Page1Q />,
    },

    {
        path: '/2',
        element: <Page2Q />,
    },
    {
        path: '/2-2',
        element: <JoinPage />,
    },
    {
        path: '/3',
        element: <Page3Q/>,
    },
    {
        path: '/4',
        element: <Page4Q />,
    },
]);

export default router;
