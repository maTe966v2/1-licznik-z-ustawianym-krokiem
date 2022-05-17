export const Step = ({ setAdditionValue }) => {
    const handleStep = e => setAdditionValue(e.target.value > 0 && Number(e.target.value));

    return (
        <div className="step">
            <span className="step-title">Krok:</span>
            <input type="number" className="step-input" onChange={handleStep} />
        </div>
    );
};
