import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const ringContext = createContext('mathir ring')
export const houseContext =createContext(12)
const Grandpa = () => {
   
    const [hou,setHou]=useState([7])
    
    return (
        <div className='grand'>
            <ringContext.Provider value='Gold Ring'>
                <houseContext.Provider value={[hou,setHou]}>
                    <h4>Grand-Pa</h4>
                    <p><small>House: {hou}</small></p>
                    <section className='flex'>
                        <Father hou={hou}></Father>
                        <Uncle  hou={hou}></Uncle>
                        <Aunty  hou={hou}></Aunty>
                    </section>
                </houseContext.Provider>
            </ringContext.Provider>
        </div>
    );
};

export default Grandpa;