import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const IceCreamView = () => {
  const numOfIceCream = useSelector((state)=> state.iceCream.numOfIceCream)

  return (
    <div>
        <h2>Number of IceCream - {numOfIceCream}</h2>
        <button>Order IceCream</button>
        <button>Restock IceCream</button>
      
    </div>
  )
}

export default IceCreamView
