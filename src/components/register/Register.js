import React, {Fragment, useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
import './register.scss';
export const Register = () => {
    const {state, renderInputs, registerHandler} = useContext(RateContext);
    return (
        <Fragment>
        <div className="modal__form">
              {renderInputs()}
        </div>
        <div className="modal__btn">
            <Button text="Зарегистрироваться" disabled={!state.isFormValid} click={registerHandler}/>
        </div>
    </Fragment>
    )
}