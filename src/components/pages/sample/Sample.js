import React, { useContext } from 'react';
import { RateContext } from '../../../context/RateContext';
import { Button } from '../../button/Button';
import './sample.scss';
export const Sample = () => {
    const {state, baseHandler, base2Handler, sampleDateHandler, dataWrite, sampleRemove} = useContext(RateContext);
    return ( 
        <div className="sample">
            <div className="sample__container">
                <div>
                    <h3>
                        Получить курс: &nbsp;
                        <select onChange={baseHandler} value={state.sample.base}>
                        {
                            Object.keys(state.currency).map((item, i) => {
                                return (
                                    <option key={i}>{item}</option>
                                )
                            })
                        }
                        </select>
                            &nbsp;к&nbsp;
                        <select onChange={base2Handler} value={state.sample.base2}>
                        {
                            Object.keys(state.currency).map((item, i) => {
                                return (
                                    <option key={i}>{item}</option>
                                )
                            })
                        }
                        </select>
                    </h3>
                </div>
                <div className="sample__head">
                    <span>Дата: <input type="date" onChange={sampleDateHandler}/></span>
                    <Button text="Получить курс" click={dataWrite} arg={state.sample}/>
                </div>
                <div className="sample__result">
                    <ul>
                        {
                            Object.keys(state.sampleList).map((item, i) => 
                                <li key={item}>
                                    <span><img src={state.currency[state.sampleList[item].base].flag} alt={item}/> {state.sampleList[item].base}</span>
                                    <span>{state.sampleList[item].date}</span>
                                    <span>{`${state.sampleList[item].course} ${state.sampleList[item].base2}`}</span>
                                    <button onClick={() => sampleRemove(item)}>x</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}