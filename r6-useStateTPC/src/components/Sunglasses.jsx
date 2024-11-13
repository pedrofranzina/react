import { useEffect, useState } from "react";

function Sunglasses() {
    async function fetchSunglasses() {
        const response = await fetch("https://dummyjson.com/products/154/");
        const result = await response.json();

        console.log(result);
        setSunglassesData({
            title: result.title,
            category: result.category,
            image: result.thumbnail,
            price: result.price,
        });
    }

    const [sunglassesData, setSunglassesData] = useState({
        name: "Loading...",
    });

    // para ja usamos o useEffect como ponto de entrada num componente
    // IMPORTANTE:
    // 1 argumento e um callback com o codigo a ser executado
    // 2 argumento e um [] array vazio, vamos aprender mais porque na proxima sessao
    useEffect(function () {
        fetchSunglasses();
    }, []);

    return (
        <>
            <div className="productCard">
                <h2>{sunglassesData.title}</h2>
                <img src={sunglassesData.image} />
                <div className="productCardInfo">
                    <p>category: {sunglassesData.category}</p>
                    <p>price: {sunglassesData.price} €</p>
                </div>
            </div>
        </>
    );
}

export default Sunglasses;