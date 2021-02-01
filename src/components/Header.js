import React, { useContext, useState } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { productContext } from "./context/productContextProvider";
import InputBase from "@material-ui/core/InputBase";

const Header = () => {
    const { productsCountInCart, handleSearch } = useContext(productContext);
    const [toggle, setToggle] = useState(false);

    const menuToggle = () => {
        setToggle(!toggle);
    };
    const handleF = (val) => {
        handleSearch(val);
    };

    return (
        <header>
            <div className="menu" onClick={menuToggle}>
                <img src={Menu} alt="" width="20" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">Магазин</Link>
                </h1>
            </div>

            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/product">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/contact">Контакты</Link>
                    </li>

                    <li>
                        <Link to="/login">Вход</Link>
                    </li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} alt="" width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>{productsCountInCart}</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="" width="20" />
                    </Link>
                </div>
            </nav>
            <div>
                <InputBase
                    onChange={(e) => handleF(e.target.value)}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                />
            </div>
        </header>
    );
};

export default Header;
