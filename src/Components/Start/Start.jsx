import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Start = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};
