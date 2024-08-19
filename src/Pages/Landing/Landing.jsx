// import React from 'react'
// import LayOut from '../../Components/LayOut/LayOut'


// import Carousel from '../../Components/Carousel/Carousel'
// import Category from '../../Components/Category/CategoryCard'

// import Product from '../../Components/Product/Product'






// function Landing() {
//   return (
//     <LayOut>

//         <Carousel/>
//         <Category/>
//         <Product/>


//     </LayOut> 
           
//   )
// }

// export default Landing

import React from "react"
import LayOut from "../../Components/LayOut/LayOut"
import Carousel from "../../Components/Carousel/Carousel"
import Category from "../../Components/Category/Category"
import Product from "../../Components/Product/Product"
function Landing() {
  return (
    <LayOut>
      <Carousel/>
      <Category />
      <Product/>
    </LayOut>
  )
}
export default Landing