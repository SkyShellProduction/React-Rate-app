import React, {useContext, useState} from 'react';
import { RateContext } from '../../context/RateContext';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import './modal.scss';
export const Modal = () => {
    const {state,  modalHideHandler} = useContext(RateContext);
    const [value, setValue] = useState('login');
    const links = [{name: 'Вход', id: 'login'}, {name: 'Регистрация', id: 'register'}];
    const windowHandler = (id) => {
        setValue(id);
    }
    const slc = ['modal'];
    if(state.showModal){
        slc.push('modalShow');
    }
    return (
        <div className={slc.join(' ')}>
            <div className="modal__head">
                <ul>
                   {
                       links.map((item, i) => 
                        <li
                        style={{fontWeight: item.id === value ? 'bold' : 'normal', cursor: 'pointer'}} 
                        key={item+i} 
                        onClick={() => windowHandler(item.id)}>{item.name}
                        </li>
                       )
                   }
                </ul>
                <span onClick={modalHideHandler}>x</span>
            </div>
            <hr/>
            <h2 style={{color: '#f01f30', textAlign: 'center'}}>{state.error}</h2>
            {
                value === 'register' ? <Register/> : <Login/>
            }
        </div>
    )
}