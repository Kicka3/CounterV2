import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    value: number
    setValue: (newValue: number) => void
    error?: string
    // maximValue: (newMaxValue: number) => void
    // maxValue: number                              //Ловлю макс число из settings
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, setValue, ...restProps} = props

    const [currentValue, setCurrentValue] = useState<number>(value)  //Локальный стейт инпута (сохраняет число в инпуте)

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = e.currentTarget.valueAsNumber
        setValue(valueForInput)
        setCurrentValue(valueForInput)
    }

    useEffect(() => {
        if (value !== currentValue) {
            setCurrentValue(value)
        }
    }, [value]);

    return (
        <input className={"inputValue"}  //Добавить стиль с ошибкой
               type={"number"}
               onChange={changeInputHandler}
               value={currentValue}
        />
    );
};

