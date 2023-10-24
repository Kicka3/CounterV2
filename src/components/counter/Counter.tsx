import React, {JSX} from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'

type CounterPropsType = {
    currentValue: number                              //Число в стейте которое каунтим
    maxValue: number                                  //Максимальное число-ограничение
    startValue: number                                //Стартовое число для отрисовки
    disabled: boolean                                 //Блокировка
    incBtn: () => void                                //Инкрементация
    resetCount: () => void                            //reset btn
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {currentValue, maxValue, startValue, disabled, incBtn, resetCount} = props

    const displayCounter: JSX.Element =
        <h1 className={disabled ? "MaxNumber" : undefined}>
            {disabled
                ? <span className={"MaxNumErrorTitle"}>{maxValue}</span>
                : currentValue
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
                        className={disabled ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"inc"}
                        onClick={incBtn}
                        disabled={disabled}
                    />
                    <Button
                        className={disabled ? 'ActiveBtn' : 'DisabledBtn'}
                        name={"reset"}
                        onClick={resetCount}
                        disabled={!disabled}
                    />
                </div>
            </div>
        </>

    );
};

