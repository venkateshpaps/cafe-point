import React from "react";
import CartItemCard from "components/CartItemCard/CartItemCard";
import emptyCart from "assets/images/empty_cart.png";
import "./Cart.scss";
import { useSelector } from 'react-redux'

function Cart() {
    const cartState = useSelector((state?: any) => state.cart)
    const {selectedProducts, cartAmount } = cartState;
   
    return (
        <React.Fragment>
            {selectedProducts.length ? <div className="cart-page-container">
                <div className="cart-product-list">
                    {selectedProducts.map((product?: any, index?: number)=> <CartItemCard key={`cart-item-card-container-${index}`} product={product} />)}
                </div>
                <div className="cart-action-container">
                    <div className="cart-total-cost">
                        Pay: &#8377;{cartAmount}
                    </div>
                    {/* <button className="">
                        Proceed
                    </button> */}
                </div>
            </div> :
            <div className="empty-cart-page-container" style={{ height: window.innerHeight }}>
                <img src={emptyCart} alt="empty_cart" className="empty-cart-img" />
            </div>}
        </React.Fragment>
    );
}
export default Cart;