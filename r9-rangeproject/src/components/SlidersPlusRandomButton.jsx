function SlidersPlusRandomButton({ onClick }) {
    return (
        <div className="buttonDiv">
            <p>Sliders</p>
            <button onClick={onClick}>random</button>
        </div>
    );
}

export default SlidersPlusRandomButton;