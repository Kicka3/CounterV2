import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    //Logics from counter//:

    const [currentCounterNumber, setCurrentCounterNumber] = useState<number>(0);        //This is global state of counter
    const [maxValue, setMaxValue] = useState<boolean>(false);                           //This is value for disabled btns


    //Временный стейт для макс числа
    const [temporaryMaxNum, setTemporaryMaxNum] = useState(0)           //Стейт максимального числа для дисплея
    const [errorMax, setErrorMax] = useState<string>('')                //Стейт ошибок для дисплея
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

    const setErrorDisplayHandler = (errTitle: string) => {
        setErrorMax(errTitle)
        console.log('Я APP Ошибку из settings принял:' + errorMax)
    }

    // const
    //     (errorMax)
    //

    return (
        <div className="App">
            <Settings
                newMaxValue={newMaxValueHandler}
                setCount={setCountHandler}
                setErrorDisplay={setErrorDisplayHandler}
            />
            <Counter
                currentCountNumber={currentCounterNumber}                   //Число в стейте которое каунтим
                setNumber={setNewNumber}                                    //Сетаем в стейт который каунтим
                maxValue={maxValue}                                         //Максимальное число-ограничение
                setMaxValue={setMaxValue}                                   //Сетаем максимальное число-ограничение
                maxiValue={maxiValue}                                       //Функция-блокиратор (определяет макс число)
                // setError={setErrorHandler}
                errorMax={errorMax}
            />
        </div>
    );
}

export default App;
