import { useState, useEffect } from "react";

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

    const handleClick = () => {
        setTimeOn(!timeOn);
    }

    const handleReset = () => {
        setTime(0);
        setTimeOn(false);
    }

    useEffect(() => {
        let myTimer = null;
        if (timeOn) {
            myTimer = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(myTimer);
    }, [timeOn]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(time)}</p>
            <input type="button" name="Start" value={timeOn ? "Stop" : "Start"} onClick={handleClick} />
            <input type="button" name="Reset" value="Reset" onClick={handleReset} />
        </div>
    )
}

export default Stopwatch;