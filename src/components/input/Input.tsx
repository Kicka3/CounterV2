import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    value: number
    seMaxValue: (newValue: number) => void
    setMaxError: (errTitle: string) => void  //Ошибка при -0
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, seMaxValue, setMaxError, ...restProps} = props

    const [currentValue, setCurrentValue] = useState<number>(value)      //Локальный стейт инпута (сохраняет число в инпуте)
    const [errorMax, setErrorMax] = useState<string>('')

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = e.currentTarget.valueAsNumber                 //Сохраняю число из инпута в number
        if (valueForInput < 1) {                                          //Проверяю число
            setErrorMax('Incorrect max value')                      //Бага!! при 1
            console.log('Ошибка в инпуте:' + errorMax)
            setMaxError(errorMax)                                       //Отправляю ошибку выше
        } else {
            seMaxValue(valueForInput)                                     //Куда сетаю? Хуй знает
            setCurrentValue(valueForInput)                                //Сетаю полученное число в локальный стейт инпута
            setErrorMax('')
        }
    }

    useEffect(() => {                                               //При перезагрузке пррверяю пришло ли значение?
        if (value !== currentValue) {                                     // Если пришло, сетаю в локальный стейт
            setCurrentValue(value)
        }
    }, [value]);                                                    //Следи за приходящим значением!

    return (
        <input
            className={errorMax ? "errorInput" : "inputValue"}               //Добавить стиль с ошибкой
            type={"number"}
            onChange={changeInputHandler}
            value={currentValue}
        />
    );
};

