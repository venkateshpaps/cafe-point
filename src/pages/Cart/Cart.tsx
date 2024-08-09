import React from "react";
import CartItemCard from "components/CartItemCard/CartItemCard";
import emptyCart from "assets/images/empty_cart.png";
import YouTubeVideo from "components/YouTubeVideo/YouTubeVideo";
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
            <React.Fragment>
                <div className="empty-cart-page-container" style={{ height: '300px' }}>
                    <img src={emptyCart} alt="empty_cart" className="empty-cart-img" />
                </div>
                <YouTubeVideo videoId={'_piim-Z34Ow'}/>
            </React.Fragment>}
        </React.Fragment>
    );
}
export default Cart;


// Web Socket Example

// import React, { useEffect, useState } from "react";

// const Cart = ({ ...props }) => {
// //   const [varThatNeedHooks, setVar] = useState({});
//   const [serverMessage, setServerMessage] = useState("");
//   const [webSocketReady, setWebSocketReady] = useState(false);

//   const [webSocket, setWebSocket] = useState(new WebSocket("ws://127.0.0.1:3000/ws"));

//   useEffect(() => {
//     webSocket.onopen = (event) => {
//       setWebSocketReady(true);
//       console.log('test');
//     };

//     webSocket.onmessage = function (event) {
//       setServerMessage(JSON.parse(event.data));
//       console.log('test1');
//     };

//     webSocket.onclose = function (event) {
//       setWebSocketReady(false);
//       console.log('test 2');
//       setTimeout(() => {
//         console.log('test reconnect');
//         setWebSocket(new WebSocket("http://localhost:3001"));
//       }, 1000);
//     };

//     webSocket.onerror = function (err) {
//         console.log('test 4');
//     //   console.log('Socket encountered error: ', err.message, 'Closing socket');
//       setWebSocketReady(false);
//       webSocket.close();
//     };

//     return () => {
//        webSocket.close();
//     };
//   }, [webSocket]);

//   if (!webSocketReady) {
//     return <h1>Could not connect to server retrying ...</h1>;
//   } else if (serverMessage === "") {
//     return <h1>Waiting for message from server ...</h1>;
//   } else {
//     // do stuff with varThatNeedHooks
//   }

//   return (<>
//   {JSON.stringify(serverMessage)}
//   </>);
// }

// export default Cart;