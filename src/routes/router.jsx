import { createBrowserRouter } from 'react-router-dom';
import ClientPage from '../pages/client-page';
import Layout from '../components/layout/layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <ClientPage />,
            },
        ],
    },
]);

export default router;
