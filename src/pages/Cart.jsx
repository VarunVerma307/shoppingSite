import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
const { cart } = useSelector((state) => state);
const [totalamount,settotalamount]=useState(0);
useEffect(()=>{
  settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
})
  return (
    <div>
      {
        cart.length === 0 ?
          (<div>
            <p>Cart is Empty</p>
            <NavLink to="/"><button>Shop Now</button></NavLink>
          </div>)
          :
          (<div>
            <div>{cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            })}
          </div>
          <div>
            <h3>Your Cart</h3>
            <h4>SUMMARY</h4>
            <p>
              <span>Total Items : {cart.length}</span>
              <p>Total Price: ${totalamount}</p>
            </p>
            <button>Checkout now</button>
          </div>

          </div>)
      }
    </div>
  )
}

export default Cart
