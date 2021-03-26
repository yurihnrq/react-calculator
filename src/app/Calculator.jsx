import React, { useState } from 'react';

//CSS
import './Calculator.css';

// Components
import Display from '../components/Display';
import Button from '../components/Button';

const Calculator = _ => {

    const [displayValue, setDisplay] = useState( ' ' );
    const [stack, setStack]          = useState( [ ] );

    // Cleans the calculator display
    const cleanCalc = _ => {
        setDisplay('');
        setStack([]);
    }

    const calculate = (num1, num2, op) => {
        if (op === '+')
            return num1 + num2;
        if (op === '-')
            return num1 - num2;
        if (op === '÷')
            return num1 / num2;
        if (op === '×')
            return num1 * num2;
    }

    // Handle all inputed values
    const addDigit = n => {
        if (n === 'DEL') {
            cleanCalc();
            return;
        }

        // Copy stack to change its value through pop() and push()
        const stackHandler = stack;
        let num1;
        let num2;
        let op; 
        if (stackHandler.length > 0 && isNaN(stackHandler[stackHandler.length - 1])) {
            op   = stackHandler.pop()
            num1 = stackHandler.pop();
            num2 = n;

            console.log("Calc: " + num1 + op + num2);
            stackHandler.push(calculate(num1, num2, op));
            console.log("Result: " + stackHandler);   
        } else {
            stackHandler.push(n);
            console.log(stackHandler);
        }
        setStack([...stackHandler]);
    }

    return (
        <main className="Calculator">
            <Display displayValue={ displayValue } expression={ stack }/>
            <div className="button-container">
                <div className="numbers">
                    <Button class={'number'} value={ parseInt(7) }   click={addDigit} />
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
                    <Button class={'action'} value={ '-' }   click={addDigit} />
                    <Button class={'action'} value={ '+' }   click={addDigit} />
                </div>
            </div>
        </main>
    )

}

export default Calculator;
