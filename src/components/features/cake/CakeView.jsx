import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const CakeView = () => {
  const numOfCakes =useSelector((state)=>
    state.cake.numOfCakes
)
  return (
    <div>
        <h2>Number of cake - {numOfCakes}</h2>
        <button>Order Cake</button>
        <button>Restock Cake</button>
      
    </div>
  )
}

export default CakeView
