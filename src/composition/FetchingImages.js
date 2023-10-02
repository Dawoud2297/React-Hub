import React from 'react'

const FetchingImages = ({ image }) => {
    return (
        <div>
            <img alt='image3' src={`images/${image}`}/>
        </div>
    )
}

export default FetchingImages
