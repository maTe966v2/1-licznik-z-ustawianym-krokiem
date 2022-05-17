import { useState } from "react";

import { Display } from "./Display";
import { ButtonsPanel } from "./ButtonsPanel";
import { Step } from "./Step";

export const Counter = () => {
    const initialValue = 0;
    const [value, setValue] = useState(initialValue);
    const [additionValue, setAdditionValue] = useState(1);

    return (
        <div id="counter">
            <Display value={value} />
            <ButtonsPanel
                value={value}
                setValue={setValue}
                initialValue={initialValue}
                additionValue={additionValue}
            />
            <Step setAdditionValue={setAdditionValue} />
        </div>
    );
};
