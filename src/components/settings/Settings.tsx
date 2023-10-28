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
    isValidMax: boolean
    isValidStart: boolean
    counterValue: number

    setDisableBtn: (value: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setMax, max, start, setStart, setSettings, isValidMax, isValidStart, setDisableBtn} = props

    const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {          //Лювлю число из инпута
        const {id, value} = e.currentTarget
        switch (id) {
            case "maxValue": {
                setMax(+value)
                console.log(`max: ` + value)
                validDisable()
                break
            }
            case "startValue": {
                setStart(+value)
                console.log(`start: ` + value)
                validDisable()
                break
            }
        }
    }

    const validDisable = () => {
         max <=0 || max <= start ? setDisableBtn(true) : setDisableBtn(false)
    }   //Хуйня

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
                               isValid={isValidMax}
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        <Input name="startValue"
                               onChangeInputs={onChangeInputs}
                               value={start}
                               isValid={isValidStart}
                        />
                    </div>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={'ActiveBtn'}
                        name={"set"}
                        onClick={onClickBtnHandler}
                        disabled={max <= start || start < 0}
                    />
                </div>
            </div>
        </>

    );
};

