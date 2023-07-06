import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';
import Login from '../components/Login';
import Register from '../components/Register';


export const router= createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/products",
        element: <Products />,
    },
    {
        path:"/contactus",
        element: <ContactUs />,
    },
    {
        path:"/aboutus",
        element: <AboutUs />,
    },
    {
        path:"/login",
        element: <Login />,
    },
    {
        path:"/register",
        element: <Register />,
    },

])


