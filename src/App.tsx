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

    }

    const resetCountHandler = () => {
        setCounterValue(start)                                                      //Reset counter
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

    //-----------------------------------

    const setMaxValueHandler = () => {
        // console.log('Новое максимальное число:' + maxValue)
        // let maxValueForStorage = JSON.stringify(maxValue)
        // localStorage.setItem('currentValue', maxValueForStorage)
        // setMax(maxValue)                                                     //Передаю новое Max число для каунтера
        let maxValueForStorage = JSON.stringify(max)
        localStorage.setItem('maxValue', maxValueForStorage)                    //Сетаю новое макс число в storage
    }
    // useEffect(() => {
    //     let numFromStorage = localStorage.getItem('currentValue')
    //     if (numFromStorage) {
    //         let valueFromStorage = JSON.parse(numFromStorage)              //При загрузки страницы получаю число из localStorage
    //         setMaxValue(valueFromStorage)                                  //И сетаю его в локальный стейт
    //     }
    // }, []);

    useEffect(() => {
        let numFromStorage = localStorage.getItem('maxValue')
            if (numFromStorage) {
                let valueForinputFromStorage = JSON.parse(numFromStorage)
                MaxForSaveInput(valueForinputFromStorage)
            }
    }, []);

    const setMaxHandler = (valueForInput: number) => {                          //Сетаю новое макс число в стейт
        console.log('APP: Хочу установить максимальное число!')
        setMax(valueForInput)
    }

    const setCountHandler = () => {                                     //Установить стартовое число

    }


    return (
        <div className="App">
            <Settings
                setMax={setMaxHandler}                              //Max число
                MaxForSaveInputTwoo={MaxForSaveInput}                //Передаю макс число изstorage обратно в инпут для сохранения
                setValueHandler={setMaxValueHandler}
                // setStart={setCountHandler}
            />
            <Counter
                currentValue={counterValue}                                 //Число в стейте которое каунтим
                maxValue={max}                                              //Максимальное число-ограничение
                startValue={start}
                disabled={disableBtn}
                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
            />
        </div>
    );
}

export default App;
