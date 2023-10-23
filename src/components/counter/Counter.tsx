import React from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'

type CounterPropsType = {
    number: number                                 //Число в стейте которое каунтим
    setNumber: (number: number) => void            //Сетаем в стейт который каунтим
    maxValue: boolean                              //Максимальное число-ограничение
    setMaxValue: (value: boolean) => void          //Сетаем максимальное число-ограничение
    maxiValue: () => void                          //Функция-блокиратор (определяет макс число)
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    // const [number, setNumber] = useState<number>(0);
    // const [maxValue, setMaxValue] = useState<boolean>(false);

    // const maxiValue = () => {
    //     if (number >= 4) {
    //         setMaxValue(true);
    //         console.log('WARNING!5');
    //     }
    // }
    const {number, setNumber, maxiValue, maxValue, setMaxValue} = props

    const incBtn = () => {
        setNumber(number + 1);
        maxiValue();
    }

    const resetCount = () => {
        console.log('RESET')
        setNumber(0);
        setMaxValue(false);
    }

    return (
        <>
            <div className={"Counter"}>
                <div className={"DisplayCount"}>
                    <h1 className={maxValue ? "MaxNumber" : undefined}>{number}</h1>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"inc"}
                        onClick={incBtn}
                        disabled={maxValue}
                    />
                    <Button
                        className={number === 0 ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"reset"}
                        onClick={resetCount}
                        disabled={number === 0}
                    />
                </div>
            </div>
        </>

    );
};

