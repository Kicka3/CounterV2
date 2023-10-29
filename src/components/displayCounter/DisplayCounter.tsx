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

    // let maxFromStorage = localStorage.getItem('maxValue')
    // let startFromStorage = localStorage.getItem('startValue')
    //  const setMessage = !maxFromStorage ||  !startFromStorage || ( maxFromStorage &&startFromStorage && (+maxFromStorage !== maxValue ||  +startFromStorage !== startValue))
    // console.log(!!setMessage)

    const displayCounter: JSX.Element =
            <h1 className={currentValue === maxValue ? "MaxNumberError" : ''}>
                {disabled
                    ? <span className={statusErr ? "MaxNumErrorTitle" : ""}>{currentValue}</span>
                    :
                    // <span className={statusErr ? 'errorMessage' : ""}>{currentValue === 0  ? 'Enter values and press set' : (statusErr ? 'Incorrect value' : currentValue)} </span>
                    <span className={statusErr ? 'errorMessage' : ""}>{ statusErr ? 'Incorrect value' : !status ? 'Enter values and press set' : currentValue} </span>
                }
            </h1>

    return (
        <>
            {displayCounter}
        </>
    );
};
