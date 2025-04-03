import React from 'react'
import Marquee from "react-fast-marquee";
const data = {
    productItems: [
      {
        id: "1",
        image: "images/marqueBrand/s1.png",
      },
      {
        id: "2",
        image: "images/marqueBrand/s2.png",
      },
      {
        id: "3",
        image: "images/marqueBrand/s3.png",
      },
      {
        id: "4",
        image: "images/marqueBrand/s4.png",
      },
      {
        id: "5",
        image: "images/marqueBrand/s5.png",
      },
      {
        id: "6",
        image: "images/marqueBrand/s6.png",
      },
      {
        id: "7",
        image: "images/marqueBrand/s7.png",
      },

    ],
  };
const MarqueBrand = () => {
  return (
    <>
     <Marquee className='d-flex'>

     {data?.productItems?.map((productItem) => (
                 <div className='mx-4 w-25'key={productItem.id}>
                    <img src={productItem.image}/>
                 </div>
     ))}
                </Marquee>
    </>
  )
}

export default MarqueBrand