import "./CustomInput.scss";

const CustomInput = ({ label, value, onChangeEvent, onEnterPress }) => {
    const handleEnterPress = (event) => {
        if (event === "Enter") {
            onEnterPress();
        } else {
            return;
        }
    };

    return (
        <div className="custom-input-container">
            <input
                className="custom-input"
                type="text"
                value={value}
                onChange={(e) => onChangeEvent(e)}
                onKeyDown={(event) => handleEnterPress(event.key)}
            />
            {label ? (
                <label className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
};
export default CustomInput;
