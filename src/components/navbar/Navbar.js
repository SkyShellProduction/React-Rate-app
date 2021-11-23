import React from "react";
import { Link } from 'react-router-dom';
import './navbar.scss';
let navArr = [
    {name: "Главная", path: "/"}, 
    {name: "Калькулятор", path: "/calc"}, 
    {name: "Выборки", path: "/sample"}, 
    {name: "Информация", path: "/info"}
]
export const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {navArr.map((item,i) => 
                    <li><Link to={item.path} className="nav__link" key={item}>{item.name}</Link></li>
                )}
            </ul>
        </nav>
    )
}