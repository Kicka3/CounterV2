import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    //Logics from counter//:

    const [currentCounterNumber, setCurrentCounterNumber] = useState<number>(0);        //This is global state of counter
    const [maxValue, setMaxValue] = useState<boolean>(false);                           //This is value for disabled btns

    //Временный стейт для макс числа
    const [temporaryMaxNum, setTemporaryMaxNum] = useState(0)
    const [errorMax, setErrorMax] = useState<string | null>(null)
    const setNewNumber = (number: number) => {
        setCurrentCounterNumber(number)
    }

    const maxiValue = () => {                                           //Проверка на max число
        if (currentCounterNumber === (temporaryMaxNum - 1)) {
            setMaxValue(true);
        }
    }

    useEffect(() => {
        if (temporaryMaxNum) {
            maxiValue()
        }
    }, [temporaryMaxNum]);

    const newMaxValueHandler = (maxValue: number) => {
        setTemporaryMaxNum(maxValue)
    }

    const setCountHandler = () => {         //Стартовое число

    }

    const setErrorHandler = (errTitle: string) => {
        setErrorMax(errTitle)
    }

    //-------------------------

    return (
        <div className="App">
            <Settings
                setError={setErrorHandler}
                newMaxValue={newMaxValueHandler}
                setCount={setCountHandler}
            />
            <Counter
                currentCountNumber={currentCounterNumber}                   //Число в стейте которое каунтим
                setNumber={setNewNumber}                                    //Сетаем в стейт который каунтим
                maxValue={maxValue}                                         //Максимальное число-ограничение
                setMaxValue={setMaxValue}                                   //Сетаем максимальное число-ограничение
                maxiValue={maxiValue}                                       //Функция-блокиратор (определяет макс число)
                setError={setErrorHandler}

            />
        </div>
    );
}

export default App;
