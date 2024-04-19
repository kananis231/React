import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date()); 

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    return (
        <div className="clock-container">
            <h1>{time.toLocaleTimeString()}</h1> 
        </div>
    );
};

export default DigitalClock;
