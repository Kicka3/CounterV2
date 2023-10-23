import React, {useState} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    maximumValue: (maxValue: number) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
const {maximumValue} = props

    //Можно не типизировать (типизируем неявно)
    const [maxValue, setMaxValue] = useState<number>();
    const [startValue, setStartValue] = useState<number>();


    const setValueHandler = () => {
        setMaxValue(startValue)
        // maximumValue(maxValue)
        console.log('Нвое максимальное число:' + maxValue)
    }

    const setMaximValue = (newMaxValue: number) => {
        setStartValue(newMaxValue)
        console.log('Принял новое число из инпута:' + newMaxValue)
    }

    const zaglush = () => {

    }
    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input
                            maximValue={setMaximValue}
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        <Input
                            maximValue={zaglush}
                        />
                    </div>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={'ActiveBtn'}
                        name={"set"}
                        onClick={setValueHandler}
                        // className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        // disabled={minValue}
                    />
                </div>
            </div>
        </>

    );
};

