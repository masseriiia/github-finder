import React from 'react';
import Style from './Header.module.scss'
import logo from "../../img/github-icon.png"
import search from "../../img/svg/search.svg"

const Header = () => {
    return (
        <header className={Style.header}>
            <div className={Style.headerWrapper}>
                <a className={Style.headerLogo} href="/">
                    <img src={logo} alt="Логотип"/>
                </a>
                <div className={Style.headerInput}>
                    <img className={Style.headerSearch} src={search} alt=""/>
                    <input className={Style.input} type="text" placeholder="Enter GitHub username"/>
                </div>

            </div>
        </header>
    );
};

export default Header;