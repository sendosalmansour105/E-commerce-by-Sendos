import React from 'react'

const data = {
    productItems: [
        {
            id: "1",
            title: "He was an expert but not in a discipline",
            price: 24,
            brand:"mily",
            type:"bed",
            Avilible:"yes",
            size: "S",
            image: "images/catigory/bed.png",
        },
        {
            id: "2",
            title: "All he wanted was a candy bar.",
            price: 24,
            brand:"edxs",
            type:"kitchen tools",
            Avilible:"yes",
            size: "3",
            image: "images/catigory/kitchentool.png",
        },
        {
            id: "3",
            title: "Hopes and dreams",
            price: 24,
            brand:"xsvf",
            type:"vase",
            Avilible:"no",
            size: "S",
            image: "images/catigory/vase.png",
        },
        {
            id: "4",
            title: "Dave wasn't exactly sure",
            price: 24,
            brand:"ikfrt",
            type:"sofa",
            Avilible:"yes",
            size: "M",
            image: "images/catigory/sofa.png",
        },


    ],
};
const CompareCard = () => {
    return (
        <>
            {data?.productItems?.map((compareItem) => (
                <div className="col-3 mb-3">
                    <div className="compare-product-card position-relative ">
                        <img src="images/cross.svg" alt="" className="position-absolute cross img-fluid" />
                        <div className="compare-product-image">
                            <img src={compareItem.image} alt="" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'>
                                {compareItem.title}
                            </h5>
                            <h6 className='price mb-3'>$ {compareItem.price}</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand :</h5>
                                    <p>{compareItem.brand}</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type :</h5>
                                    <p>{compareItem.type}</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability :</h5>
                                    <p>{compareItem.Avilible}</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Size  :</h5>
                                    <p>{compareItem.size}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
        </>
    )
}

export default CompareCard