import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Navbar } from '../navbar/Navbar';
import './header.scss';
export const Header = () => {
    const {modalShowHandler} = useContext(RateContext);
    return (
        <header className="header">
            <div className="header__wrap">
                <a href="#/" className="header__logo">RateApp</a>
                <Navbar/>
                <a href="#/" className="header__person icon" onClick={modalShowHandler}></a>
            </div>
        </header>
    )
}