// Create simple react functional component
import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    );
}

// TO RUN:
// Run: npm start in \frontend_react
// Run: sanity start in \backend_sanity

// TO DEPLOY:
// Stop: npm start, by ctl + c
// Stop: sanity start, by ctl + c
// Run: npm run build in \frontend_react each time when uploading to netlify
// Find in build folder in frontend_react, right click it and reveal in file explorer
// Drag and drop the build folder into netlify

export default App;