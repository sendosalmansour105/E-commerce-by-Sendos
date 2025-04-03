import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { Loader, Image, Segment, } from 'semantic-ui-react'
import ReactStars from "react-rating-stars-component";

const Blogs = () => {
        //for Products and search.............................
        const [apiBlogs, setApiBlogs] = useState([])
         const [loading, setLoading] = useState(true)
             const [error, setError] = useState(null)
               const [filteredBlogs, setFilteredBlogs] = useState([])
           useEffect(() => {
                fetch('https://dummyjson.com/posts')
                    .then(response => response.json())
                    .then(data => {
                        setApiBlogs(data.posts)
                        setFilteredBlogs(data.posts)
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
     <Meta title={'Blogs'} />
     <BreadCrumb title='Blogs' />
     <div className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
          {loading &&
                                <Segment>
                                    <Loader active />
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' className='d-block img-fluid' />
                                </Segment>
                            }
                            {/* if there's an error, show a proper message */}
                            {error && <p>There was an error loading the users</p>}
                            {/* if it finished loading, render the items */}
                            {!loading && !error && filteredBlogs.length === 0
                                ? <p>No users found</p>
                                :
          <> {apiBlogs.map(B =>

            <div className=" col-6 mb-3" key={B.id}>
            <div className="BolgCard blog-card">
                <div className="card-image">
                    <img src={`images/BlogCard/card (${B.id}).jpg`} className='BlogCardimg img-fluid'/>
                </div>
                <div className="blog-content">
                    <p className='date'>Likes : {B.reactions.likes} Dislikes : {B.reactions.dislikes}</p>
                    <h5 className="title">{B.title}</h5>
                    <p className="descBlog">{B.body}</p>
                    <p className='date'>Views :{B.views}</p>
                    <Link to={B.link} className='button'>Read More</Link>
                </div>
            </div>
        </div>


)}
</>}
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs