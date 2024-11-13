import React from "react";

function RightContainer({ pokeInfo }) {
    return (
        <div id="rightContainer">
            <img src={pokeInfo.image} />
            <h3>{pokeInfo.name}</h3>
            <p>
                Types:{" "}
                {pokeInfo.types.map((value) => (
                    <span className="type">{value.type.name}</span>
                ))}
            </p>
            <p>Weight: {pokeInfo.weight}</p>
            <p>Height: {pokeInfo.height}</p>
        </div>
    );
}

export default RightContainer;