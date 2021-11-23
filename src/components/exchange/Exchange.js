import React, {useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import './exchange.scss';
export const Exchange = () => {
    const {state} = useContext(RateContext);
    const currency = {...state.currency};
    return (
        <div className="exchange">
            <div className="exchange__container">
                <div className="exchange__content">
                    <div className="exchange__head">
                        <p>Базовая валюта: {state.base} &nbsp;Дата: {state.date}</p>
                    </div>
                    <ul>
                    {
                     Object.keys(currency).map((item, i) => 
                            <li key={i}>
                                     <span className="exchange__sp1">
                                         <img src={currency[item].flag} alt=""/>&nbsp;{item}
                                     </span>
                                     <span className="exchange__sp2">{`1${state.base} = ${currency[item].course} ${item}`}</span>
                             </li>
                     )
                   }
                    </ul>
                </div>
            </div>
        </div>
    )
}