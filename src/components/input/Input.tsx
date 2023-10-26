import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    // onChangeInput: (valueForInput: number) => void
    // maxValueForInput?: number
    value: number
    onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, onChangeInputs, name} = props

    // const [currentValue, setCurrentValue] = useState<number>(0)              //Локальный стейт инпута (сохраняет число в инпуте) было (value)


    // const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let valueForInput = e.currentTarget.valueAsNumber                   //Сохраняю число из инпута в number
    //     onChangeInput(valueForInput)                                        //Отправить на верх для проверки
    //     setCurrentValue(valueForInput)
    // }

    // useEffect(() => {                                               //При перезагрузке пррверяю пришло ли значение?
    //     if (maxValueForInput) {                                         // Если пришло, сетаю в локальный стейт
    //         setCurrentValue(maxValueForInput)
    //     }
    // }, [currentValue]);                                                    //Следи за приходящим значением!

    // const onFocusHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    //
    // }

    return (
        <label htmlFor={"nameInput"}>
            <input
                // className={errorMax ? "errorInput" : "inputValue"}               //Добавить стиль с ошибкой
                id={name}
                className={"inputValue"}                                            //Добавить стиль с ошибкой
                type={"number"}
                onChange={onChangeInputs}
                value={value}
                // onFocus={onFocusHandler}
            />
        </label>
    );
};

