import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            
            <div className="app__navbar-logo">
                {/* <img src={images.logo} alt="logo" /> */}
                <h1>My Portfolio</h1>
            </div>
            {/*  loop through all the elements we need to have in our navigation bar */}
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    /*  Return a list item, which has a key so it is unique */
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        {/* If the item is clicked, close the navigation bar */}
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                /*  Return a list item, which has a key so it is unique */
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>

        </nav> // end nav
    )
}

export default Navbar