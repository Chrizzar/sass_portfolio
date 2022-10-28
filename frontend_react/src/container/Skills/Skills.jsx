import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    // Run once at the start when our component loads
    useEffect(() => {
        // Query data from Sanity
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        // Use client to fetch the data and then that is going to return a promise
        // Once we get the data, set it to our state
        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                {/* Loop over the skills */}
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Loop over the experiences */}
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    "app__whitebg"
);