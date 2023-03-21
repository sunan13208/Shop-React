import React from 'react';
import Bro from '../Bro/Bro';
import Me from '../Me/Me';
import Sis from '../SIS/Sis';

const Father = ({hou,ring}) => {
    return (
        <div>
            <h4>Father</h4>
            <p><small>House: {hou}</small></p>
            <section className='flex'>
                <Me  ring={ring} hou={hou}></Me>
                <Sis hou={hou}></Sis>
                <Bro hou={hou}></Bro>
            </section>
        </div>
    );
};

export default Father;