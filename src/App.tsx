import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    //Logics from counter//:

    const [counterValue, setCounterValue] = useState<number>(0)          //This is global state of counter
    const [max, setMax] = useState<number>(5);                           //Максимальное число
    const [start, setStart] = useState<number>(0)                        //Стартовое число


    //State of disable
    const [disableBtn, setDisableBtn] = useState(false)


    // const [temporaryMaxNum, setTemporaryMaxNum] = useState(0)           //Стейт максимального числа для дисплея
    const [errorMax, setErrorMax] = useState<string>('')                //Стейт ошибок для дисплея

    const incBtnHandler = () => {                           //inc counter
        setCounterValue(num => num + 1);
        // maxiValue();
    }

    const resetCountHandler = () => {
        setCounterValue(start)                                          //Reset counter
        setDisableBtn(false)
        console.log('RESET')
    }

    const maxiValue = () => {                                           //Проверка на max число
        if (counterValue === max) {                                     //Проверяю со стартовым числом
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    }

    useEffect(() => {                                           //Что делает?
        if (counterValue) {
            maxiValue()
        }
    }, [counterValue]);

    const newMaxValueHandler = (maxValue: number) => {
        setCounterValue(maxValue)
    }

    const setCountHandler = () => {                                     //Установить стартовое число

    }


    const setErrorDisplayHandler = (errTitle: string) => {                  //Ошибка для дисплея
        setErrorMax(errTitle)
        console.log('Я APP Ошибку из settings принял:' + errorMax)
    }

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

                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
            />
        </div>
    );
}

export default App;
