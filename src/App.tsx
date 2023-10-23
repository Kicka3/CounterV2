import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    //SetMaxValueInStorage
    const [maxValueForCounter, setMaxValueForCounter] = useState<number>(0);

    const setMaximumValue = (maxValue: number) => {
        setMaxValueForCounter(maxValue)
    }
    //---------------------------

    //Logics from counter:
    //This is state of counter
    const [number, setNumber] = useState<number>(0);
    //This is value for disabled btns
    const [maxValue, setMaxValue] = useState<boolean>(false);

    const setNewNumber = (number: number) => {
        setNumber(number)
    }
    const maxiValue = () => {
        if (number >= 4) {
            setMaxValue(true);
            console.log('WARNING!5');
        }
    }
    //-------------------------

    return (
        <div className="App">
            <Settings
                maximumValue={setMaximumValue}
            />
            <Counter
                number={number}
                setNumber={setNewNumber}
                setMaxValue={setMaxValue}
                maxValue={maxValue}
                maxiValue={maxiValue}
            />
        </div>
    );
}

export default App;
