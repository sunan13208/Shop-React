import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'


const Cart = ({cart,handleRemoveCart}) => {
    let sms
    if(cart.length ===0){
        sms= <p>please buy one</p>
    }
    else{
        sms=''
    }
    return (
        <div className='CartBox'>
            <h1>quantity: {cart.length}</h1>
            {
                cart.map(car=> <p
                     key={car.id}>
                        {car.name}
                        <button onClick={()=>handleRemoveCart(car)} className='btn'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                     </p>)
            }
            {
                sms
            }
        </div>
    );
};

export default Cart;