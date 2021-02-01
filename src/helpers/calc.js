export function calcSubPrice(item) {
    let subPrice = item.product.count * item.product.price;
    return subPrice;
}

export function calcTotalPrice(cart) {
    let totalPrice = 0;
    cart.products.forEach((element) => {
        totalPrice += element.subPrice;
    });
    return totalPrice;
}
