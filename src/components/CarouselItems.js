import React from 'react'


function CarouselItem(props) {

    return (
        <div className="carouselItem">
            <img className="carouselItemImg" alt="photo" src={props.src} />
        </div>
    )
}


export default CarouselItem