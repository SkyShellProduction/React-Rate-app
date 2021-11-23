import React, {Fragment, useContext} from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
import './login.scss';
export const Login = () => {
    const {state, renderInputs, loginHandler} = useContext(RateContext);
    return(
        <Fragment>
            <div className="modal__form">
               {/* <Input type="email" label="Email" />
               <Input type="password" label="Password" /> */}
                {renderInputs()}
            </div>
            <div className="modal__btn">
                <Button text='войти' disabled={!state.isFormValid} click={loginHandler}/>
            </div>
        </Fragment>
    )
}