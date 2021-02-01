import React, { useEffect, useContext, useState } from "react";
import { productContext } from "../context/productContextProvider";
import { Link } from "react-router-dom";

import "../css/Home.css";
import Carousel from "react-bootstrap/Carousel";

const Products = () => {
    const { getProductList, products, addProductToCart } = useContext(
        productContext
    );

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div>
            <div className=" slider container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src="https://183930.selcdn.ru/media/uploads/2018/12/17/news.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src="https://birka.kg/wp-content/uploads/2020/06/letnyaya-rasprodaja-v-magazinah-birka-bishkek-1.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src="https://i.pinimg.com/originals/a4/16/33/a4163392cd67053fac49db28b1cfd074.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <h1 className="pt-5 container">Новые товары:</h1>
            <div id="product" className="pt-5">
                {products &&
                    products.map((product) => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>
                                        {product.title}
                                    </Link>
                                </h3>
                                <span>{product.price} сом</span>
                                <p>{product.description}</p>
                                <button
                                    onClick={() => addProductToCart(product)}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;
