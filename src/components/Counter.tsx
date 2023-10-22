import React, {useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {
    const [number, setNnumber] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<boolean>(false);

    const incBtn = () => {
        setNnumber(number + 1);
        maximunValue();
        console.log('incr' + '' + number);
    }

    const maximunValue = () => {
        if (number >= 4) {
            setMaxValue(true);
            console.log('WARNING!5');
        }
    }

    const resetCount = () => {
        console.log('RESET')
        setNnumber(0);
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
                        name={"inc"}
                        onClick={incBtn}
                        maxValue={maxValue}
                        className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        disabled={maxValue}
                    />
                    <Button name={"reset"}
                            onClick={resetCount}
                            maxValue={maxValue}
                            className={number === 0 ? 'DisabledBtn' : 'ActiveBtn'}
                            disabled={number === 0}

                    />
                </div>
            </div>
        </>

    );
};

