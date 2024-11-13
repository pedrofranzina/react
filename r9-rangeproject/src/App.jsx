import React, { useState } from 'react';
import Slider from './components/Slider';
import Total from './components/Total'
import SlidersPlusRandomButton from './components/SlidersPlusRandomButton';

function App() {
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [rangeValue3, setRangeValue3] = useState(0);
  const [rangeValue4, setRangeValue4] = useState(0);
  const [rangeValue5, setRangeValue5] = useState(0);

  const total = rangeValue + rangeValue2 + rangeValue3 + rangeValue4 + rangeValue5;

  function generateRandomValues() {
    setRangeValue(Math.round(Math.random() * 100));
    setRangeValue2(Math.round(Math.random() * 100));
    setRangeValue3(Math.round(Math.random() * 100));
    setRangeValue4(Math.round(Math.random() * 100));
    setRangeValue5(Math.round(Math.random() * 100));
  }

  return (
    <div className="card">
      <SlidersPlusRandomButton onClick={generateRandomValues} />
      <Slider value={rangeValue} onChange={(event) => setRangeValue(Number(event.target.value))} />
      <Slider value={rangeValue2} onChange={(event) => setRangeValue2(Number(event.target.value))} />
      <Slider value={rangeValue3} onChange={(event) => setRangeValue3(Number(event.target.value))} />
      <Slider value={rangeValue4} onChange={(event) => setRangeValue4(Number(event.target.value))} />
      <Slider value={rangeValue5} onChange={(event) => setRangeValue5(Number(event.target.value))} />
      <Total value={total} />
    </div>
  );
}

export default App;