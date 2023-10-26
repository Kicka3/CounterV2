import React, {JSX} from 'react';

type DisplayCounterPropsType = {
    disabled: boolean
    currentValue: number
    startValue: number
    maxValue: number
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({disabled, currentValue, startValue, maxValue}) => {

    const displayCounter: JSX.Element =
        <h1 className={disabled ? "MaxNumberError" : undefined}>
            {disabled
                ? <span className={"MaxNumErrorTitle"}>{currentValue}</span>
                : currentValue === 0 ? 'Press set' : startValue < 0 || maxValue <= startValue ? 'Incorrect value' : currentValue
            }
        </h1>

    // <h1 className={disabled ? "MaxNumberError" : undefined}>
    //         {disabled
    //             ? <span className={"MaxNumErrorTitle"}>{maxValue}</span>
    //             : currentValue === 0 ? 'Press set' : currentValue
    //         }
    //     </h1>

    return (
        <>
            {displayCounter}
        </>
    );
};

