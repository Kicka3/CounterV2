import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    value: (value: number) => void
    setMax: (newValue: number) => void              //Максимальное число

}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, setMax} = props

    const [currentValue, setCurrentValue] = useState<number>(value)      //Локальный стейт инпута (сохраняет число в инпуте)


    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = e.currentTarget.valueAsNumber                 //Сохраняю число из инпута в number

        if (valueForInput < 1) {                                          //Проверяю число
            //Отправляю ошибку выше
        } else {
            setMax(valueForInput)                                     //Куда сетаю? Хуй знает
            setCurrentValue(valueForInput)                                //Сетаю полученное число в локальный стейт инпута

        }
    }

    useEffect(() => {                                               //При перезагрузке пррверяю пришло ли значение?
        if (value !== currentValue) {                                     // Если пришло, сетаю в локальный стейт
            setCurrentValue(value)
        }
    }, [value]);                                                    //Следи за приходящим значением!

    return (
        <input
            // className={errorMax ? "errorInput" : "inputValue"}               //Добавить стиль с ошибкой
            className={"inputValue"}               //Добавить стиль с ошибкой
            type={"number"}
            onChange={changeInputHandler}
            value={currentValue}
        />
    );
};

