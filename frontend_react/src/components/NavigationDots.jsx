import React from 'react';

// Accept one prop called 'active', which is going to tell us on which section we currently are on.
const NavigationDots = ({ active }) => (
    // Sections are an array of strings.
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            /*  Return a list items, which has a key so it is unique.
                Each dot represents a section, that can be active or not.
            */
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                // If the item is active, then set background color to blue-ish, otherwise we can simply have an empty object {}
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots
