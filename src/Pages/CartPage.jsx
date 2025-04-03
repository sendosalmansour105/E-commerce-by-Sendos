import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from '../ForReducers/CartSlice';
const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.weight * item.quantity, 0);

    const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    };
    const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    };


    return (
        <>
            <Meta title={'My Cart'} />
            <BreadCrumb title='Cart' />
            <div className="cart-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mb-5">
                            <button className='remove-all' onClick={handleClearCart} >remove all </button>
                        </div>
                      
                        {cartItems.map(item => (
                            <div className=" col-6 mb-3" key={item.id}>
                                <Link className='product-card position-relative'>
                                    <div className="wishlist-icon position-absolute">
                                        <button
                                            className='add-to-remove'
                                            onClick={() => handleRemoveItem(item.id)}
                                        // Disable button if product is in disabledProducts
                                        >
                                            <img src="images/cross.svg" alt="" className="cross img-fluid" />
                                        </button>
                                    </div>
                                    <div className='col-6'>
                                        <img src={`images/all/s1 (${item.id}).png`} alt="" className='img-fluid m-3' />
                                    </div>
                                    <div className="card-body product-details">

                                        <h6 className='brand'>{item.firstName}</h6>
                                        <div className='d-block'>
                                            <h5 className='product-title card-title'>{item.lastName}</h5>
                                        </div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            // edit={false}
                                            activeColor="#ffd700" />
                                        <p className="price">$ {item.weight}</p>
                                        <div className="quantity-controls d-flex justify-content-between">
                                            <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                            <span style={{color:"gray"}}><h4>{item.quantity}</h4> </span>
                                            <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                    <div className="action-bar position-absolute">
                                        <div className="d-flex flex-column gap-15">
                                            <Link><img src="images/cart.svg" alt="fa" /></Link>
                                            <Link><img src="images/eye.svg" alt="fa" /></Link>
                                            <Link><img src="images/share.svg" alt="fa" /></Link>
                                        </div>
                                    </div>
                                </Link>


                            </div>
                        ))}
                        
                    </div>
                    <div className='col-12 d-flex justify-content-center mb-5 mt-5'>{totalAmount ? <h3>The total amount is <span style={{color:"#febd69" , backgroundColor:"white" ,border:"1px solid" ,borderRadius:"10px", padding:"6px"}}>{totalAmount}</span>  $</h3> : ''}</div>
                </div>
            </div>
        </>
    )
}

export default CartPage