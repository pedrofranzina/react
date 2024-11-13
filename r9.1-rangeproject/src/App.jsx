import { useEffect, useState } from "react";
import SliderRow from "./components/SliderRow";
import Total from './components/Total'


function App() {
  const [numbers, setNumbers] = useState([0, 0]);
  const [sum, setSum] = useState();

  useEffect(
    function () {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      setSum(total);
    },
    [numbers]
  );


  return (
    <div className="card">

      {numbers.map((element, index) => (
        <>
          <SliderRow
            number={element}
            onSliderChange={(v) => {
              const temp = [...numbers]; // copio o array para um novo
              temp[index] = v; // altero a copia
              setNumbers(temp); // aponto a var de estado para o novo array
            }}
          />
        </>
      ))}
      <Total value={sum} />
    </div>
  );
}

export default App;