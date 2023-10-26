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


    const incBtnHandler = () => {                                                   //inc counter
        setCounterValue(num => num + 1);
        if (counterValue === max - 1) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    }

    const resetCountHandler = () => {
        setCounterValue(start)                                                      //Reset counter
        setDisableBtn(false)
        console.log('RESET')
    }

    // const setMaxHandler = (valueForInput: number) => {                          //Сетаю новое макс число в стейт
    //     setMax(valueForInput)
    // }

    // const SetValueInStorageHandler = () => {                                    //Сетаю новое число в storage
    //     let itemForStorage = JSON.stringify(max)
    //     localStorage.setItem('maxCounterValue', itemForStorage)
    //     console.log('Установил в storage ' + itemForStorage)
    // }

    //Тут будет логика для сохранения числа в инпут
    useEffect(() => {                                                   //Достаю число из storage для инпут при перезагрузке
        let numFromStorage = localStorage.getItem('maxCounterValue')
        if (numFromStorage) {
            let valueForInputFromStorage = JSON.parse(numFromStorage)
            setMax(valueForInputFromStorage)
            console.log(`Достал число из Storage ` + valueForInputFromStorage)
        }
    }, []);

    const setSettings = () => {
        // let itemForStorage = JSON.stringify(max)
        localStorage.setItem('maxValue', `${max}`)
        localStorage.setItem('startValue', `${start}`)
        setCounterValue(start)
        // console.log('Установил в storage ')
    }

    return (
        <div className="App">
            <Settings
                // setValueStorageHandler={SetValueInStorageHandler}
                // setMax={setMaxHandler}                                     //Max число это функция!!!
                setMax={setMax}                                     //Max число это функция!!!
                // maxValueForInput={max}
                max={max}
                setStart={setStart}
                start={start}
                setSettings={setSettings}
            />
            <Counter
                currentValue={counterValue}                                 //Число в стейте которое каунтим
                startValue={start}
                disabled={disableBtn}
                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
                maxValue={max}                                              //Максимальное число-ограничение
            />
        </div>
    );
}

export default App;
