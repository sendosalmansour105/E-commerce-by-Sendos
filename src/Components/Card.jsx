import React from 'react'
// import { useState, useEffect } from "react";
import data from "../Data/card";
// const UseFetch = (url) => {
//     const [data, setData] = useState();
//     useEffect(() => {
//         fetch(url).then((res) => res.json())
//             .then((data) => setData(data))
//     }, [])
//     return [data]
// }

const Card = () => {
    // const [items, setItems] = useState(['React JS', 'Vue JS', 'Angular JS', 'Vanilla JS']);
    // const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
    return (
        <>
           
                
                {data?.productItems?.map((productItem) => (
                    <div className="small-panner position-relative p-2" key={productItem.id}>
                        <div >
                            <img  src={productItem.image} className='img-fluid rounded-3' />
                            <div className="small-panner-content position-absolute">
                                <h5>{productItem.subtitile}</h5>
                                <p>From ${productItem.price} or $10/mon <br />
                                    for 20 mon</p>
                            </div>

                        </div>
                        </div>
                    )
                )
                }
               
        

        </>
    );
}

export default Card