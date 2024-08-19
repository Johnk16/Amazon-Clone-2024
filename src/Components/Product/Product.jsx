import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loder/Loder'




function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      axios
        .get('https://fakestoreapi.com/products')
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        });
    }, []);
  
    return (
      <> 
      {isLoading?(<Loader />) : ( <section className={classes.product__container}>
         
        { products?.map((singleProduct) => {
          return (
          <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          );
          })}
        
       
        
      </section>
      )}
      </>
    );
  }

  export default Product
// ?  On line 31 {products && was added by Poe chat GPT and it works well,  after I got the error message that the products array is undefined & cannot use the map method. The solution is either to use the question mark after produts (products?map) which we learned in class or {products && products.map ... as obtained from Poe (ChatGPT)