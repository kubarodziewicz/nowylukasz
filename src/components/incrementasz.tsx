import {useState} from "react";

type IncrementaszProps = {
    lukaszCount: number
    lukaszIncrement: number
    lukaszIncrementValue: number
    setLukaszCount: React.Dispatch<React.SetStateAction<number>>
    setLukaszIncrement: React.Dispatch<React.SetStateAction<number>>
}

const Incrementasz = ( {lukaszCount, lukaszIncrement, lukaszIncrementValue, setLukaszIncrement, setLukaszCount}: IncrementaszProps ) => {

    const [lukaszIncrementCost, setLukaszIncrementCost] = useState(10)

    function handleLikaszIncrement() {

        if (lukaszCount < lukaszIncrementCost) {
            console.log("Biedak.")
            return;
        }

        setLukaszIncrement(lukaszIncrement + lukaszIncrementValue)
        setLukaszCount(lukaszCount - lukaszIncrementCost)
        setLukaszIncrementCost(lukaszIncrementCost * 1.2)
    }

    return(
        <>
            <h1> Incrementasz ( +L/klik ) </h1>
            <button onClick={handleLikaszIncrement}>KUPUJ {lukaszIncrementValue} ZA {lukaszIncrementCost.toFixed(2)} LUKASZÓW</button>
            <p>Obecny incrementLukasz: {lukaszIncrement}</p>
        </>
    )
}


export default Incrementasz;