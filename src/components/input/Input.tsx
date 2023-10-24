import "../input/input.css"
import {ChangeEvent, useState} from "react";
import React from 'react';

type InputPropsType = {
    // value: (value: number) => void
    onChangeInput: (valueForInput: number) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {onChangeInput} = props

    const [currentValue, setCurrentValue] = useState<number>()      //Локальный стейт инпута (сохраняет число в инпуте) было (value)


    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = e.currentTarget.valueAsNumber                 //Сохраняю число из инпута в number
        onChangeInput(valueForInput)                                        //Отправить на верх для проверки
    }

    // useEffect(() => {                                               //При перезагрузке пррверяю пришло ли значение?
    //     if (value !== currentValue) {                                     // Если пришло, сетаю в локальный стейт
    //         setCurrentValue(value)
    //     }
    // }, [value]);                                                    //Следи за приходящим значением!

    return (
        <label htmlFor={"nameInput"}>
            <input
                // className={errorMax ? "errorInput" : "inputValue"}               //Добавить стиль с ошибкой
                className={"inputValue"}                                            //Добавить стиль с ошибкой
                id={"nameInput"}
                type={"number"}
                onChange={changeInputHandler}
                value={currentValue}
            />
        </label>
    );
};

