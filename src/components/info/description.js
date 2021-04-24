import React from 'react';
import img from '../img/sevanLake.jpg';
import img1 from '../img/apricot.jpg';
import pic from '../img/pic.jpg';



const Description = () => {
    return (

        <div className="pages">
            <div className="img-container">
                <img className="img" src={img} alt='' />,
            <div className="text-container">
                    <h2>Find your perfect place to have a rest</h2>
                    <p>Experience pure serenity and see the Milky Way at night at Armenia's Sevan Lake</p>
                </div>
            </div>
            <div className="img-container">
                <div className="text-container">
                    <h2>A Taste you can't forget </h2>
                    <p>Armenian apricots not only differ with their taste, but with their unique coloring as well.
                    It is not exactly orange or yellow. Its color is called apricot,
                    which is a mix of yellow, orange and pink colors. In ancient times Armenian kings
                    and queens used special, festive dresses which were called “tsirani” as they had an apricot color.
                     The name “tsirani” came from the word “tsiran”, which means apricot.</p>
                </div>
                <img className="img" src={img1} alt='' />,
            </div>
            <div className="cover">
                <h2>Find all of these in one place</h2>
                <img className="about-img" src={pic} alt='' />
            </div>
        </div>

    )
}


export default Description