import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {remove,add} from '../redux/slices/CartSlice'

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addtoCart() {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }
  function removeCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p> {post.description}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <div>
        {cart.some((p) => p.id === post.id) ? (<button onClick={removeCart}>Remove Item</button>) : (<button onClick={addtoCart}>Add to Cart</button>)}
      </div>
    </div>
  )
}

export default Product
