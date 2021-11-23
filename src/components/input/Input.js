import React from 'react';
import './input.scss';
function isInvalid({valid, touched, shouldValidate}){
    return !valid && touched && shouldValidate
}

export const Input = (props) => {
    const cls = ['modal__input'];
    const inputType = props.type || 'text';
    return (
        <div className={cls.join(' ')}>
            <label>
            {props.label}
                {isInvalid(props) ? <span>{props.errorMessage}</span> || "инвалидное значение" : null}
                
                <input type={inputType} value={props.value} onChange={props.onChange}/>
            </label>
        </div>
    )
}