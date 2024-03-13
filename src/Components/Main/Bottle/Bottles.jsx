import { useEffect, useState } from 'react';
import { Bottle } from './Bottle';
import {
  getDataFromLocal,
  removeIteam,
  setDataToLocal,
} from '../../../utilies/utilies';
import { Iteam } from './Iteam';

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
    console.log(total);
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
    setproductsOnCart(prevProducts => [...prevProducts, bottle]);
    setDataToLocal(bottle.id);
  };
  // Remove iteam functionality
  const handleRemove = id => {
    const update = productsOnCart.filter(el => el.id !== id);
    setproductsOnCart(update);
    removeIteam(id);
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
