import React from 'react';

// Components
import Display from '../components/Display';
import Keys from '../components/Keys';

const Calculator = _ => {

    return (
        <main className="Calculator">
            <Display/>
            <Keys/>
        </main>
    )

}

export default Calculator;
