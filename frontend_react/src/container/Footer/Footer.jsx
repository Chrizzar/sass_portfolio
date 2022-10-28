import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // Process of the structuring
    const { name, email, message } = formData;

    // Accepts a key-press event and updates the state
    const handleChangeInput = (e) => {
        // So we getting the input that we are currently typing in, and we want to get the name of it and the value of it
        const { name, value } = e.target;

        // With those values, we can dynamically set the form data.
        // Dynamically change the name to be equal to a specific value.
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        // Use sanity client to upload the data from our application to the server
        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true); // This is going to help show a succes message
            })
    }

    return (
        <>
            {/* <h2 className="head-text">Take a coffe & chat with me</h2> */}
            <h2 className="head-text">Contact Me</h2>

            {/* Contact section */}
            <div className="app__footer-cards">
                {/* Email icon and email link */}
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:sasshansen@gmail.com" className="p-text">sasshansen@gmail.com</a>
                </div>

                {/* Telephone number icon and telephone number link */}
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +45 31 41 45 16" className="p-text">+45 31 41 45 16</a>
                </div>
            </div>

            {/* If the form is not submitted, show the form below: */ }
            {!isFormSubmitted ? (
                /* Contact form */
                <div className="app__footer-form app__flex">
                    {/* Name */ }
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                    </div>

                    {/* Email */ }
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                    </div>

                    {/* Message */ }
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>

                    {/* If loading is true, show 'Sending', else show 'Send Message' */ }
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            /* Else show a succes message */
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    "app__whitebg"
);