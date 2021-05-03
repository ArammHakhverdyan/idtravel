import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { storageRef } from '../../config/config';



const Description = () => {
    const classes = useStyles();
    const [url, setUrl] = useState(["", "", ""])


    useEffect(() => {
        const a = storageRef.child('Images/description/sevanLake.jpg')
        const b = storageRef.child('Images/description/apricot.jpg')
        const c = storageRef.child('Images/description/pic.jpg')

        const images = [a, b, c]

        images.map(function (item, index) {
            item.getDownloadURL().then((downloadURL) => {
                setUrl((old) => {
                    const newSt = [...old];
                    newSt[index] = downloadURL;
                    return newSt;
                });
            }).catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        break;
                    default: {
                        return
                    }
                }
            })
        })
    }, [])



    return (

        <div className="pages">
            <div className="img-container">
                <img className="img" src={url[0]} key={0} alt='' />,
            <div className="text-container">
                    <h2>Find your perfect place to have a rest</h2>
                    <p>Experience pure serenity and see the Milky Way at night at Armenia's Sevan Lake</p>
                    <Button className={classes.loginBtn} fullWidth={false} variant="contained" component={Link} to="/tours">Tours</Button>
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
                <img className="img" src={url[1]} key={1} alt='' />,
            </div>
            <div className="cover">
                <h2>Find all of these in one place</h2>
                <img className="about-img" src={url[2]} key={2} alt='' />
            </div>
        </div>

    )
}


export default Description


const useStyles = makeStyles({
    loginBtn: {
        backgroundColor: "#94c93d",
        color: "#fff",
        margin: "5px",
        '&:hover': {
            backgroundColor: "#8cc927",
        }
    }
})
