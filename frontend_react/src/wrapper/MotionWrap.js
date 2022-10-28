import React from 'react';
import { motion } from 'framer-motion';

//  Convert MotionWrap to a Higher Order Component (HOC)
const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
            // Slowly animate in
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    );
};

export default MotionWrap;