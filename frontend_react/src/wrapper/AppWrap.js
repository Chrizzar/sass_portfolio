import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

//  Convert AppWrap to a Higher Order Component (HOC)
//  I.e. we are wrapping the sections (e.g. about, work, skills, etc.) in the code below,
//  and giving them an id, so we can scroll to it, giving it classnames, giving it social media icons,
//  and giving it copyright information.
const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            {/* Render Social Media */}
            <SocialMedia />

            <div className="app__wrapper app__flex">
                {/* Render Components */}
                <Component />

                <div className="copyright">
                    <p className="p-text">&copy; 2022-{new Date().getFullYear()} Chrisitan</p>
                    <p className="p-text">All rights reserved</p>
                    {/* <a className="p-text credit" href="https://www.freepik.com/photos/internet-marketing">Internet marketing photo created by creativeart - www.freepik.com</a>
                    <a className="p-text credit" href="https://www.freepik.com/vectors/web-services">Web services vector created by pikisuperstar - www.freepik.com</a> */}
                </div>
            </div>
            {/* Render the navigation dots */}
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap