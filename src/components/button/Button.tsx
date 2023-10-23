import React, {ButtonHTMLAttributes} from 'react';
import '../button/button.css'


type ButtonPropsType = {
    name: string
    onClick: () => void
    // maxValue?: boolean
    // minValue?: boolean

}

export const Button: React.FC<ButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const {name, onClick, ...restProps} = props;
    const clickBtnHandler = () => {
        onClick()
    }

    return (
        <button onClick={clickBtnHandler}
                {...restProps}
        >{name}</button>
    );
};

