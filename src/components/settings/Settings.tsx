import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    setCount: (value: number) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setCount} = props

    //Локальные стейты:
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);


    const setValueHandler = () => {
        setCount(startValue)                                      //Сохраняем новое значение из временного стейта в локальный.
        console.log('Новое максимальное число:' + maxValue)
        let maxValueForStorage = JSON.stringify(maxValue)
        localStorage.setItem('currentValue', maxValueForStorage)
    }

    useEffect(() => {                                              //При загрузки страницы получают число из стейта
        let fromStorage = localStorage.getItem('currentValue')       //И сетаю его в локальный стейт
        if (fromStorage) {
            let valueFromStorage = JSON.parse(fromStorage)
            setMaxValue(valueFromStorage)
        }
    }, []);

    const setMaxValueHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)//Сохраняем число во временный стейт.
        console.log('Новое макс число из инпута:' + newMaxValue)
    }


    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input
                            setValue={setMaxValueHandler}                  //Получаю новое макс число из инпута
                            value={maxValue}
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        {/*<Input*/}
                        {/*    maximValue={zaglush}*/}
                        {/*/>*/}
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

