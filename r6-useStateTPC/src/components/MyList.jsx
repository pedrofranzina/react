import { useState } from "react";

function MyList() {
    const [games, setGames] = useState([
        "Street Fighter",
        "Street Fighter II",
        "Street Fighter III",
        "Street Fighter IV",
        "Street Fighter 5",
        "Street Fighter 6",
    ]);

    function addGame() {
        const rand = parseInt(Math.random() * 100) + 7;
        const newGame = "Street Fighter " + rand;

        // const newData = Array.from(games);
        // newData.push(newGame);
        const newData = [...games, newGame];
        setGames(newData);
    }

    return (
        <>
            <button onClick={addGame}>Add Game!</button>
            <ul>
                {games.map((value) => (
                    <li>{value}</li>
                ))}
            </ul>
        </>
    );
}
export default MyList;