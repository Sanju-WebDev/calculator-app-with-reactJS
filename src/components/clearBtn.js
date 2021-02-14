import React from 'react';
import './calc.css';

function ClearBtn( { children, clearBtnHandler } ) {
    return (
        <div className= "clear-btn" onClick= {() => clearBtnHandler()}>
            {children}
        </div>
    )
}

export default ClearBtn
