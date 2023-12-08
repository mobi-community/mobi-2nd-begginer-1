import { createBrowserRouter } from 'react-router-dom';
import ClientPage from '../pages/client-page';
import Layout from '../components/layout/layout';
import ClientAdd from '../pages/client-page/components/clientAdd';

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
]);

export default router;
