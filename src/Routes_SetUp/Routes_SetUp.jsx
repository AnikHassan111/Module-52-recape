import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NewsDetails from "../News/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/newsdetails/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router