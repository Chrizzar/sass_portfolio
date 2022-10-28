import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    // Run once at the start when our component loads
    useEffect(() => {
        // Query data from Sanity
        const query = '*[_type == "works"]';

        // Use client to fetch the data and then that is going to return a promise
        // Once we get the data, set it to our state
        client.fetch(query).then((data) => {
            setWorks(data); // SetWorks(data) is read as setWorks is = data
            setFilterWork(data);
        });
    }, []);

    // Categorize works by categories
    const handleWorkFilter = (item) => {
        // This will retrigger the shuffle animation of the cards, once we change the category
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            // Retrigger the animation of the cards
            setAnimateCard([{ y: 0, opacity: 1 }]);

            // If filter is set to all, show all works
            if (item === 'All') {
                setFilterWork(works);
            // Else show only works that match the filter
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

            {/*  Loop over all our categories */}
            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'React JS', 'Games and VR', '3D-CAD', '3D-printing', 'DIY Projects', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        // If activeFilter is our state
                        // If activeFilter === item, then add class item-active
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {/* Loop over all our portfolio-items (i.e. works) */}
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={urlFor(work.imgUrl)} alt={work.name} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                {/* Wrap our first icon, which is the view/eye icon (i.e. link to page) */}
                                <a href={work.projectLink} target="_blank" rel="noreferrer">

                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                {/* Wrap our second icon, which is the code icon (i.e. link to code) */}
                                <a href={work.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        {/* Title and description of the projects */}
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                            {/* Render tags */}
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    "app__primarybg"
);