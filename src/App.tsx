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

    const setMaxHandler = (maxValue: number) => {
        console.log('Хочу установить максимальное число!')
    }

    const setCountHandler = () => {                                     //Установить стартовое число

    }


    return (
        <div className="App">
            <Settings
                setMax={setMaxHandler}
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
