import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromMyFavourite, clearMyFavourite, } from '../ForReducers/MyFavouriteSlice'; // Assuming you have action creators for increasing and decreasing item quantity

const Wishlist = () => {
    const dispatch = useDispatch();
    const favItems = useSelector(state => state.fav.favItems);
    const handleRemoveItem = itemId => {
        dispatch(removeItemFromMyFavourite(itemId));
    };
    const handleClearMyFavourite = () => {
        dispatch(clearMyFavourite());
    };
    return (
        <>
            <Meta title={'My Favourite Products'} />
            <BreadCrumb title='MY FAVOURITE PRODUCTS' />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mb-5">
                            <button className='remove-all' onClick={handleClearMyFavourite} >remove all </button>
                        </div>
                        {favItems.map(love => (
                            <div className=" col-3" key={love.id}>
                                <Link className='product-card position-relative'>
                                    <div className="wishlist-icon position-absolute">
                                        <button
                                            className='add-to-remove'
                                            onClick={() => handleRemoveItem(love.id)}
                                        // Disable button if product is in disabledProducts
                                        >
                                            <img src="images/cross.svg" alt="" className="cross img-fluid" />
                                        </button>
                                    </div>
                                    <div >
                                        <img src={`images/all/s1 (${love.id}).png`} alt="" className='img-fluid m-3' />
                                    </div>
                                    <div className="card-body product-details">

                                        <h6 className='brand'>{love.firstName}</h6>
                                        <div className='d-block'>
                                            <h5 className='product-title card-title'>{love.lastName}</h5>
                                        </div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            // edit={false}
                                            activeColor="#ffd700" />
                                        <p className="price">$ {love.age}</p>
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
                </div>
            </div>
        </>
    )
}

export default Wishlist