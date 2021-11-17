import React from 'react'
import Product from '../components/Product'
//assets
import imgMain from '../img/image-product-1.jpg'

import imgProduct1 from "../img/image-product-1.jpg";
import imgProduct2 from "../img/image-product-2.jpg";
import imgProduct3 from "../img/image-product-3.jpg";
import imgProduct4 from "../img/image-product-4.jpg";
//////////////////////////////

const ProductPage = () => {
    
    return (
        <>
            <Product imgContent={imgMain} company="Sneaker Company" title="Fall Limited Edition Sneakers" info="These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everthing the weather can offer" priceTotal="125.00" desc={50} priceDesc="250.00" itemAdd={0} producitem1={imgProduct1} producitem2={imgProduct2} producitem3={imgProduct3} producitem4={imgProduct4}  />
        </>
    )
}

export default ProductPage
