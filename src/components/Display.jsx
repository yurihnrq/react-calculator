import React from 'react';

// CSS
import './css/Display.css';

const Display = props => {
    
    return (
        <section className="Display">
            <div className="exp-display">
                { props.expression }
            </div>
            <div className="main-display">
                { props.displayValue }
            </div>
        </section>
    )

}

export default Display;
