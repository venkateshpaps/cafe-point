const calculateProductQuantityAmount = (product?: any) => {
    const productQuantityPrice = product.productPrice * product.quantity;
    return productQuantityPrice;
}

const calculateCartTotalAmount = (productsList?: any) => {
    let finalAmount = 0;
    productsList.forEach((product: any) => {
        const productQuantityPrice = product.productPrice * product.quantity;
        finalAmount = finalAmount + productQuantityPrice;
    });
    return finalAmount;
}

export {
    calculateProductQuantityAmount,
    calculateCartTotalAmount
};