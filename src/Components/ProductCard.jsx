import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";


// for wishlist products...........
import { useDispatch } from 'react-redux';
import { addItemToMyFavourite } from '../ForReducers/MyFavouriteSlice';
// for cart.....................
import { addItemToCart } from '../ForReducers/CartSlice';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const ProductCard = () => {
        // for wishlist products...........
        const dispatch = useDispatch();
        const [disabledProducts, setDisabledProducts] = useState([]);
    
        const handleAddToMyFavourite = productItem => {
            dispatch(addItemToMyFavourite(productItem));
            setDisabledProducts([...disabledProducts, productItem.id]); // Mark the product as disabled
        };
       // for cart ...........................
           const handleAddToCart = productItem => {
               dispatch(addItemToCart(productItem));
               setDisabledProducts([...disabledProducts, productItem.id]); // Mark the product as disabled
             };

            //for Products and search.............................................................
            const [apiProducts, setApiProducts] = useState([])
            // initialize the loading state as true
            const [loading, setLoading] = useState(true)
            // initialize the error state as null
            const [error, setError] = useState(null)
            const [searchItem, setSearchItem] = useState('')
            const [filteredProducts, setFilteredProducts] = useState([])
            useEffect(() => {
                fetch('https://dummyjson.com/users')
                    .then(response => response.json())
                    .then(data => {
                        setApiProducts(data.users)
                        setFilteredProducts(data.users)
                    })
                    .catch(err => {
                        console.log(err)
                        // update the error state
                        setError(err)
                    })
                    .finally(() => {
                        // wether we sucessfully get the users or not, 
                        // we update the loading state
                        setLoading(false)
                    })
            }, [])
    return (
        <>
          


            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >

                <div className='col-12 d-flex justify-content-between'>
                    {filteredProducts.map((productItem) => (
                        <SwiperSlide>
                            <div className="card " key={productItem.id}>
                                <Link className='product-card position-relative'>
                                    <div className="wishlist-icon position-absolute">

                                        <button
                                            className={`add-to-love ${disabledProducts.includes(productItem.id) ? 'disabled' : ''}`}
                                            onClick={() => handleAddToMyFavourite(productItem)}
                                            disabled={disabledProducts.includes(productItem.id)} // Disable button if product is in disabledProducts
                                        >
                                            <img src="images/favorite1.svg" alt="" />
                                        </button>
                                    </div>
                                    <div className="card-img-top product-image">
                                   
                                        <img src={`images/all/s1 (${productItem.id}).png`} alt="" className='img-fluid m-3' />

                                    </div>
                                    <div className="card-body product-details">

                                        <h6 className='brand'>{productItem.firstName}</h6>
                                        <div className='d-block'>
                                            <h5 className='product-title card-title'>{productItem.lastName}</h5>
                                        </div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            // edit={false}
                                            activeColor="#ffd700" />
                                        <p className="price">$ {productItem.weight}</p>
                                    </div>
                                    <div className="action-bar position-absolute">
                                        <div className="d-flex flex-column gap-15">
                                        <button
                                                    className={`add-to-love ${disabledProducts.includes(productItem.id) ? 'disabled' : ''}`}
                                                    onClick={() => handleAddToCart(productItem)}
                                                    disabled={disabledProducts.includes(productItem.id)} // Disable button if product is in disabledProducts
                                                >
                                          <img src="images/cart.svg" alt="fa" /></button>
                                            <Link><img src="images/eye.svg" alt="fa" /></Link>
                                            <Link><img src="images/share.svg" alt="fa" /></Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </SwiperSlide>
                    ))}

                </div>
            </Swiper>
        </>
    )
}

export default ProductCard