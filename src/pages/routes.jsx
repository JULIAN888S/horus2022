import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

export default router;
