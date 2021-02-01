// import React, { Component } from 'react'
// import {DataContext} from '../Context'
// import {Link} from 'react-router-dom'

// import '../css/Details.css'
// import '../css/Cart.css'
// export class Cart extends Component {
//     static contextType = DataContext;

//     componentDidMount(){
//         this.context.getTotal();
//     }

//     render() {
//         const {cart,increase,reduction,removeProduct,total} = this.context;
//         if(cart.length === 0){
//             return (
//             <h2 style={{textAlign:"center"}}>Корзина пуста</h2>

//             )
//         }else{
//             return (
//                 <>
//                     {
//                         cart.map(item =>(
//                             <div className="details cart" key={item._id}>
//                                 <img src={item.src} alt=""/>
//                                 <div className="box">
//                                     <div className="row">
//                                         <h2>{item.title}</h2>
//                                         <span>${item.price * item.count}</span>
//                                     </div>

//                                     <p>{item.description}</p>
//                                     <p>{item.content}</p>
//                                     <div className="amount">
//                                         <button className="count" onClick={() => reduction(item._id)}> - </button>
//                                         <span>{item.count}</span>
//                                         <button className="count" onClick={() => increase(item._id)}> + </button>
//                                     </div>
//                                 </div>
//                                 <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
//                             </div>
//                         ))
//                     }
//                     <div className="total">
//                         <Link to="/payment">Payment</Link>
//                         <h3>В итоге: {total} сом</h3>
//                     </div>
//                 </>
//                 )
//             }
//         }
// }

// export default Cart

import React, { useContext } from "react";
import { productContext } from "../context/productContextProvider";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "../css/Cart.css";

function handleToken(token, addresses) {}

const Cart = () => {
    const { addProductToCart, decrease, increase } = useContext(productContext);

    let cart = JSON.parse(localStorage.getItem("cart"));

    return (
        <>
            {/* <h1>hello</h1> */}
            {cart.products.map(({ product }) => (
                <div className="detailss " key={product._id}>
                    <div>
                        <img src={product.src} alt="" />
                    </div>
                    <div className="box">
                        <div className="row">
                            <h2>{product.title}</h2>
                            <span>{product.price * product.count} сом</span>
                        </div>

                        <p>{product.description}</p>
                        <div className="amount">
                            <button
                                className="count"
                                onClick={() => decrease(product)}
                            >
                                {" "}
                                -{" "}
                            </button>
                            <span>{product.count}</span>
                            <button
                                className="count"
                                onClick={() => increase(product)}
                            >
                                {" "}
                                +{" "}
                            </button>
                        </div>
                    </div>
                    <div
                        className="delete"
                        onClick={() => addProductToCart(product)}
                    >
                        X
                    </div>
                </div>
            ))}
            <div className="total container">
                {/* <Link to="/payment">Payment</Link> */}
                <h3>В итоге: {cart.totalPrice} сом</h3>
                <StripeCheckout
                    stripeKey="pk_test_51I9RUuLJzYauJjqfMLmPSiq63AoJFCyC5Gf0Lcn0pgumk7hUBMOGD4E2fPA8PSauWrkzBhvRW3RVJ2tlXbuHgiRt001vh3WXLd"
                    token={handleToken}
                />
            </div>
        </>
    );
};

export default Cart;
