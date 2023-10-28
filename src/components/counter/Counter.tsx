import React from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'
import {DisplayCounter} from "../displayCounter/DisplayCounter";


type CounterPropsType = {
    currentValue: number                              //Число в стейте которое каунтим
    maxValue: number                                  //Максимальное число-ограничение
    startValue: number                                //Стартовое число для отрисовки
    disabled: boolean                                 //Блокировка
    incBtn: () => void                                //Инкрементация
    resetCount: () => void                            //reset btn
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {currentValue, startValue, disabled, incBtn, resetCount, maxValue} = props

    return (
        <>
            <div className={"Counter"}>
                    <div className={"DisplayCount"}>
                        <DisplayCounter
                            startValue={startValue}
                            disabled={disabled}
                            currentValue={currentValue}
                            maxValue={maxValue}
                        />
                    </div>

                    <div className={"BtnWrapper"}>
                        <Button
                            className={currentValue === maxValue || maxValue === startValue ? 'DisabledBtn' : 'ActiveBtn'}
                            name={"inc"}
                            onClick={incBtn}
                            disabled={currentValue === maxValue || maxValue <= startValue || maxValue < 0 || startValue < 0}
                        />
                        <Button
                            className={!disabled ? 'ActiveBtn' : 'DisabledBtn'}
                            name={"reset"}
                            onClick={resetCount}
                            disabled={currentValue === startValue || maxValue <= startValue || startValue < 0}
                        />
                    </div>
            </div>
        </>

    );
};

