import React, { useState } from 'react';

//CSS
import './Calculator.css';

// Components
import Display from '../components/Display';
import Button from '../components/Button';

const Calculator = _ => {

    const [displayValue, setDisplay] = useState('');
    const [stack, setStack] = useState([]);

    // When called, resolves the equation stored in the stack;
    const resolveEq = _ => {
        stack.forEach(e => {
            console.log(e);
        });
    }

    const addDigit = n => {
        if (n === "DEL") {
            console.clear();
            // DEL cleans stack and display value
            setDisplay('');
            setStack([]);
        } else if (n) {
            if (n === "=") {
                resolveEq();
            } else {
                setDisplay(displayValue + n);
                setStack(stack => [...stack, n]);
            }
        }
        
    }

    return (
        <main className="Calculator">
            <Display displayValue={ displayValue } expression={ 'Exp. value' }/>
            <div className="button-container">
                <div className="numbers">
                    <Button class={'number'} value={ 7 }   click={addDigit} />
                    <Button class={'number'} value={ 8 }   click={addDigit} />
                    <Button class={'number'} value={ 9 }   click={addDigit} />

                    <Button class={'number'} value={ 4 }   click={addDigit} />
                    <Button class={'number'} value={ 5 }   click={addDigit} />
                    <Button class={'number'} value={ 6 }   click={addDigit} />

                    <Button class={'number'} value={ 1 }   click={addDigit} />
                    <Button class={'number'} value={ 2 }   click={addDigit} />
                    <Button class={'number'} value={ 3 }   click={addDigit} />

                    <Button class={'number'} value={ 0 }   click={addDigit} />
                    <Button class={'number'} value={ '.' } click={addDigit} />
                    <Button class={'number'} value={ '=' } click={addDigit} />
                </div>
                <div className="actions">
                    <Button class={'action'} value={ 'DEL' } click={addDigit} />
                    <Button class={'action'} value={ '÷' }   click={addDigit} />
                    <Button class={'action'} value={ '×' }   click={addDigit} />
                    <Button class={'action'} value={ '−' }   click={addDigit} />
                    <Button class={'action'} value={ '+' }   click={addDigit} />
                </div>
            </div>
        </main>
    )

}

export default Calculator;
