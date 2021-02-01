import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [
            {
                _id: "1",
                title: "Куртка ",
                src:
                    "https://m.media-amazon.com/images/I/61fTX5TjAEL._UL1001_.jpg",
                description: "Lorem Ipsum is simply dummy text ",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 3500,
                colors: ["red", "black", "crimson", "teal"],
                count: 1,
                category: "jacket",
            },
            {
                _id: "2",
                title: "Носочки",
                src:
                    "https://images.vans.com/is/image/Vans/XRZHTG-HERO?$583x583$",
                description: "Lorem Ipsum is simply dummy text",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 250,
                colors: ["red", "crimson", "teal"],
                count: 1,
                category: "sock",
            },
            {
                _id: "3",
                title: "Кеды",
                src:
                    "https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg",
                description: "Lorem Ipsum is simply dummy text",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1500,
                colors: ["lightblue", "white", "crimson", "teal"],
                count: 1,
                category: "shoe",
            },
            {
                _id: "4",
                title: "Пиджак",
                src:
                    "https://yepman.ru/wp-content/uploads/2013/02/tumblr_mhuw6tAikS1qeuobqo1_1280.jpg",
                description: "Lorem Ipsum is simply dummy text",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 5000,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "formalwear",
            },
            {
                _id: "5",
                title: "Джинсы",
                src:
                    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F44%2F5d%2F445d4e58daa3995343da28f475b60ee9802cde63.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_skinny%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
                description: "Lorem Ipsum is simply dummy text",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1200,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "jeans",
            },
            {
                _id: "6",
                title: "Купальник",
                src:
                    "https://cdn.shopify.com/s/files/1/0058/2392/2247/products/Fancinating-Women-Strip-Bikini-Swimsuit-Bikini-Beachwear-Swimwear-Summer-Beach-Bathingsuit-Women-s-Swimsuits-Attractive-Biquini.jpg_640x640_7668e3b9-e2ad-4733-b885-d13498dac51a_1200x1200.jpg?v=1556315697",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 2300,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "swimwear",
            },
            {
                _id: "7",
                title: "Свитер",
                src:
                    "https://cdn.shopify.com/s/files/1/2212/1957/products/BME_SWEATER_BACK_2000x.png?v=1571590541",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1700,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "sweater",
            },
            {
                _id: "8",
                title: "Куртка",
                src:
                    "https://cdn.shopify.com/s/files/1/0017/2100/8243/products/CWJ-1_BROWN_61e80a3c-a589-43ab-89e7-1d8c69e04d25_2000x.jpg?v=1589312314",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 2500,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "jacket",
            },
            {
                _id: "9",
                title: "Платье",
                src:
                    "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1450,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "dress",
            },
            {
                _id: "10",
                title: "Кеды AIR",
                src:
                    "https://images.wbstatic.net/c516x688/new/4630000/4635078-1.jpg",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 3300,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "shoe",
            },
            {
                _id: "11",
                title: "Сумка",
                src:
                    "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/27567/255955/Nevenka-Floral-Handbags-Women-Leather-Handbag-Black-Shoulder-Bag-Large-Capacity-Crossbody-Bag-for-Girls-Purse__74527.1553331797.jpg?c=2",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 3400,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "handbag",
            },
            {
                _id: "12",
                title: "Сумка Women Max",
                src:
                    "https://images-na.ssl-images-amazon.com/images/I/41l6VFfhYAL.jpg",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 5400,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "handbag",
            },
            {
                _id: "13",
                title: "Футболка Черная",
                src:
                    "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fc4%2Ff5c4939114fcc731acfada4ebb68f1da42cad909.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1000,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "shirt",
            },
            {
                _id: "14",
                title: "Детское платье",
                src:
                    "https://images-na.ssl-images-amazon.com/images/I/61gNLt1hbeL._AC_UX385_.jpg",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 2000,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "baby",
            },
            {
                _id: "15",
                title: "Шляпа",
                src:
                    "data:image/jpeg;base64,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",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 500,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "hat",
            },
            {
                _id: "16",
                title: "Штаны",
                src:
                    "https://tierra.com/wp-content/uploads/2018/02/T1079210-dark-grey-1-800x973.jpg",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 1700,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "pant",
            },
            {
                _id: "17",
                title: "Джогеры",
                src:
                    "https://sc01.alicdn.com/kf/He1c7b33b73794bce8b6daa0730ba9d90r.jpg",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 2300,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "pant",
            },
            {
                _id: "18",
                title: "Носки зимние",
                src:
                    "https://images.unsplash.com/photo-1597843797221-e34b4a320b97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29ja3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                description: "UI/UX designing",
                content:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                price: 500,
                colors: ["orange", "black", "crimson", "teal"],
                count: 1,
                category: "sock",
            },
        ],
        cart: [],
        total: 0,
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every((item) => {
            return item._id !== id;
        });
        if (check) {
            const data = products.filter((product) => {
                return product._id === id;
            });
            this.setState({ cart: [...cart, ...data] });
        } else {
            alert("Вы уже добавили");
        }
    };

    removeProduct = (id) => {
        if (window.confirm("Вы точно хотите удалить с корзины?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1);
                }
            });
            this.setState({ cart: cart });
            this.getTotal();
        }
    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + item.price * item.count;
        }, 0);
        this.setState({ total: res });
    };

    componentDidUpdate() {
        localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
        localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
    }

    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }
    }

    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider
                value={{
                    products,
                    addCart,
                    cart,
                    reduction,
                    increase,
                    removeProduct,
                    total,
                    getTotal,
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}
