import React, { useEffect, useState } from 'react'
import { Bottle } from './Bottle'


export const Bottles = () => {
    const [bottleData, setbottleData] = useState([])

    useEffect(()=>{
        const f =async()=>{
            const promisedData=await fetch("/bottle.json");
            const actualData=await promisedData.json();
            setbottleData(actualData);
        }
        f();
    },[])
    
  return (
    <div className='grid grid-cols-3 gap-5'>
        {bottleData.map(({id,img,name})=>{
           return <Bottle key={id} name={name} img={img} />
        })}
        
    </div>
  )
}
