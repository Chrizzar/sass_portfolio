import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => (
    <div className="app__social">
        <a href="https://www.linkedin.com/in/christian-sass-hansen-639571188/" target="_blank" rel="noreferrer"><div>
            <BsLinkedin />
        </div></a>
        {/* <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div> */}
    </div>
);

export default SocialMedia;