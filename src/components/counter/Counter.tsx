import React, {JSX} from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'

type CounterPropsType = {
    currentCountNumber: number                     //Число в стейте которое каунтим
    setNumber: (number: number) => void            //Сетаем в стейт который каунтим
    maxValue: boolean                              //Максимальное число-ограничение
    setMaxValue: (value: boolean) => void          //Сетаем максимальное число-ограничение
    maxiValue: () => void                          //Функция-блокиратор (определяет макс число)
    errorMax: string                               //Ошибка на макс число

    incBtn: () => void                              //Инкрементация
    resetCount: () => void                          //reset btn
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {currentCountNumber, maxValue, errorMax, incBtn, resetCount} = props

    const displayCounter: JSX.Element =
        <h1 className={maxValue ? "MaxNumber" : undefined}>
            {errorMax
                ? <span className={"MaxNumErrorTitle"}>{errorMax}</span>
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

