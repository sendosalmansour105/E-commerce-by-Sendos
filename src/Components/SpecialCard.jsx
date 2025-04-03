import React from 'react'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import ReactStars from "react-rating-stars-component";

import { addItemToCart } from '../ForReducers/CartSlice';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div>

            <div style={{ fontSize: '20px' }}>
                <span> {days}</span> : <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
            </div>

        </div>
    );
}

const SpecialCard = () => {

    const time = new Date();

    time.setSeconds(time.getSeconds() + 356762);
    // for cart ...........................
    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]);
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
            {filteredProducts.map((productItem) => (
                <>{
                    productItem.id < 7 ?
                        <div className="card special-product-card col-4" key={productItem.id} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`images/all/s1 (${productItem.id}).png`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className='brand'>{productItem.firstName}</h5>
                                        <h6 className="card-title ">{productItem.lastName}</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            // edit={false}
                                            activeColor="#ffd700" />
                                        <p className='price'>
                                            <span className='red-p'>${productItem.weight}</span>&nbsp; <strike>${productItem.height}</strike>
                                        </p>

                                        <div>
                                            <MyTimer expiryTimestamp={time} />
                                        </div>
                                        <div className="prop-count my-3">
                                            <p>Product :</p>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: productItem.width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <button
                                            className={`button ${disabledProducts.includes(productItem.id) ? 'disabled' : ''}`}
                                            onClick={() => handleAddToCart(productItem)}
                                            disabled={disabledProducts.includes(productItem.id)} // Disable button if product is in disabledProducts
                                        >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}</>

            ))}
        </>
    )
}

export default SpecialCard