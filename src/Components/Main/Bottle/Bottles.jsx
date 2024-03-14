import { useEffect, useState } from 'react';
import { Bottle } from './Bottle';
import {
  getDataFromLocal,
  removeIteam,
  setDataToLocal,
} from '../../../utilies/utilies';
import { Iteam } from './Iteam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Bottles = () => {
  const [bottleData, setbottleData] = useState([]);
  const [productsOnCart, setproductsOnCart] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  // Getting all data from API
  useEffect(() => {
    const f = async () => {
      const promisedData = await fetch('/bottle.json');
      const actualData = await promisedData.json();
      setbottleData(actualData);
    };
    f();
  }, []);
  // total calculaton
  useEffect(() => {
    const total =
      productsOnCart.length &&
      productsOnCart.reduce((acc, cur) => acc + cur.price, 0);
    productsOnCart.length && settotalPrice(total);
  }, [productsOnCart]);
  // Getting added cart data from LocalStorage
  useEffect(() => {
    if (bottleData.length) {
      const data = getDataFromLocal();
      const storedProducts = data.map(el => {
        const matched = bottleData.find(ele => ele.id === el);
        return matched;
      });
      setproductsOnCart([...storedProducts]);
    }
  }, [bottleData]);
  // Add to Cart Fuction
  const handleAddToCart = bottle => {
    const isDuplicate = productsOnCart.find(el => el.id === bottle.id);
    if (!isDuplicate) {
      setproductsOnCart(pre => [...pre, bottle]);
      setDataToLocal(bottle.id);
      notify();
    } else {
      errorNotify();
    }
  };
  // Remove iteam functionality
  const handleRemove = id => {
    const update = productsOnCart.filter(el => el.id !== id);
    setproductsOnCart(update);
    removeIteam(id);
  };
  const notify = () => {
    toast.success('Iteam has been added successfull', {
      position: 'top-center',
      theme: 'colored',
    });
  };
  const errorNotify = () => {
    toast.error('Order limit for per order is only one', {
      position: 'top-center',
      theme: 'colored',
    });
  };
  return (
    <div className='grid lg:grid-cols-12 grid-cols-1'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 col-span-9 order-2 md:order-1'>
        {bottleData.map(el => {
          return (
            <Bottle handleAddToCart={handleAddToCart} key={el.id} bottle={el} />
          );
        })}
      </div>
      {/* Shopping cart section */}
      <div className='col-span-3 order-1 md:order-2'>
        <ToastContainer
          stacked
          position='top-center'
          autoClose={2000}
          closeOnClick
          rtl={true}
          hideProgressBar={true}
        />
        <h1 className='text-center text-2xl font-black'>Shopping Cart</h1>
        {productsOnCart.length > 0 ? (
          <div className='border-b'>
            <div className='flex justify-around'>
              <h1>Name</h1>
              <h1>Price</h1>
            </div>
            {productsOnCart.map((el, iDx) => {
              return (
                <Iteam key={iDx} handleREmove={handleRemove} productInfo={el} />
              );
            })}
            <div className='flex justify-around'>
              <h1>Total</h1>
              <h1>{totalPrice}</h1>
            </div>
          </div>
        ) : (
          <h1 className='text-center'>Your cart is empty</h1>
        )}
      </div>
    </div>
  );
};
