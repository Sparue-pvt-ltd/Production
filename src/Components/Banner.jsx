import React from 'react'
import './ComponentsStyles/Banner.css'

const Banner = () => {

    return (
        <div style={{position: 'relative', overflow: "hidden"}}>
            <div style={{zIndex: "-1"}}  id="flipHeader" className={'header-flip-next'}></div>
            <div className="flip-header-container">
                <span  className="flip-header-heading"></span>
                <h6  className="flip-header-sub mt-2 mb-4">Automated, simple, and affordable to everyone. Get started building your cool digital stuff right now</h6>
                <div className="d-flex">
                    <button style={{marginLeft: '5%'}} className="btn-flip-header" type="button">Learn more</button>
                    <a href="#" className="mt-auto mb-auto flip-header-link">Watch works</a>
                </div>
            </div>
        </div>
        
        
    )
}

export default Banner
