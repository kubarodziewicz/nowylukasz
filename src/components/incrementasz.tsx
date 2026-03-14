import {useState} from "react";
import '../styles/incrementasz.css'

type IncrementaszProps = {
    lukaszCount: number
    lukaszIncrement: number
    lukaszIncrementValue: number
    boughtIncrementAmount: number

    up5Value: number

    setLukaszCount: React.Dispatch<React.SetStateAction<number>>
    setLukaszIncrement: React.Dispatch<React.SetStateAction<number>>
    setBoughtIncrementAmount: React.Dispatch<React.SetStateAction<number>>
    setLukaszIncrementValue: React.Dispatch<React.SetStateAction<number>>
}

const Incrementasz = ( {lukaszCount, lukaszIncrement, lukaszIncrementValue, setLukaszIncrement, setLukaszCount, setBoughtIncrementAmount, boughtIncrementAmount, up5Value, setLukaszIncrementValue}: IncrementaszProps ) => {

    const [lukaszIncrementCost, setLukaszIncrementCost] = useState(10)

    function handleLikaszIncrement() {

        if (lukaszCount < lukaszIncrementCost) {
            console.log("Biedak.")

            return;
        }

        const newAmount = boughtIncrementAmount + 1;

        const multiplier = up5Value > 0 ? (1 + (newAmount / 20)) : 1;
        const nextValue = Math.round(1 * multiplier * 100) / 100;

        setLukaszIncrementValue(nextValue);
        setBoughtIncrementAmount(newAmount);

        setLukaszIncrement(lukaszIncrement + lukaszIncrementValue)
        setLukaszCount(lukaszCount - lukaszIncrementCost)
        setLukaszIncrementCost(lukaszIncrementCost + Math.pow(2, Math.log2(boughtIncrementAmount * 6)))
    }

    return(
        <>
            <h1> Incrementasz ( +L/klik ) </h1>

            <section className="incrementaszButtonSection">
                <button onClick={handleLikaszIncrement}>KUPUJ {lukaszIncrementValue} ZA {lukaszIncrementCost.toFixed(2)} LUKASZÓW</button>
                <p>poziom: {boughtIncrementAmount}</p>
            </section>

            <p>Obecny incrementLukasz: {lukaszIncrement}</p>
        </>
    )
}


export default Incrementasz;