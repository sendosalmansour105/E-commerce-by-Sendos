import React from 'react'
import { useState, useEffect } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom';
import { Loader, Image, Segment, } from 'semantic-ui-react'
// for wishlist products...........
import { useDispatch } from 'react-redux';
import { addItemToMyFavourite } from '../ForReducers/MyFavouriteSlice';
import { addItemToCart } from '../ForReducers/CartSlice';
import ReactStars from "react-rating-stars-component";



const OurStore = () => {
    // for wishlist products...........
    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]);

    const handleAddToMyFavourite = user => {
        dispatch(addItemToMyFavourite(user));
        setDisabledProducts([...disabledProducts, user.id]); // Mark the product as disabled
    };
    // for cart products................
    const handleAddToCart = user => {
        dispatch(addItemToCart(user));
        setDisabledProducts([...disabledProducts, user.id]); // Mark the product as disabled
      };
    
    // for columns................................................................
    const [grid, setGrid] = useState(2);
    const gridSetter = (i) => {
        setGrid(i);
    }
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
    // for search........................................................
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        // const filteredItems = users.filter((user) =>
        //     user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        const filteredItems = apiProducts.filter((user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filteredItems);
    }


    return (
        <>
        
            <Meta title={'Our Store'} />
            <BreadCrumb title='OUR STORE' />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="filter-sort-grid mb-4">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='align-items-center mb-0'><img className='search-icon' src="images/search.svg" alt="" /></p>
                                        <input
                                            className='search-input'
                                            type="text"
                                            value={searchItem}
                                            onChange={handleInputChange}
                                            placeholder='search By Brand'
                                        />

                                    </div>
                                    <div className="d-flex align-items-center gap-10 grid">
                                        <img src='images/menu5.svg'
                                            className='d-block img-fluid'
                                            onClick={() => { setGrid(2) }} />

                                        <img src='images/menu3.svg'
                                            className='d-block img-fluid'
                                            onClick={() => { setGrid(3) }} />
                                        <img src='images/menu2.svg'
                                            className='d-block img-fluid'
                                            onClick={() => { setGrid(4) }} />

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='store-grid col-12 d-flex justify-content-center flex-wrap ' >
                            {/* if the data is loading, show a proper message */}
                            {loading &&
                                <Segment>
                                    <Loader active />
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' className='d-block img-fluid' />
                                </Segment>
                            }
                            {/* if there's an error, show a proper message */}
                            {error && <p>There was an error loading the users</p>}
                            {/* if it finished loading, render the items */}
                            {!loading && !error && filteredProducts.length === 0
                                ? <p>No users found</p>
                                :
                                <> {filteredProducts.map(user =>

                                    <div className={`card col-${grid}`} key={user.id}>
                                        <Link className='product-card position-relative' >
                                            <div className="wishlist-icon position-absolute">
                                                <button
                                                    className={`add-to-love ${disabledProducts.includes(user.id) ? 'disabled' : ''}`}
                                                    onClick={() => handleAddToMyFavourite(user)}
                                                    disabled={disabledProducts.includes(user.id)} // Disable button if product is in disabledProducts
                                                >
                                                    <img src="images/favorite1.svg" alt="" />
                                                </button>
                                            </div>
                                            <div >
                                                <img src={`images/all/s1 (${user.id}).png`} alt="" className='img-fluid m-3' />

                                            </div>
                                            <div className="card-body product-details">

                                                <h6 className='brand'>{user.firstName}</h6>
                                                <div className='d-block'>
                                                    <h5 className='product-title card-title'>{user.lastName}</h5>
                                                </div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    // edit={false}
                                                    activeColor="#ffd700" />
                                                <p className="price">$ {user.weight}</p>
                                            </div>
                                            <div className="action-bar position-absolute">
                                                <div className="d-flex flex-column gap-15">
                                                <button
                                                    className={`add-to-love ${disabledProducts.includes(user.id) ? 'disabled' : ''}`}
                                                    onClick={() => handleAddToCart(user)}
                                                    disabled={disabledProducts.includes(user.id)} // Disable button if product is in disabledProducts
                                                >
                                                    <img src="images/cart.svg" alt="fa" />
                                                    </button>
                                                    <Link><img src="images/eye.svg" alt="fa" /></Link>
                                                    <Link><img src="images/share.svg" alt="fa" /></Link>
                                                </div>
                                            </div>
                                        </Link>


                                    </div>


                                )}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
       
        </>
       
    )
}

export default OurStore