import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    maxValue: boolean
}

export const Button: React.FC<ButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {name, onClick, maxValue, ...restProps} = props;
    const clickBtnHandler = () => {
        onClick()
    }


    return (
        <button onClick={clickBtnHandler}
                {...restProps}

        >{name}</button>
    );
};

