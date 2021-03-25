import React from 'react';

// CSS
import './css/Button.css';

const Button = props => {

    return (
        <button 
            className={`Button ${props.class}`} 
            onClick={ _ => { props.click(props.value) } }
        >
            { props.value }
        </button>
    )

}

export default Button;
