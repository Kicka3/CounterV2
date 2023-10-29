import React, {JSX} from 'react';

type DisplayCounterPropsType = {
    disabled: boolean
    currentValue: number
    startValue: number
    maxValue: number
    status: boolean
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({disabled, currentValue, startValue, maxValue, status}) => {

    let statusErr = (startValue < 0 || maxValue <= startValue)
    console.log('statusErr: ' + statusErr)

    const displayCounter: JSX.Element =
            <h1 className={currentValue === maxValue ? "MaxNumberError" : ''}>
                {disabled
                    ? <span className={statusErr ? "MaxNumErrorTitle" : ""}>{currentValue}</span>
                    :
                    <span className={statusErr ? 'errorMessage' : ""}>{ statusErr ? 'Incorrect value' : !status ? 'Enter values and press set' : currentValue} </span>
                }
            </h1>

    return (
        <>
            {displayCounter}
        </>
    );
};
