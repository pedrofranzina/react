import SliderRange from "./SliderRange";
import SliderInput from "./SliderInput";

function SliderRow({ number, onSliderChange }) {
    function updateNumber(value) {
        onSliderChange(Number(value));
    }

    return (
        <div>
            <SliderRange rangeValue={number} onRangeChange={updateNumber} />
            <SliderInput rangeValue={number} onRangeChange={updateNumber} />

        </div>
    );
}

export default SliderRow;