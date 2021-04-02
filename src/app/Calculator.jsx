import React, { useEffect, useState, useCallback } from 'react';

//CSS
import './Calculator.css';

// Components
import Display from '../components/Display';
import Button from '../components/Button';

const Calculator = _ => {
    
    // Calculator display values
    const [display, setDisplay] = useState({main: '', expression: ''});

    // Handle all values entered through keyboard or calculator buttons
    const addDigit = useCallback(n => {
        const operators = ['+', '-', '×', '÷'];
        // Copy display values to handle them
        const displayHandler = {...display};

        if (n === 'DEL') {
              displayHandler.main = '';
              displayHandler.expression = '';
        } else {
            if (n !== "=") {
                displayHandler.expression = displayHandler.expression + n;
                if (operators.indexOf(n) > -1) {
                    displayHandler.main = '';
                    
                } else 
                    displayHandler.main = displayHandler.main + n;
            } else {
                
            }
        }
        setDisplay({...displayHandler});
        console.log(display);
    }, [display]);
    
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

    // Handle component changes after render
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
