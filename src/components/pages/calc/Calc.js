import React, { useContext } from 'react';
import './calc.scss';
import { RateContext } from '../../../context/RateContext';
import { Counter } from '../../counter/Counter';
export const Calc = () => {
    const { state } = useContext(RateContext);
    // const currency = { ...state.currency };
    return (
        <React.Fragment>
            <h2>Калькулятор</h2>
           <div className="calc">
               <div className="calc__container">
                   <Counter/>
                   <div className="calc__result">Результат: {state.result} {state.currencyValue}</div>
               </div>
           </div>
        </React.Fragment>
    )
}