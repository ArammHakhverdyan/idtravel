import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import Description from '../info/description';
import "firebase/storage";
import { storageRef } from "../../../src/config/config"


export default Home;


function Home() {
    const [urlArr, setUrlArr] = useState([]);

    useEffect(() => {
        const displayImage = (images) => {
            return images.getDownloadURL().then(function (url) {
                setUrlArr((old) => [...old, url]);
            }).catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        break
                    default:
                        return
                }
            })
        }
        storageRef.child('/Images/carouselImg').listAll().then(function (result) {
            result.items.forEach(function (imageRef) {
                displayImage(imageRef)
            })
        }).catch((error) => {
            switch (error.code) {
                case 'storage/object-not-found':
                    break;
                default: {
                    return
                }
            }
        })
    }, [])

    return (
        <>
            <Carousel>
                {urlArr.map((url, i) => <Item key={i} item={{ img: url }} />)}
            </Carousel>
            <div>
                <Description />
            </div>
        </>
    )
}

function Item(props) {
    return (
        <div>
            <img className="carouselItemImg" alt="places" src={props.item.img} />
            <p>{props.item.description}</p>
        </div>
    )
}
