import "../input/input.css"
import {ChangeEvent, useEffect, useState} from "react";
import React from 'react';

type InputPropsType = {
    maximValue: (newMaxValue: number) => void

}

export const Input: React.FC<InputPropsType> = (props) => {
    const {maximValue, ...restProps} = props

    const [currentValue, setCurrentValue] = useState<number>(0)

    //Тут бага с отрисовкой корретного числа
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueForInput = Number(e.currentTarget.value)
        console.log(valueForInput)
        setCurrentValue(valueForInput)
        // maximValue(currentValue)
    }

    useEffect(() => {
        maximValue(currentValue)
    }, [currentValue]);


    return (
        <input className={"inputValue"}
               type={"number"}
               onChange={changeInputHandler}
            // value={currentValue}
        />
    );
};

