import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addProductQuantity, deleteProductQuantity } from 'reducers/cartSlice'
import './ProductCard.scss';

interface ProductCardProps {
    product?: {
        imageName?: string,
        productName?: string,
        productPrice?: number,
        productId?: number,
    };
}

const ProductCard: React.FunctionComponent<ProductCardProps> = (props) => {
    const cartState = useSelector((state?: any) => state.cart)
    const { selectedProducts } = cartState;
    const dispatch = useDispatch()
    const { product = {} } = props;
    const { imageName, productName, productPrice, productId } = product;
    const selectedProductDetails = selectedProducts.length > 0 ? selectedProducts.find((product?: any) => product.productId === productId) : {};
    const { quantity = "" } = selectedProductDetails || {};
    return (
        <div className="product-card-container">
            <div className="product-content">
                <img src={require(`assets/images/${imageName}`)} className="product-card-image" alt="Denim Jeans" />
                <div className="product-name">{productName}</div>
                <div className="product-price">&#8377;{productPrice}</div>
            </div>
            {quantity ?
                <div className="added-product-btn-container">
                    <div className="delete-product-btn" onClick={() => dispatch(deleteProductQuantity(productId))}>
                        -
                    </div>
                    <div className="quantity-count">
                        {quantity}
                    </div>
                    <div className="add-product-btn" onClick={() => dispatch(addProductQuantity(productId))}>
                        +
                    </div>
                </div> :
                <button className="add-to-cart" onClick={() => dispatch(addProductQuantity(productId))}>
                    Add to Cart
                </button>}
        </div>
    );
}
export default ProductCard;