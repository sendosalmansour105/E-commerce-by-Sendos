import React from 'react'
import { Link } from 'react-router-dom'


const data = {
    productItems: [
      {
        id: "1",
        title: "Bed",
       number:2,
        image: "images/catigory/bed.png",
      },
      {
        id: "2",
        title: "tools",
        number:12,
        image: "images/catigory/kitchentool.png",
      },
      {
        id: "3",
        title: "Vase",
        number:3,
        image: "images/catigory/vase.png",
      },
      {
        id: "4",
        title: "Sofa",
        number:23,
        image: "images/catigory/sofa.png",
      },
      {
        id: "5",
        title: "Clock",
        number:12,
        image: "images/catigory/clock.png",
      },
      {
        id: "6",
        title: "Tv",
        number:6,
        image: "images/catigory/tv.png",
      },
      {
        id: "7",
        title: "Electrical tools",
        number:2,
        image: "images/catigory/washing1.png",
      },
      {
        id: "8",
        title: "Tables",
        number:2,
        image: "images/catigory/table.png",
      },

    ],
  };

const CatigoriesCards = () => {
    return (
        <>
          {data?.productItems?.map((productItem) => (
            <Link key={productItem.id} className='catigories-content d-flex  align-items-center gap-30'>
                <div>
                    <h6>{productItem.title}</h6>
                    <p>{productItem.number} items</p>
                </div>
                <img src={productItem.image} />
            </Link>
          ))}
        </>
    )
}

export default CatigoriesCards