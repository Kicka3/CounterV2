import "../input/input.css"
import {ChangeEvent} from "react";
import React from 'react';

type InputPropsType = {
    value: number
    onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, onChangeInputs, name} = props

    return (
        <label htmlFor={"nameInput"}>
            <input
                // className={errorMax ? "errorInput" : "inputValue"}
                className={"inputValue"}                                            //Добавить стиль с ошибкой
                id={name}
                type={"number"}
                onChange={onChangeInputs}
                value={value}
            />
        </label>
    );
};

