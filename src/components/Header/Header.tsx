import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.scss';

interface HeaderProps {
    isNavigationOptions?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const navigate = useNavigate();
    const cartState = useSelector((state?: any) => state.cart);
    const { selectedProducts } = cartState;
    let totalQuantity: any = 0;
    selectedProducts.forEach((product: any) => {
        totalQuantity = totalQuantity + product.quantity;
    });
    const handleLogout = () => {
        sessionStorage.removeItem("userInfo");
        navigate("/login");
    }
    const isLoggedIn = sessionStorage.getItem("userInfo");
    return (
        <div className="header-container">
            <div className="title-container">
                <div className="title">
                    Cafe Point
                </div>
           
                <span style={{ color: '#ffffff', fontSize: '20px', marginBottom: '2px', marginRight: '4px' }}>
                    {/* <i className="fa-solid fa-bowl-rice"></i> */}
                    <i className="fa-solid fa-mug-hot"></i>
                </span>
            </div>
            {props.isNavigationOptions &&
                <div className="navigation-options">
                    <div className="navigation-style">
                        <NavLink to="/">
                            <span style={{ color: '#ffffff', fontSize: '20px', marginRight: '4px' }}>
                                <i className="fa-sharp fa-solid fa-house"></i>
                            </span>
                        </NavLink>
                    </div>
                    <div className="navigation-style">
                        <NavLink to="/cart">
                            <span style={{ color: '#ffffff', fontSize: '20px', marginRight: '4px' }}>
                                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            </span>
                            {!!totalQuantity && <span className="notification-style">
                                {totalQuantity}
                            </span>}
                        </NavLink>
                    </div>
                    {isLoggedIn ?
                        <React.Fragment>
                            <div className="navigation-style">
                                <NavLink to="/profile">
                                    <span style={{ color: '#ffffff', fontSize: '20px', marginRight: '4px' }}>
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                </NavLink>
                            </div>
                            <div className="navigation-style" onClick={handleLogout}>
                                <span style={{ color: '#ffffff', fontSize: '20px', marginRight: '4px' }}>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </span>
                            </div>
                        </React.Fragment> :
                        <div className="navigation-style">
                            <NavLink to="/login">
                                <span style={{ color: '#ffffff', fontSize: '20px', marginRight: '4px' }}>
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                </span>
                            </NavLink>
                        </div>
                    }
                </div>
            }
        </div>
    );
}
export default Header;