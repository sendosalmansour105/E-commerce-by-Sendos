import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { NavLink, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";


const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cf5d49e8-92f5-4640-bced-58054c1f2d01");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <Meta title={'Contact'} />
      <BreadCrumb title='Contact' />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26241.072879219126!2d36.711450994369166!3d34.70179721679906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230f0f4434405b%3A0xfa9b38adea3eed26!2sWadi%20Ath-Thahab%2C%20Homs%E2%80%8E%2C%20Syria!5e0!3m2!1sen!2s!4v1740321719584!5m2!1sen!2s"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-content d-flex justify-content-between">
                <div className='col-6'>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form onSubmit={onSubmit}>
                    <h6 >Contact us</h6>
                    <div className='input-box'>
                      <input type='text' className='field' placeholder='ENTER YOUR NAME' name='name' required />
                    </div>
                    <div className='input-box'>
                      <input type='email' className='field' placeholder='ENTER YOUR EMAIL' name='email' required />
                    </div>
                    <div className='input-box'>
                      <textarea className='field mess' placeholder='ENTER YOUR MESSAGE' name='message' required></textarea>
                    </div>
                    <button type='submit' className='button'>SEND MESSAGE</button>
                  </form>

                </div>
                <div className='col-6'>
                  <h3 className="contact-title mb-4">Git in touch with us</h3>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0' >alHadara, Homs, street 33</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <Link href='tel:+963 123456789' >+963 123456789</Link>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <Link href='mailto:sendosalmansour48@gmail.com' >HomeEcommerce123@gmail.com
                      </Link>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0 '>Monday - Friday 10 AM - 8 PM</p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact