import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over 100$</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Hotline:<Link className='text-white' href='tel:+123456789'>+963 123456789</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 ">
     
          <div className="row align-items-center me-3">
            <div className="col-2 ">
              <h3>
                <Link className='text-white ms-3' to='/'>Home corner.</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input type="text"
                  className="form-control py-2"
                  placeholder="Search product here.."
                  aria-label="Search product here.."
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to='/compare'>
                    <img src='images/compare.svg' alt='' />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to='/wishlist'>
                    <img src='images/favorite.svg' alt='' />
                    <p className='mb-0'>Favorite <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to="/login">
                    <img src='images/login.svg' alt='' />
                    <p className='mb-0'>Log in <br /> my account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to='/cart'>
                    <img src='images/cart.svg' alt='' />
                    <div className='d-flex flex-column gap-10'>
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'> $ 100</p>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>
       
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img  src='images/circles.svg' alt=''/>
                  <span >Shop Categories</span>  
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className='text-white' to='/'>Home</NavLink>
                    <NavLink className='text-white' to='/store'>Our store</NavLink>
                    <NavLink className='text-white' to='/blogs'>Blogs</NavLink>
                    <NavLink className='text-white' to='/contact'>Contact</NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header














