import React, { useEffect, useState } from 'react'
import "./Common.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AllProducts from './AllProducts';
import Product from './Product';
function LandingPage() {



    return (
        <div className="container-outer">
            <div className="header">
            <button >Click Me</button>
            </div>
            <div className="all-products">
                
                <AllProducts/>
             
            </div>
        </div>
    )
}

export default LandingPage
