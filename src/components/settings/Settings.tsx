import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    setCount: (value: number) => void                                     //Стартовое число из инпута
    newMaxValue: (maxValue: number) => void
    // setError: (errTitle: string) => void
    setErrorDisplay: (errTitle: string) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setCount, newMaxValue, setErrorDisplay} = props

    //Локальные стейты:
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxError, setMaxError] = useState<string>('')

    const setValueHandler = () => {
        setCount(startValue)                                             //Передаём стартовое число для каунтера
        newMaxValue(maxValue)                                            //Передаю новое Max число для каунтера
        console.log('Новое максимальное число:' + maxValue)
        let maxValueForStorage = JSON.stringify(maxValue)
        localStorage.setItem('currentValue', maxValueForStorage)           //Сетаю новое макс число в storage
    }

    useEffect(() => {
        let numFromStorage = localStorage.getItem('currentValue')
        if (numFromStorage) {
            let valueFromStorage = JSON.parse(numFromStorage)              //При загрузки страницы получаю число из localStorage
            setMaxValue(valueFromStorage)                                  //И сетаю его в локальный стейт
        }
    }, []);

    const setMaxValueHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)                                          //Сохраняю число в local стейт.
        // console.log('Новое макс число из инпута:' + newMaxValue)
    }

    const errorHandler = (errTitle: string) => {
        setMaxError(errTitle)                                               //Сетаю ошибку
        setErrorDisplay(maxError)                                           //Отправляю в каунтер
        console.log('Я settings Ошибка maxError из инпута:' + maxError)
    }

    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input
                            seMaxValue={setMaxValueHandler}                  //Получаю новое макс число из инпута
                            value={maxValue}                               //Передаю инпуту max число
                            setMaxError={errorHandler}
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

