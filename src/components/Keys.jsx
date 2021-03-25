import React from 'react';

// CSS
import './css/Keys.css';

const Keys = props => {
    
    return (
        <section className="Keys">
            <div className="numbers">
                <button>7</button>
                <button>8</button>
                <button>9</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>

                <button>1</button>
                <button>2</button>
                <button>3</button>

                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
            <div className="actions">
                <button>Back</button>
                <button>÷</button>
                <button>×</button>
                <button>−</button>
                <button>+</button>
            </div>
        </section>
    )

}

export default Keys;
