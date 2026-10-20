
import './assets/styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './layout'
import { useTranslation } from 'react-i18next';
import AppProvider from './components/app-provider';
 
function App() {
  const { i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      // errorElement: <PageNotFound />,
      children: routes,
    },
  ]);

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
