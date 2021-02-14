import React, { useState } from 'react';
import Keys from './keys.js';
import './calc.css';
import Screen from './screen.js';
import ClearBtn from './clearBtn.js';
import * as math from 'mathjs';

function Calc() {

const [input, setInput] = useState('');
const clearBtnHandler = () => {
    setInput('');
}
const keyHandler = (key) => {
    setInput(prev => prev+key);
}
const equalToHandler = () => {
    setInput(math.evaluate(input));
}

    return (

        <div className= "calc-container">
            <Screen input= {input}/>
            <div className= "calc-row">
                <Keys keyHandler= {keyHandler} >7</Keys>
                <Keys keyHandler= {keyHandler} >8</Keys>
                <Keys keyHandler= {keyHandler} >9</Keys>
                <Keys keyHandler= {keyHandler} >/</Keys>
            </div>
            <div className= "calc-row">
                <Keys keyHandler= {keyHandler} >4</Keys>
                <Keys keyHandler= {keyHandler} >5</Keys>
                <Keys keyHandler= {keyHandler} >6</Keys>
                <Keys keyHandler= {keyHandler} >*</Keys>
            </div>
            <div className= "calc-row">
                <Keys keyHandler= {keyHandler} >1</Keys>
                <Keys keyHandler= {keyHandler} >2</Keys>
                <Keys keyHandler= {keyHandler} >3</Keys>
                <Keys keyHandler= {keyHandler} >+</Keys>
            </div>
            <div className= "calc-row">
                <Keys keyHandler= {keyHandler} >.</Keys>
                <Keys keyHandler= {keyHandler} >0</Keys>
                <Keys keyHandler= {equalToHandler} >=</Keys>
                <Keys keyHandler= {keyHandler} >-</Keys>
            </div>
            <div className= "calc-row">
                <ClearBtn clearBtnHandler= {clearBtnHandler} >Clear</ClearBtn>
            </div>
        </div>
    )
}

export default Calc;
