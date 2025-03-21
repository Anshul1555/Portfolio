import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import './css/Body.css';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
