import "../input/input.css"
import {ChangeEvent} from "react";
import React from 'react';


type InputPropsType = {
    value: number
    onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    isValid: boolean
}

export const Input: React.FC<InputPropsType> = (props) => {
    const {value, onChangeInputs, name, isValid} = props

    return (
        <label htmlFor={"nameInput"}>
            <input
                className={`${"input"} ${isValid ? "errorInput" : ''}`}                                            //Добавить стиль с ошибкой
                type={"number"}
                id={name}
                onChange={onChangeInputs}
                value={value}
            />
        </label>
    );
};

