
import './assets/styles/index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  import { AppProviders } from './context/AppProviders'; 
// import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';
// import Login from './Pages/LOGEN';
// import Register from './Pages/REGISTER';

// import ProductsPage from './Pages/Products';
// import Quiz from './Pages/QUIZ';
// import ProductDetails from './Pages/productDetails';
// import HomeBootstrap  from './Pages/Home';
// import SuccessCard from './components/SuccessMessage';
// import LoginSuccessCard from './components/LoginSuccess';

// import { Provider } from 'react-redux';
// import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './layout'
import { useTranslation } from 'react-i18next';
import AppProvider from './components/app-provider';
 
// function App() {

  
//   const router = createBrowserRouter([
//     {
//       element: <Layout />,
//       // errorElement: <PageNotFound />,
//       children: routes,
//     },
//   ]);
//   return (
//     <Provider store={store}>
     
//         <AppProviders>
  
//           <RouterProvider router={router} />
       
        
//         </AppProviders>
     
//     </Provider>
//   );
// }

// export default App;

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
