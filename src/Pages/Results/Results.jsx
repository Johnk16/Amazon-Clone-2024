import React, { useState, useEffect } from 'react';
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
// import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loder/Loder'

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const {categoryName} = useParams()

  useEffect (()=>{
axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=> {
    setResults(res.data)
    setIsLoading(false)
    console.log(res.data)
  }) .catch((err)=>{
    console.log(err)
    setIsLoading(false)

  })

},[])

 
  return (

    <LayOut> 
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {categoryName}</p>
        <hr />
        { isLoading ? (
          <Loader />
        ) :  (

        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            renderDesc={false}
            renderAdd={true}
              
            />

          ))}
        
          </div>
        )}
          
      </section>
    


    </LayOut>
  )
}

export default Results

// My Proble is when I click on product category the items do not appear on the screen.