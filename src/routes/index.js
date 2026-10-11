import React from "react";
import PathConstants from "./pathConstsnts";
import PrivateRoutes from "./PrivateRoutes";

const HomeBootstrap= React.lazy(() => import("../Pages/Home"));
const Register = React.lazy(() => import("../Pages/REGISTER"));
const LoginForm = React.lazy(() => import("../Pages/LOGEN"));
const ProductsPage = React.lazy(() => import("../Pages/Products"));
const Quiz = React.lazy(() => import("../Pages/QUIZ"));
const SuccessCard = React.lazy(() => import("../components/SuccessMessage"));
const LoginSuccessCard = React.lazy(() => import("../components/LoginSuccess"));
// const ProductDetails  = React.lazy(() => import("../pages/));
console.log("PathConstants check:", PathConstants);
const routes = [
  { path: PathConstants.HOME, element: <HomeBootstrap /> },
  { path: PathConstants.REGISTER, element: <Register/> },
  { path: PathConstants.LOGIN, element: <LoginForm /> },
  { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
    { path: PathConstants.SUCCESSCARD, element: <SuccessCard  /> },
    { path: PathConstants.LOGINSUCCESSCARD, element: <LoginSuccessCard  /> },
  {
    element: <PrivateRoutes />,
    children: [{ path: PathConstants.QUIZ, element: <Quiz/> }],
  },
];

export default routes;
