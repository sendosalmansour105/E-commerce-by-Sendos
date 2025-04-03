import React from 'react'

const data = {
    productItems: [
      {
        id: "1",
        title: "Free Shipping",
        subtitile:'from all orders over $100 ',
        image: "images/delivery.svg",
      },
      {
        id: "2",
        title: "Affordable Prices",
        subtitile:'Get factory direct price',
        image: "images/sale.svg",
      },
      {
        id: "3",
        title: "Daily Surprise Offers",
        subtitile:'Save up 25% off',
        image: "images/gift.svg",
      },
      {
        id: "4",
        title: "Support 24/7",
        subtitile:'shop with an expert',
        image: "images/headphone.svg",
      },
      {
        id: "5",
        title: "Secure Payments",
        subtitile:'100% protected payment ',
        image: "images/card-em.svg",
      },

    ],
  };
const Services = () => {
    return (
        <>
            <div className="services d-flex align-items-center justify-content-between">
                {data?.productItems?.map((productItem) => (
                    <div key={productItem.id} className='services-content d-flex align-items-center gap-15'>
                        <img src={productItem.image} />
                        <div>
                            <h6>{productItem.title}</h6>
                            <p className='mb-0 '>{productItem.subtitile}</p>
                        </div>
                    </div>
                )
                )
                }
            </div>
        </>
    )
}

export default Services