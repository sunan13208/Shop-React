import React from 'react';
import Special from '../Special/Special';

const Me = ({hou,ring}) => {
    return (
        <div>
             
            <h4>Me</h4>
            <p><small>House: {hou}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Me;