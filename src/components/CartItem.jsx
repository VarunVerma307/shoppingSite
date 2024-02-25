import React from 'react'
import {FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import {remove } from '../redux/slices/CartSlice';
const CartItem = ({item,index}) => {

  const dispatch=useDispatch();
  function removeCart(){
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <p>{item.price}</p>
        <div onClick={removeCart}>
          <FcDeleteDatabase/>
        </div>
      </div>
    </div>
  )
}

export default CartItem
