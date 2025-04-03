import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img className='sendletter-image' src='images/sendletter.svg' />
                <h3 className='mb-0 text-white'>Sing up for News letter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Homs: alHadara,Homs <br/> street 33 <br/>
                  pinCode: 131314
                </address>
                <Link href="tel:+123456789" className="mt-3 text-white d-block mb-1">
                  +963 123456789</Link>
                  <Link href="mailto: HomeEcommerce123@gmail.com" className="mt-2 text-white d-block mb-0">
                  HomeEcommerce123@gmail.com</Link>
                  <div className="social-icons d-flex align-items-center gap-30 mt-4">
                    <Link href='/'>
                     <FaLinkedin className='text-white fs-5'/>
                    </Link>
                    <Link href='/'>
                     <CiFacebook className='text-white fs-5'/>
                    </Link>
                    <Link href='/'>
                     <FaInstagram className='text-white fs-5'/>
                    </Link>
                    <Link href='/'>
                     <FaYoutube className='text-white fs-5'/>
                    </Link>


                  </div>
              </div>
            </div >
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to=''>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1' to=''>Refund Policy</Link>
                <Link className='text-white py-2 mb-1' to=''>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1' to=''>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1' to=''>Blogs</Link>
              </div>
            </div >
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to=''>About Us</Link>
                <Link className='text-white py-2 mb-1' to=''>Faq</Link>
                <Link className='text-white py-2 mb-1' to=''>Contact</Link>
                
              </div>
            </div >
            <div className="col-2">
              <h4 className='text-white mb-4' >Quick links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to='/store'>OUR STORE</Link>
                <Link className='text-white py-2 mb-1' to='/blogs'>BLOGS</Link>
                <Link className='text-white py-2 mb-1' to='/contact'>CONTACT US</Link>
               
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; powered by Sendos</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer