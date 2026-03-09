import {useState} from "react";

type multiszProps = {
    lukaszCount: number,
    lukaszMulti: number,
    lukaszMultiValue: number,
    setLukaszCount: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMulti: React.Dispatch<React.SetStateAction<number>>,
}

const Multisz = ({lukaszCount, lukaszMulti, setLukaszMulti, setLukaszCount, lukaszMultiValue} : multiszProps) => {

    const [lukaszMultiCost, setLukaszMultiCost] = useState(1000)

    function handleLikaszMulti() {

        if (lukaszCount < lukaszMultiCost) {
            return
        }

        setLukaszMulti(lukaszMulti + 1)
        setLukaszCount(lukaszCount - lukaszMultiCost)
        setLukaszMultiCost(lukaszMultiCost * 2.5)
    }

    return (
        <>
            <h1>Multisz(*L/klik)</h1>
            <button onClick={handleLikaszMulti}>KUPUJ ZA {lukaszMultiCost.toFixed(2)}</button>
            <p>Obecny multiLukasz: {(lukaszMulti + lukaszMultiValue).toFixed(4)}</p>
        </>
    )
}

export default Multisz