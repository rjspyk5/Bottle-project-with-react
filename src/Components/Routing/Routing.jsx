import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Start } from '../Start/Start';
import { Login } from '../Login/Login';
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
    ],
  },
]);
