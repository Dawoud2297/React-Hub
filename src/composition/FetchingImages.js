import React from 'react'

const FetchingImages = ({ image }) => {
    return (
        <div>
            {/* First Resource */}
            {/* <img alt='image0' src='logo192.png'/> */}
            {/* Second Resource */}
            {/* <img alt='image1' src='/images/lifecycle_reactjs.jpg'/> */}
            {/* <img alt='image2' src={'images/' + image} /> */}
            <img alt='image3' src={`images/${image}`}/>
        </div>
    )
}

export default FetchingImages
