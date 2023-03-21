import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddtoCart}) => {
    
    const { name,picture,price} =tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="T-shirt" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={()=>handleAddtoCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;