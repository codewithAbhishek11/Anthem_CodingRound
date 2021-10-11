import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import "./Common.css"

import Product from './Product';
function AllProducts() {

    const [allproducts, setAllproducts] = useState([]);
    const [id, setId] = useState(0);
   

    useEffect(()=>{
        fetchproducts()
    },[])


    const fetchproducts =  ()=> {
        fetch("https://fakestoreapi.com/products").then(response => response.json())
        .then((json) => setAllproducts(json))
        console.log(allproducts);
    }

    const getSingelProductData = (id)=>{
        setId(id);
        console.log(id);
    }

    


    return (
        <>
        <BrowserRouter>
        {
             allproducts.map((data)=>{
                 return (
                     <>
                    <Link to= {data.id}>
                     <div className="productData" onClick={()=>getSingelProductData(data.id)}>
                        <div className="image-area"> <img src={data.image}></img></div>
                        <div className="title">{data.title}</div>
                        <div className="price">PRICE: {data.price}</div>
                        </div>
                    </Link>
                    
                    </>
                 )
             })
        }
         <Switch>
                    <Route path={`/products/:${id}`} component={Product}></Route>
                </Switch>
        </BrowserRouter>
        </>
    )
}

export default AllProducts
