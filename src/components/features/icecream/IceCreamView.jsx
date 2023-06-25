import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ordered ,restocked} from './icecreamSlice';

const IceCreamView = () => {
  const [value,setValue]=React.useState(0)
  const numOfIceCream = useSelector((state)=> state.iceCream.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of IceCream - {numOfIceCream}</h2>
        <input value={value.toString()} type='number' onChange={e=>setValue(parseInt(e.target.value))}/>
        <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock IceCream</button>
      
    </div>
  )
}

export default IceCreamView
