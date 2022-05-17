export const ButtonsPanel = ({ value, setValue, initialValue, additionValue }) => {
    const handleCounter = action => {
        if (action === "add") setValue(value + additionValue);
        if (action === "reInit") setValue(initialValue);
        if (action === "reset") setValue(0);
    };

    return (
        <div className="buttons">
            <button className="button" onClick={() => handleCounter("add")}>
                Add {additionValue}
            </button>
            <button className="button" onClick={() => handleCounter("reInit")}>
                ReInit
            </button>
            <button className="button" onClick={() => handleCounter("reset")}>
                Reset
            </button>
        </div>
    );
};
