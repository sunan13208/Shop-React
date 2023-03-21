import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tShirts =useLoaderData()
    const [cart,setCart]=useState([])
    const handleAddtoCart =(tShirt)=>{
            const oldshirt = cart.find(car=> tShirt.id === car.id)
            if(oldshirt){
                alert("Already added")
            }
            else{
                const newcart=[...cart,tShirt ]
                setCart(newcart)
            }
    }
    const handleRemoveCart=(shirt)=>{
        const reminig = cart.filter(car=> car.id !== shirt.id)
        setCart(reminig)
    }
    return (
        <div className='home-container'>
            <div className='shirt-container'>
            {
                tShirts.map(tShirt => <Tshirt handleAddtoCart={handleAddtoCart} tshirt={tShirt} key={tShirt.id}></Tshirt>)
            }
            </div>
            <div className='cart-container'>
                    <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>                
            </div>
        </div>
    );
};

export default Home;