import React, { useState } from 'react';

//CSS
import './Calculator.css';

// Components
import Display from '../components/Display';
import Button from '../components/Button';

const Calculator = _ => {
    
    const operators = ['+', '-', '÷', '×'];
    const [display, setDisplay] = useState({
        main: '',
        expression: ''
    });
    // const [stack, setStack] = useState([]);

    // Cleans calculator display
    const cleanDisplay = target => {
        const displayHandler={...display};

        // 1 -> main; 0 -> all
        if (target === 1)
            displayHandler.main = '';
        else if (target === 0) {
            displayHandler.main = '';
            displayHandler.expression = '';
        } else
            console.log("cleadDisplay() => ERROR: incorrect parameter!");

        setDisplay({...displayHandler});
    }

    // const calculate = (num1, num2, op) => {
    //     if (op === '+')
    //         return num1 + num2;
    //     if (op === '-')
    //         return num1 - num2;
    //     if (op === '÷')
    //         return num1 / num2;
    //     if (op === '×')
    //         return num1 * num2;
    // }


    const checkOperator = _ => {
        if (display.expression.length() === 0)
            console.log("teste");
    }

    // Handle all inputed values
    const addDigit = n => {
        if (n === 'DEL') {
            cleanDisplay(0);
            return;
        }

        // Copy display values to modify
        const displayHandler = {...display};

        if (n !== "=")
            displayHandler.expression = displayHandler.expression + n;

        if (!isNaN(n))
            displayHandler.main = displayHandler.main + n;
        else
            displayHandler.main = '';

        setDisplay({...displayHandler});
    }

    return (
        <main className="Calculator">
            <Display main={ display.main } expression={ display.expression }/>
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
