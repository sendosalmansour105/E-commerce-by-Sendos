import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Card from '../Components/Card'
import Services from '../Components/Services'
import CatigoriesCards from '../Components/CatigoriesCards'
import MarqueBrand from '../Components/MarqueBrand'
import BlogCard from '../Components/BlogCard'
import ProductCard from '../Components/ProductCard'
import SpecialCard from '../Components/SpecialCard'


const Home = () => {
  return (
    <>

      <section className='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-panner position-relative ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/images/Home1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/Home2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="/images/Home3.jpg" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap ">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Services />
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catigories d-flex justify-content-between align-items-center">
                <CatigoriesCards />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <h3 className='section-title'>Feature colections</h3>
              <h6 className='align-items-center'>other ..</h6>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <h3 className='section-title'>Special colections</h3>
            </div>
            
              <div className="d-flex flex-wrap  ">
                <SpecialCard />
              </div>


          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <MarqueBrand />
              </div>
            </div>
          </div>
        </div>

      </section>
        

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-title'>our Latest blogs</h3>
            </div>
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home