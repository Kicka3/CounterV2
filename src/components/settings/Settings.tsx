import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    setMax: (maxValue: number) => void                     //Функция для нового мак числа
    // setStart: (value: number) => void                   //Стартовое число из инпута

}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setMax} = props

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

    const setValueHandler = () => {
    //     setMax(maxValue)                                                        //Передаю новое Max число для каунтера
    // console.log('Новое максимальное число:' + maxValue)
    // let maxValueForStorage = JSON.stringify(maxValue)
    // localStorage.setItem('currentValue', maxValueForStorage)           //Сетаю новое макс число в storage
        console.log('Команда установить макс число!')
    }

    const setMaxHandler = (newMaxValue: number) => {
        setMax(newMaxValue)
        console.log('вот Новое максимальное')                                    //Перекидываю новое макс число
    }

    // const errorHandler = (errTitle: string) => {
    //     setMaxError(errTitle)                                               //Сетаю ошибку
    //     // setErrorDisplay(maxError)                                           //Отправляю в каунтер
    //     console.log('Я settings Ошибка maxError из инпута:' + maxError)
    // }

    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input
                            setMax={setMaxHandler}                  //Получаю новое макс число из инпута
                            value={setValueHandler}
                            // setMaxError={errorHandler}
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
                        onClick={setValueHandler}
                        // className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        // disabled={minValue}
                    />
                </div>
            </div>
        </>

    );
};

