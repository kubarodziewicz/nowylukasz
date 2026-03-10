import {useState} from "react";

type IncrementaszProps = {
    lukaszCount: number
    lukaszIncrement: number
    lukaszIncrementValue: number
    boughtIncrementAmount: number
    setLukaszCount: React.Dispatch<React.SetStateAction<number>>
    setLukaszIncrement: React.Dispatch<React.SetStateAction<number>>
    setBoughtIncrementAmount: React.Dispatch<React.SetStateAction<number>>
}

const Incrementasz = ( {lukaszCount, lukaszIncrement, lukaszIncrementValue, setLukaszIncrement, setLukaszCount, setBoughtIncrementAmount, boughtIncrementAmount}: IncrementaszProps ) => {

    const [lukaszIncrementCost, setLukaszIncrementCost] = useState(10)

    function handleLikaszIncrement() {

        if (lukaszCount < lukaszIncrementCost) {
            console.log("Biedak.")
            return;
        }

        setLukaszIncrement(lukaszIncrement + lukaszIncrementValue)
        setLukaszCount(lukaszCount - lukaszIncrementCost)
        setBoughtIncrementAmount(boughtIncrementAmount + 1)
        setLukaszIncrementCost(lukaszIncrementCost + Math.pow(2, Math.log2(boughtIncrementAmount * 6)))
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