import { useState } from "react";

function InputExample() {
    const [name, setName] = useState("Martha");
    const [date, setDate] = useState();

    function inputChange(e) {
        setName(e.target.value);
    }
    function inputChangeDate(e) {
        setDate(e.target.value);
    }
    function buttonClicked() {
        alert("o seu nome é " + name + " e a data de nascimento é " + date);
    }

    return (
        <>
            <div>
                <input defaultValue={name} placeholder="Nome" onChange={inputChange} />
                <input type="date" defaultValue={date} onChange={inputChangeDate} />
                <p>Bom dia {name}, a tua data de nascimento é {date}</p>
                <button onClick={buttonClicked}>OK</button>
            </div>
        </>
    )
};


export default InputExample;