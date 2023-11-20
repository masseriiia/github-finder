import React from 'react';
import Style from './Header.module.scss'
import logo from "../../img/github-icon.png"
import search from "../../img/svg/search.svg"
import AppContext from "../context";

const Header = () => {
    const {data, setData, handleInputChange} = React.useContext(AppContext)

    return (
        <header className={Style.header}>
            <div className={Style.headerWrapper}>
                <a className={Style.headerLogo} href="/">
                    <img src={logo} alt="Логотип"/>
                </a>
                <div className={Style.headerInput}>
                    <img className={Style.headerSearch} src={search} alt=""/>
                    <input
                        className={Style.input}
                        type="text"
                        value={data}
                        placeholder="Enter GitHub username"
                        onChange={e => handleInputChange(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;