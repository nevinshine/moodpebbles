import React, { useState } from 'react';
import Pond from './Pond';
import './App.css';

function App() {
    const [mood, setMood] = useState('');

    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };

    const handleDropPebble = () => {
        if (mood.trim()) {
            // Add the mood pebble to the pond
            const newPebble = { text: mood, id: Date.now() };
            setMood('');
            // Pass the new pebble to the Pond component
            pondRef.current.addPebble(newPebble);
        }
    };

    const pondRef = React.createRef();

    return (
        <div className="App">
            <div className="input-container">
                <input
                    type="text"
                    value={mood}
                    onChange={handleMoodChange}
                    placeholder="What’s your mood today in one line?"
                />
                <button onClick={handleDropPebble}>Drop Pebble</button>
            </div>
            <Pond ref={pondRef} />
        </div>
    );
}

export default App;
