import { useEffect, useState } from 'react';
import { Bottle } from './Bottle';
import { getDataFromLocal, setDataToLocal } from '../../../utilies/utilies';
import { Iteam } from './Iteam';

export const Bottles = () => {
  const [bottleData, setbottleData] = useState([]);
  const [productsOnCart, setproductsOnCart] = useState([]);
  // Getting all data from API
  useEffect(() => {
    const f = async () => {
      const promisedData = await fetch('/bottle.json');
      const actualData = await promisedData.json();
      setbottleData(actualData);
    };
    f();
  }, []);

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
    setproductsOnCart([...productsOnCart, bottle]);
    setDataToLocal(bottle.id);
  };
  const handleRemove = id => {
    const filteredProducts = productsOnCart.filter(el => el.id === id);

    setproductsOnCart(...filteredProducts);
  };
  return (
    <div className='grid grid-cols-12'>
      <div className='grid grid-cols-3 gap-5 col-span-9'>
        {bottleData.map(el => {
          return (
            <Bottle handleAddToCart={handleAddToCart} key={el.id} bottle={el} />
          );
        })}
      </div>
      <div className='col-span-3'>
        <h1 className='text-center text-2xl font-black'>Shopping Cart</h1>
        {productsOnCart.length > 0 && (
          <div className='border-b'>
            <div className='flex justify-around'>
              <h1>Name</h1>
              <h1>Price</h1>
            </div>
            {productsOnCart.map((el, iDx) => {
              console.log(el);

              return (
                <Iteam key={iDx} handleREmove={handleRemove} productInfo={el} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
