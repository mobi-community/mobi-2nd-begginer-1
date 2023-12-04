import { createBrowserRouter } from 'react-router-dom';
import ClientPage from '../pages/client-page';


const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientPage />,
    },
]);

export default router;
