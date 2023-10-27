import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";


type SettingsPropsType = {
    start: number
    max: number
    setMax: (valueForInput: number) => void                     //Функция для нового мак числа
    setStart: (value: number) => void
    setSettings: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setMax, max, start, setStart, setSettings} = props

    // const onChangeMaxInputHandler = (valueForInput: number) => {             //Лювлю число из инпута
    //     if (valueForInput < 1) {                                          //Проверяю число
    //         console.log('Settings: Ошибка, incorrect value')              // Сетаю ошибку
    //     } else {
    //         setMax(valueForInput)                                         //Cетаю в стейт в App (fun)
    //     }
    // }

    const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {          //Лювлю число из инпута
        const {id, value} = e.currentTarget
        switch (id) {
            case "maxValue": {
                setMax(+value)
                break
            }
            case "startValue": {
                setStart(+value)
                break
            }
        }
    }

    const onClickBtnHandler = () => {
        setSettings()
    }

    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input name="maxValue"
                               onChangeInputs={onChangeInputs}
                               value={max}
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        <Input name="startValue"
                               onChangeInputs={onChangeInputs}
                               value={start}
                        />
                    </div>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        // className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        className={'ActiveBtn'}
                        name={"set"}
                        onClick={onClickBtnHandler}
                    />
                </div>
            </div>
        </>

    );
};

