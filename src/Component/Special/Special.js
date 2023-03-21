import React, { useContext } from 'react';
import { houseContext, ringContext } from '../GrandPa/Grandpa';

const Special = () => {
    const ring = useContext(ringContext)
    const [hou ,setHou ]= useContext(houseContext)
    return (
        <div>
            <h5>Special</h5>
            <h5><small>Gift: {ring}</small></h5>
            <p><small>House: {hou}</small></p>
            <button onClick={()=>setHou(parseFloat(hou) +1)}>Increase</button>
        </div>
    );
};

export default Special;