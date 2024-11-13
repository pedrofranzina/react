function SliderInput({ rangeValue, onRangeChange }) {
    function handleChange(event) {
        let value = event.target.value;
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        onRangeChange(value); // calling function
    }

    return (
        <>
            <input type="number" value={rangeValue} onChange={handleChange} />
        </>
    );
}

export default SliderInput;