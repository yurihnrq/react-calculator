import React, { useEffect, useState, useCallback } from 'react';

//CSS
import './Calculator.css';

// Components
import Display from '../components/Display';
import Button from '../components/Button';

// Checks if the char is a math operator
const isOperator = c => {
    const operators = ['+', '-', '×', '÷'];
    return operators.indexOf(c) > -1;
}

const Calculator = _ => {
    
    // Calculator display values
    const [display, setDisplay] = useState({main: '', expression: ''});
    // Flag to handle expression changing
    const [change, setChange]   = useState(false);

    // Handle all values entered through keyboard or calculator buttons
    const addDigit = useCallback(n => {
        // Copy display values to handle them
        const displayHandler = {...display};

        // User can't add a dot if the number already has one
        if (displayHandler.main.indexOf('.') >= 0 && n === '.')
            return;

        // If user pressed DEL the display must be cleaned
        if (n === 'DEL') {
            displayHandler.main = '';
            displayHandler.expression = '';
            setDisplay({...displayHandler});
            return;
        }

        // Handle display to change expression
        if (change) {
            if (isOperator(n)) {
                displayHandler.expression = displayHandler.main;
                displayHandler.main = '';
            } else {
                displayHandler.expression = '';
                displayHandler.main = '';
            }
            setChange(false);
        }

        // If user pressed key isn't = just add the digit to display
        if (n !== "=") {
            // If last digit typed is an operator and the current too the last digit must be substituted
            const lastIndex = displayHandler.expression.length - 1;
            if (
                (isOperator(displayHandler.expression[lastIndex])
                || displayHandler.expression[lastIndex] === '.')
                && (isOperator(n) || n === '.')
            ) {
                if (n !== displayHandler.expression[lastIndex])
                    displayHandler.expression = 
                        displayHandler.expression.substr(0, lastIndex) + n 
                        + displayHandler.expression.substr(lastIndex+1);
            } else
                displayHandler.expression = displayHandler.expression + n;

            // If an operator was typed the main display must be cleaned
            if (isOperator(n)) {
                displayHandler.main = '';
            } else {
                // Preventing the user from typing multiple points
                const lastIndex = displayHandler.main.length - 1;
                if (!(n === '.' && displayHandler.main[lastIndex] === '.'))
                    displayHandler.main = displayHandler.main + n;
            }
        // If user typed = the expression must be evaluated                    
        } else {
            let expression = displayHandler.expression;
            if (expression.indexOf('÷') > -1)
                expression = expression.replace('÷', '/');
            if (expression.indexOf('×') > -1)
                expression = expression.replace('×', '*');
            
            // eslint-disable-next-line no-eval
            const result = Math.round(eval(expression) * 100) / 100;
            displayHandler.main = result.toString();

            // The next digit must be in a new expression
            setChange(true);
        }
        
        setDisplay({...displayHandler});
    }, [display, change]);
    
    // Handle keys that calculator uses
    const handleKeyPress = useCallback(event => {
        const operatorsKeys = ['/', '*', '+', '-'];
        const { key, keyCode } = event;

        if (keyCode >= 48 && keyCode <= 57 && !isNaN(key))
            addDigit(key);
        else if (operatorsKeys.indexOf(key) > -1) {
            if (key === '*')
                addDigit('×');
            else if (key === '/')
                addDigit('÷');
            else
                addDigit(key);
        } else if (keyCode === 46)
            addDigit('DEL');
        else if (key === "=" || key === "Enter")
            addDigit('=');
    }, [addDigit]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

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
