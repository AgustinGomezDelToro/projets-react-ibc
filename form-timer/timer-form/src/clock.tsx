import React, { useState, useEffect } from 'react';
import './clock.css';

export interface ClockAttributes {
    startTime?: number;
    endTime?: number;
}

function Clock(attributes: ClockAttributes) {
    const [currentTime, setCurrentTime] = useState(attributes.startTime ?? 0);

    useEffect(() => {
        if (attributes.endTime && currentTime >= attributes.endTime) {
            return;
        }
        const timer = setTimeout(() => {
            setCurrentTime(currentTime + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);

    return <div>Clock: {currentTime}</div>;
}

export default Clock;
