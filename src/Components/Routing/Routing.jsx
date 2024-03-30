import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Start } from '../Start/Start';
import { Login } from '../Login/Login';
import { Services } from '../Pages/Services/Services';
import { About } from '../Pages/About/About';
import { Contact } from '../Pages/Contact/Contact';
import { MyCart } from '../Pages/MyCart/MyCart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Start></Start>,
    children: [
      { path: '/', element: <Main /> },
      {
        path: '/login',
        element: <Login />,
      },
      { path: '/service', element: <Services /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <MyCart /> },
    ],
  },
]);
