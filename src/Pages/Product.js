import React from 'react'
import { useParams } from 'react-router'

function Product({match}) {
    const  {id} =  useParams();

    console.log("inside param");
    console.log(id);
    return (
        <div>
            this is product
        </div>
    )
}

export default Product

