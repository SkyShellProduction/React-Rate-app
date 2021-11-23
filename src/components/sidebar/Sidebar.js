import React, {useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import './sidebar.scss';
export const  Sidebar =  () => {
    const {state} = useContext(RateContext);
    return (
        <div className="sidebar">
            <div className="sidebar__head">
                <h3>Все валюты</h3>
            </div>
            <div className="sidebar__content">
                <ul>
                   {
                     Object.keys(state.currency).map((item, i) => 
                            <li key={i}>
                                 <p>
                                     <span>
                                         <img src={state.currency[item].flag} alt=""/>&nbsp;{item}
                                     </span>&nbsp;
                                     {state.currency[item].name}
                                 </p>
                             </li>
                         
                     )
                   }
                </ul>
            </div>
        </div>
    )
}