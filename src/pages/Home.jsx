import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product'
const Home = () => {
  const API_url = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  async function fetchdata() {
    setloading(true);
    try {
      const response = await fetch(API_url);
      const data = await response.json();
      setposts(data);

    }
    catch (e) {
      console.log("something went wrong");
      setposts([]);
    }
    setloading(false)
  }
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <div>
      {loading ?
        (<Spinner />)
        :
        (posts.length === 0 ?
          (<div><p>No post found</p></div>)
          :
          (<div>{posts.map((post) => {
            return <Product key={post.id} post={post} />
          })}</div>)
        )}
    </div>
  )
}

export default Home
