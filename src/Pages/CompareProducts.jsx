import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import CompareCard from '../Components/CompareCard'
const CompareProducts = () => {
    return (
        <>
            <Meta title={'Compare products'} />
            <BreadCrumb title='COMPARE PRODUCTS' />
            <div className="compare-products-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <CompareCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProducts