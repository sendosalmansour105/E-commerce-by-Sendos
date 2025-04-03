import React from 'react'
import { Link } from 'react-router-dom'

const data = {
    productItems: [
      {
        id: "1",
        title: "Vase",
        description:"kifrc frnkn iefnkn fnce cnkifrc frnkn iefnkn fnce cnkifrc frnkn iefnkn fnce cn",
       image: "images/BlogCard/card1.jpg",
       link:"/about",
       date:"1 JAN 2022",
      },
      {
        id: "2",
        title: "tools",
        description:"kifrc frnkn iefnkn fnce cn frnkn iefnkn fnce",
        image: "images/BlogCard/card2.jpg",
        link:"/about",
        date:"20 DEC 2023",
      },
      {
        id: "3",
        title: "Bed",
        description:"kifrc frnkn iefnkn fnce  frnkn iefnkn fncecn",
        image: "images/BlogCard/card3.jpg",
        link:"/about",
        date:"13 APR 2025",
      },
      {
        id: "4",
        title: "Bed",
        description:"kifrc frnkn iefn frnkn iefnkn fnce frnkn iefnkn fncekn fnce cn",
        image: "images/BlogCard/card4.jpg",
        link:"/about",
        date:"1 DEC 2020",
      },
     
    ],
  };


const BlogCard = () => {
    return (
        <>
        {data?.productItems?.map((productItem) => (
            <div className="col-3" key={productItem.id}>
                <div className="blog-card">
                    <div className="card-image">
                        <img src={`images/BlogCard/card (${productItem.id}).jpg`}  className='img-fluid'/>
                    </div>
                    <div className="blog-content">
                        <p className='date'>{productItem.date}</p>
                        <h5 className="title">{productItem.title}</h5>
                        <p className="desc">{productItem.description}</p>
                        <Link to={productItem.link} className='button'>Read More</Link>
                    </div>
                </div>
            </div>
        ))}

        </>
    )
}

export default BlogCard