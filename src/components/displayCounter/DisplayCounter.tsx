import React, {JSX} from 'react';

type DisplayCounterPropsType = {
    disabled: boolean
    currentValue: number
    startValue: number
    maxValue: number
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({disabled, currentValue, startValue, maxValue}) => {

    let statusErr = (startValue < 0 || maxValue <= startValue)
    console.log('disabled: ' + disabled)
    const displayCounter: JSX.Element =
        <h1 className={currentValue === maxValue ? "MaxNumberError" : ''}>
            {disabled
                ? <span className={"MaxNumErrorTitle"}>{currentValue}</span>
                :
                <span className={statusErr ? 'errorMessage' : ""}>{currentValue === 0 ? 'Enter values and press set' : (statusErr ? 'Incorrect value' : currentValue)} </span>
            }
        </h1>

    return (
        <>
            {displayCounter}
        </>
    );
};

// <h1 className={disabled ? "MaxNumberError" : undefined}>
//     <span>{currentValue}</span>
//
//     {/*{disabled*/}
//     {/*    ? <span className={"MaxNumErrorTitle"}>{currentValue}</span>*/}
//     {/*    :<span className={(startValue < 0 || maxValue <= startValue) ? 'errorMessage' : ''}>{message}</span>*/}
//     {/*}*/}
// </h1>
// <span>{`${currentValue === 0 ? 'Press set' : startValue < 0 || maxValue <= startValue ? {message} : currentValue}`}</span>

