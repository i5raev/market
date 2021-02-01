import React, { useReducer } from "react";
import axios from "axios";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calc";

export const productContext = React.createContext();

const INIT_STATE = {
    products: null,
    productsCountInCart: JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).products.length
        : 0,
    productDetail: null,
    cartData: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCT_LIST":
            return { ...state, products: action.paylod };

        case "GET_CART":
            return {
                ...state,
                cartData: action.paylod,
                productsCountInCart: action.payload.products.length,
            };

        case "SEARCH_POST":
            return {
                ...state,
                products: action.payload,
            };

        case "GET_DETAILS":
            return { ...state, productDetail: action.payload };

        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getProductList = async () => {
        const { data } = await axios("http://localhost:8000/products");

        dispatch({
            type: "GET_PRODUCT_LIST",
            paylod: data,
        });
    };

    function addProductToCart(item) {
        let cart = getAllCart();
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }

        let newProduct = {
            product: item,
            count: 1,
            subPrice: 0,
        };
        newProduct.subPrice = calcSubPrice(newProduct);

        let obj = cart.products.find((elem) => elem.product._id === item._id);
        if (obj) {
            cart.products = cart.products.filter(
                (elem) => elem.product._id !== item._id
            );
        } else {
            cart.products.push(newProduct);
        }
        cart.totalPrice = calcTotalPrice(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function checkItemInCart(id) {
        let cart = getAllCart();
        if (!cart) return false;
        let newCart = cart.products.filter((item) => item.product.id === id);
        return newCart.length ? true : false;
    }

    function countProductsInCart() {
        let cart = getAllCart();
        if (!cart) return;
        dispatch({
            type: "COUNT_PRODUCTS_IN_CARD",
            payload: cart.products.length,
        });
    }

    function getCart() {
        let cart = getAllCart();
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
        console.log(cart);
    }

    function changeCountInCart(count, id) {
        let cart = getAllCart();
        cart.products = cart.products.map((item) => {
            if (item.product.id === id) {
                item.count = count;
                item.subPrice = calcSubPrice(item);
            }
            return item;
        });
        cart.totalPrice = calcTotalPrice(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function decrease(item) {
        let cart = getAllCart();
        cart.products = cart.products.map((obj) => {
            if (obj.product._id === item._id) {
                obj.product.count--;
                obj.subPrice = calcSubPrice(obj);
            }
            return obj;
        });
        cart.totalPrice = calcTotalPrice(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }

    function getAllCart() {
        return JSON.parse(localStorage.getItem("cart"));
    }
    function increase(item) {
        let cart = getAllCart();

        cart.products = cart.products.map((obj) => {
            if (obj.product._id === item._id) {
                obj.product.count++;
                obj.subPrice = calcSubPrice(obj);
            }
            return obj;
        });
        cart.totalPrice = calcTotalPrice(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }
    async function handleSearch(val) {
        try {
            let { data } = await axios(
                `http://localhost:8000/products?q=${val}`
            );
            dispatch({
                type: "SEARCH_POST",
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function getDetails(id) {
        try {
            let { data } = await axios(`http://localhost:8000/products/${id}`);
            console.log(data);
            dispatch({
                type: "GET_DETAILS",
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <productContext.Provider
            value={{
                getProductList,
                products: state.products,
                productsCountInCart: state.productsCountInCart,
                addProductToCart,
                decrease,
                increase,
                productDetail: state.productDetail,
                getDetails,
                handleSearch,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;
