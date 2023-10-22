import React from 'react';
import {Button} from "../button/Button";

export const Settings = () => {
    // const [number, setNnumber] = useState<number>(0);
    // const [maxValue, setMaxValue] = useState<boolean>(false);

    const incBtn = () => {

    }

    const maximunValue = () => {

    }

    const resetCount = () => {


    }

    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <h1 className={"MaxValue"}>max value</h1>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        name={"inc"}
                        onClick={incBtn}
                        maxValue={maxValue}
                        className={maxValue ? 'DisabledBtn' : 'ActiveBtn'}
                        disabled={maxValue}
                    />
                </div>
            </div>
        </>

    );
};

