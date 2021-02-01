import React, { useEffect, useContext, useState } from "react";
import { productContext } from "../context/productContextProvider";
import { Link } from "react-router-dom";
import "../css/Products.css";
import PaginationComp from "./Pagination";

const Products = () => {
    const { getProductList, products, addProductToCart } = useContext(
        productContext
    );
    const [currentProd, setCurrentProd] = useState([]);
    const [category, setCategory] = useState("all");
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(9999999999999);

    const handleFilterChange = (e, filterType) => {
        //changes state
        switch (filterType) {
            case "category":
                setCategory(e.target.value);
                break;
            case "min":
                setMin(e.target.value);
                break;
            case "max":
                setMax(e.target.value);
                break;
            default:
                break;
        }
    };

    const [state, setState] = React.useState("");

    useEffect(() => {
        let filteredProducts = currentProd;

        filteredProducts =
            products &&
            products.filter((item) => {
                let filter = category;
                if (category == "all") {
                    filter = item.category;
                }
                if (
                    item.category == filter &&
                    item.price > min &&
                    item.price < max
                )
                    return item;
            });

        console.log(filteredProducts);
        setCurrentProd(filteredProducts);
    }, [category, min, max]);

    useEffect(() => {
        setCurrentProd(products);
    }, [products]);

    useEffect(() => {
        getProductList();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost =
        currentProd && currentProd.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (num) => setCurrentPage(num);

    return (
        <div>
            <div className="container pt-5 pb-5">
                <form className="filter d-flex justify-content-center">
                    <select
                        name="category"
                        id="category"
                        onChange={(e) => handleFilterChange(e, "category")}
                    >
                        {" "}
                        {/*listens for when input field is changed*/}
                        <option value="all">Все</option>
                        <option value="jacket">Куртки</option>
                        <option value="jeans">Джинсы</option>
                        <option value="pant">Штаны</option>
                        <option value="dress">Платья</option>
                        <option value="shoe">Обувь</option>
                        <option value="sock">Носки</option>
                        <option value="swimwear">Летняя одежда</option>
                        <option value="handbag">Сумки</option>
                        <option value="formalwear">Классическая одежда</option>
                        <option value="sweater">Свитера</option>
                        <option value="hat">Шляпы</option>
                        <option value="baby">Детская одежда</option>
                    </select>
                    <input
                        type="number"
                        name="minPrice"
                        onChange={(e) => handleFilterChange(e, "min")}
                        placeholder="Min Price"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        onChange={(e) => handleFilterChange(e, "max")}
                        placeholder="Max Price"
                    />
                </form>
            </div>
            <div id="product">
                {currentProd &&
                    currentPost.map((product) => (
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
            <div style={{ display: "flex", justifyContent: "center" }}>
                {currentProd && (
                    <PaginationComp
                        totalPage={currentProd.length}
                        postPerPage={postPerPage}
                        changePage={changePage}
                    />
                )}
            </div>
        </div>
    );
};

export default Products;
