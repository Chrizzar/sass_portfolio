import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
    // Use React and Sanity to fetch real dynamic data from a cms
    const [abouts, setAbouts] = useState([]);

    // Run once at the start when our component loads
    useEffect(() => {
        // Query data from Sanity
        const query = '*[_type == "abouts"]';

        // Use client to fetch the data and then that is going to return a promise
        client.fetch(query).then(data => setAbouts(data))
    }, []);

    return (
        // Return empty react fragment
        <>
            {/* <h2 className="head-text">I Know That <span>Good Development</span> <br /> means <span>Good Business</span></h2> */}
            <h2 className="head-text">About <span>Me</span></h2>
            
            <div className="app__profiles">
                {/* Loop over the dynamic abouts content coming from the cms */}
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>

            <a className="p-text credit" href="https://www.freepik.com/photos/internet-marketing">Internet marketing photo created by creativeart - www.freepik.com</a>
            <a className="p-text credit" href="https://www.freepik.com/vectors/web-services">Web services vector created by pikisuperstar - www.freepik.com</a>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );