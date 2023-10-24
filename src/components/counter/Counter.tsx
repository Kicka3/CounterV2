import React, {JSX, useState} from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'

type CounterPropsType = {
    currentCountNumber: number                     //Число в стейте которое каунтим
    setNumber: (number: number) => void            //Сетаем в стейт который каунтим
    maxValue: boolean                              //Максимальное число-ограничение
    setMaxValue: (value: boolean) => void          //Сетаем максимальное число-ограничение
    maxiValue: () => void                          //Функция-блокиратор (определяет макс число)
    errorMax: string                               //Ошибка на макс число
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {
        currentCountNumber, setNumber,
        maxiValue, maxValue, setMaxValue,
        errorMax
    } = props


    const incBtn = () => {
        setNumber(currentCountNumber + 1);
        maxiValue();

    }

    const resetCount = () => {
        console.log('RESET')
        setNumber(0);
        setMaxValue(false);
    }

    const displayCounter: JSX.Element =
        <h1 className={maxValue ? "MaxNumber" : undefined}>
            {errorMax
                ?  <span className={"MaxNumErrorTitle"}>{errorMax}</span>
                : currentCountNumber
            }
        </h1>

    return (
        <>
            <div className={"Counter"}>
                <div className={"DisplayCount"}>
                    {displayCounter}
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"inc"}
                        onClick={incBtn}
                        disabled={maxValue}
                    />
                    <Button
                        className={currentCountNumber === 0 ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"reset"}
                        onClick={resetCount}
                        disabled={currentCountNumber === 0}
                    />
                </div>
            </div>
        </>

    );
};

