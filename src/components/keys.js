import React from 'react';
import './calc.css';

function Keys( { children, keyHandler } ) {

const isOperator = key => {
    return !isNaN(key) || key === '.' || key === '=';
}

    return (
        <div 
            className = {`each-button ${
                isOperator(children) ? null : 'operator-btn'
            }`}
            onClick= {() => keyHandler(children)}
        >
            {children}
        </div>
    )
}

export default Keys;
