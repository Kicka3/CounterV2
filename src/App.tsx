import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    //Logics from counter//:

    const [number, setNumber] = useState<number>(0);                //This is global state of counter
    const [maxValue, setMaxValue] = useState<boolean>(false);       //This is value for disabled btns

    const setNewNumber = (number: number) => {
        setNumber(number)
    }
    const maxiValue = () => {
        if (number >= 4) {
            setMaxValue(true);
            console.log('WARNING!5');
        }
    }

    const setCountHandler = () => {         //Стартовое число

    }

    //-------------------------

    return (
        <div className="App">
            <Settings
                setCount={setCountHandler}
            />
            <Counter
                number={number}                     //Число в стейте которое каунтим
                setNumber={setNewNumber}            //Сетаем в стейт который каунтим
                maxValue={maxValue}                 //Максимальное число-ограничение
                setMaxValue={setMaxValue}           //Сетаем максимальное число-ограничение
                maxiValue={maxiValue}               //Функция-блокиратор (определяет макс число)
            />
        </div>
    );
}

export default App;
