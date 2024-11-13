function SliderRange({ rangeValue, onRangeChange }) {
    function handleChange(event) {
        onRangeChange(event.target.value); // calling function
    }

    return (
        <>
            <input type="range" value={rangeValue} onChange={handleChange} />
        </>
    );
}

export default SliderRange;