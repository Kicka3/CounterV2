import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    value: number
    setValue: (newValue: number) => void
    errorMax?: (errTitle: string) => void  //Ошибка при -0
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, setValue, errorMax, ...restProps} = props

    const [currentValue, setCurrentValue] = useState<number>(value)      //Локальный стейт инпута (сохраняет число в инпуте)
    const [error, setError] = useState<string | null>(null)
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = e.currentTarget.valueAsNumber                 //Сохраняю число из инпута в number
        if (valueForInput <= 0) {                                         //Проверяю число
            setError('Incorrect value')                                 //Бага!! при 1
                                                                                 //Передаю ошибку вверх
        } else {
            setValue(valueForInput)                                       //Куда сетаю? Хуй знает
            setCurrentValue(valueForInput)                                //Сетаю полученное число в локальный стейт инпута
            setError(null)
        }
    }

    useEffect(() => {                                               //При перезагрузке пррверяю пришло ли значение?
        if (value !== currentValue) {                                     // Если пришло, сетаю в локальный стейт
            setCurrentValue(value)
        }
    }, [value]);                                                    //Следи за приходящим значением!

    return (
        <input
            className={error ? "errorInput" : "inputValue"}               //Добавить стиль с ошибкой
            type={"number"}
            onChange={changeInputHandler}
            value={currentValue}
        />
    );
};

