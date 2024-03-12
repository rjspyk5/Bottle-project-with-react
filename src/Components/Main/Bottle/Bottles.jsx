import React, { useEffect, useState } from 'react';
import { Bottle } from './Bottle';
import { getDataFromLocal, setDataToLocal } from '../../../utilies/utilies';

export const Bottles = () => {
  const [bottleData, setbottleData] = useState([]);
  const [productsOnCart, setproductsOnCart] = useState([]);
  useEffect(() => {
    const f = async () => {
      const promisedData = await fetch('/bottle.json');
      const actualData = await promisedData.json();
      setbottleData(actualData);
    };
    f();
  }, []);

  useEffect(() => {
    if (bottleData.length) {
      const data = getDataFromLocal();
      const storedProducts = data.map(el => {
        const matched = bottleData.find(ele => ele.id === el);
        return matched;
      });
      console.log(storedProducts);
    }
  }, [productsOnCart, bottleData]);
  const handleAddToCart = id => {
    setproductsOnCart([...productsOnCart, id]);
    setDataToLocal(id);
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
      <div className='col-span-3'></div>
    </div>
  );
};
