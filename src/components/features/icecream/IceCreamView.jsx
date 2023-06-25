import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ordered ,restocked} from './icecreamSlice';

const IceCreamView = () => {
  const numOfIceCream = useSelector((state)=> state.iceCream.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of IceCream - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock IceCream</button>
      
    </div>
  )
}

export default IceCreamView
