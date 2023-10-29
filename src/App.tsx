import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";

function App() {

    //Logics for counter//:

    const [counterValue, setCounterValue] = useState<number>(0)          //This is global state of counter
    const [max, setMax] = useState<number>(5);                           //Максимальное число
    const [start, setStart] = useState<number>(0)                        //Стартовое число

    //State of disabled
    const [disableBtn, setDisableBtn] = useState<boolean>(false)
    //State for status set btn
    const [status, setStatus] = useState(false)

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    const incBtnHandler = () => {                                                   //inc counter
        if (counterValue < max) {
            setCounterValue(num => num + 1);
        }
    }


    const resetCountHandler = () => {
        setCounterValue(start)                                                      //Reset counter
        setDisableBtn(false)
        console.log('RESET')
    }

    const setSettings = () => {                                                  //Закидываю в storage по нажатию на SET
        localStorage.setItem('maxValue', `${max}`)
        localStorage.setItem('startValue', `${start}`)
        setCounterValue(start)
        setStatus(true)
        // console.log('Установил в storage ')
    }

    //Тут будет логика для сохранения числа в инпут
    useEffect(() => {                                                   //Достаю число из storage для инпут при перезагрузке
        let maxFromStorage = localStorage.getItem('maxValue')
        if (maxFromStorage) {
            let maxValueFromStorage = JSON.parse(maxFromStorage)
            setMax(maxValueFromStorage)
            console.log(`Достал max число из Storage ` + maxValueFromStorage)
        }
        let startFromStorage = localStorage.getItem('startValue')
        if (startFromStorage) {
            let startValueFromStorage = JSON.parse(startFromStorage)
            setStart(startValueFromStorage)
            console.log(`Достал start число из Storage ` + startValueFromStorage)
        }
    }, []);

    return (
        <div className="App">
            <Settings
                setMax={setMax}                                     //Max число это функция!!!
                max={max}
                setStart={setStart}
                start={start}
                setSettings={setSettings}
                isValidMax={isValidMax}
                isValidStart={isValidStart}
                counterValue={counterValue}
                
            />
            <Counter
                currentValue={counterValue}                          //Число в стейте которое каунтим
                startValue={start}
                disabled={disableBtn}
                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
                maxValue={max}                                        //Максимальное число-ограничение
                status={status}
            />
        </div>
    );
}

export default App;
