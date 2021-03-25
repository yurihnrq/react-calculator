import React from 'react';

// CSS
import './css/Display.css';

const Display = props => {
    
    return (
        <section className="Display">
            <div className="exp-display">
                Here's the math expression
            </div>
            <div className="main-display">
                Here's what the user is digiting
            </div>
        </section>
    )

}

export default Display;
