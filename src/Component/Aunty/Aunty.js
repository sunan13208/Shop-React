import React from 'react';
import Cousin from '../Cousin/Cousin';
import Cousin1 from '../Cousin1/Cousin1';

const Aunty = ({hou}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House: {hou}</small></p>
            <section className='flex'>
                <Cousin  hou={hou}></Cousin>
                <Cousin1 hou={hou}></Cousin1>
            </section>
        </div>
    );
};

export default Aunty;