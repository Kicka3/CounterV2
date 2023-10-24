import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    setMax: (valueForInput: number) => void                     //Функция для нового мак числа
    setValueHandler: () => void
    // setStart: (value: number) => void                   //Стартовое число из инпута
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setMax, setValueHandler} = props

    //Локальные стейты:
    // const [maxValue, setMaxValue] = useState<number>(0);
    // const [startValue, setStartValue] = useState<number>(0);
    // const [maxError, setMaxError] = useState<string>('')

    // useEffect(() => {
    //     let numFromStorage = localStorage.getItem('currentValue')
    //     if (numFromStorage) {
    //         let valueFromStorage = JSON.parse(numFromStorage)              //При загрузки страницы получаю число из localStorage
    //         setMaxValue(valueFromStorage)                                  //И сетаю его в локальный стейт
    //     }
    // }, []);

    // const errorHandler = (errTitle: string) => {
    //     setMaxError(errTitle)                                               //Сетаю ошибку
    //     // setErrorDisplay(maxError)                                       //Отправляю в каунтер
    //     console.log('Я settings Ошибка maxError из инпута:' + maxError)
    // }

    // const setMaxHandler = (newMaxValue: number) => {
    //     setMax(newMaxValue)
    //     console.log(' вот Новое максимальное')                           //Перекидываю новое макс число
    // }

    const onChangeInputHandler = (valueForInput: number) => {             //Лювлю число из инпута
        if (valueForInput < 1) {                                          //Проверяю число
            console.log('Settings: Ошибка, incorrect value')              // Сетаю ошибку
        } else {
            setMax(valueForInput)                                         //Cетаю в стейт в App
            console.log('Settings: меня не слышно?'+setMax)
        }
    }

    // const setValueHandler = () => {
    //     // console.log('Новое максимальное число:' + maxValue)
    //     // let maxValueForStorage = JSON.stringify(maxValue)
    //     // localStorage.setItem('currentValue', maxValueForStorage)           //Сетаю новое макс число в storage
    //     // setMax(maxValue)                                                //Передаю новое Max число для каунтера
    //     let maxValueForStorage = JSON.stringify(setMax)
    //     localStorage.setItem('maxValue', maxValueForStorage)
    //     console.log('Settings: Команда установить макс число!')
    // }

    const onClickBtnHandler = () => {
        setValueHandler()
    }


    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input
                            onChangeInput={onChangeInputHandler}        //Получаю значение из инпута
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        {/*<Input*/}
                        {/*    maximValue={zaglush}*/}
                        {/*/>*/}
                    </div>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={'ActiveBtn'}
                        name={"set"}
                        onClick={onClickBtnHandler}
                        // className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        // disabled={minValue}
                    />
                </div>
            </div>
        </>

    );
};

