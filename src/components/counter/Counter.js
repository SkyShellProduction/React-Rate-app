import React, {useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
import './counter.scss';

export const Counter = () => {
    const {state, inputValueHandler, currencyValueHandler, calculatorHadler} = useContext(RateContext);
    return (

        <div className="calc__head">
            <div>
                <h4>Я хочу обменять:</h4>
            </div>
            <div className="operation">
                <span>
                    <input type="number" value={state.inputValue}
                    onChange={inputValueHandler}/>&nbsp;EUR
                </span>
                    <select onChange={currencyValueHandler}>
                        {
                            Object.keys(state.currency).map((item, i) => {
                                return (
                                    <option key={i}>{item}</option>
                                )
                            })
                        }
                    </select>
                   <Button text="Посчитать" click={calculatorHadler} arg={state.currencyValue}/>
            </div>
        </div>
    )
} 