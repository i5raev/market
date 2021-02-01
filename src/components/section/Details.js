import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
// import Colors from './Colors'
import "../css/Details.css";

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
    };

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter((item) => {
                return item._id === this.props.match.params.id;
            });
            this.setState({ product: data });
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state;
        const { addCart } = this.context;
        return (
            <>
                {product.map((item) => (
                    <div className="details" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>{item.price} сом</span>
                            </div>
                            {/* <Colors colors={item.colors}/> */}
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link
                                to="/cart"
                                className="cart"
                                onClick={() => addCart(item._id)}
                            >
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default Details;

// import React, { useContext, useEffect } from "react";
// import { productContext } from "../context/productContextProvider";
// import { Link, useHistory } from "react-router-dom";
// import Colors from "./Colors";
// import "../css/Details.css";

// const Details = (props) => {
//     const { getDetails, productDetail, addCart } = useContext(productContext);

//     const history = useHistory();

//     useEffect(() => {
//         getDetails(props.match.params.id);
//     }, [props.match.params.id]);

//     return (
//         <>
//             {productDetail &&
//                 productDetail.map((item) => (
//                     <div className="details" key={item._id}>
//                         <img src={item.src} alt="" />
//                         <div className="box">
//                             <div className="row">
//                                 <h2>{item.title}</h2>
//                                 <span>{item.price} сом</span>
//                             </div>
//                             {/* <Colors colors={item.colors}/> */}
//                             <p>{item.description}</p>
//                             <p>{item.content}</p>
//                             <Link
//                                 to="/cart"
//                                 className="cart"
//                                 onClick={() => addCart(item._id)}
//                             >
//                                 Add to cart
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//         </>
//     );
// };

// export default Details;
