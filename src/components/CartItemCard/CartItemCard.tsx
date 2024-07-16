import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProductQuantity, deleteProductQuantity, deleteCartProduct } from 'reducers/cartSlice'
import { calculateProductQuantityAmount } from 'common/Util'
import './CartItemCard.scss';

interface CartItemCardProps {
    product?: {
        imageName?: string,
        productName?: string,
        productPrice?: number,
        productId?: number,
    };
}

const CartItemCard: React.FunctionComponent<CartItemCardProps> = (props) => {
    const cartState = useSelector((state?: any) => state.cart)
    const { selectedProducts } = cartState;
    const dispatch = useDispatch()
    const { product = {} } = props;
    const { imageName, productName, productId } = product;
    // const { productPrice } = product;
    const selectedProductDetails = selectedProducts.length > 0 ? selectedProducts.find((product?: any) => product.productId === productId) : {};
    const { quantity = "" } = selectedProductDetails || {};
    return (
        <div className="cart-item-card-container">
            <div className="cart-item-main-wrapper">
                <div className="cart-item-image-container">
                    <img src={require(`assets/images/${imageName}`)} className="cart-item-image" alt="Denim Jeans" />
                </div>
                <div className="cart-item-content">
                    <div className="product-name">{productName}</div>
                    <div className="product-price">Price: &#8377;{calculateProductQuantityAmount(product)}</div>
                    <div className="btn-container">
                        <div className="delete-product-btn" onClick={() => dispatch(deleteProductQuantity(productId))}>
                            -
                        </div>
                        <div className="quantity-count">
                            {quantity}
                        </div>
                        <div className="add-product-btn" onClick={() => dispatch(addProductQuantity(productId))}>
                            +
                        </div>
                    </div>
                </div>
            </div>
            <div className="delete-button" onClick={() => { dispatch(deleteCartProduct(productId))}}>
                <span style={{ color: '#fc0505', fontSize: '24px', marginRight: '4px', cursor: 'pointer' }}>
                    <i className="fa fa-trash"></i>
                </span>
            </div>
        </div>
    );
}
export default CartItemCard;