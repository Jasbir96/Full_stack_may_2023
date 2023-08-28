import React, { useState, useEffect } from 'react';

const ResizeAwareComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Set up a window resize event listener
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        console.log("Listener added");
        window.addEventListener('resize', handleResize);
        return () => {
            console.log(" cleanup Listener added");
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div>
            <h1>Resize Aware Component</h1>
            <p>Window width: {windowWidth}px</p>
        </div>
    );
};

export default ResizeAwareComponent;
