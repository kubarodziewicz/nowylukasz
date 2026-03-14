import {useState} from "react";
import '../styles/multisz.css'

type multiszProps = {
    lukaszCount: number,
    lukaszMulti: number,
    lukaszMultiValue: number,
    boughtMultiszAmount: number,

    up3Value: number,

    setLukaszCount: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMulti: React.Dispatch<React.SetStateAction<number>>,
    setBoughtMultiszAmount: React.Dispatch<React.SetStateAction<number>>
}

const Multisz = ({lukaszCount, lukaszMulti, boughtMultiszAmount, setLukaszMulti, setLukaszCount, lukaszMultiValue, setBoughtMultiszAmount, up3Value} : multiszProps) => {

    const [lukaszMultiCost, setLukaszMultiCost] = useState(1000)

    function handleLikaszMulti() {

        if (lukaszCount < lukaszMultiCost) {
            return
        }

        setLukaszMulti(lukaszMulti + 1)
        setLukaszCount(lukaszCount - lukaszMultiCost)
        setLukaszMultiCost(lukaszMultiCost * 2.5)
        setBoughtMultiszAmount(boughtMultiszAmount + 1)
    }

    return (
        <>
            <h1>Multisz(*L/klik)</h1>

            <section className="multiszButtonSection">
                <button onClick={handleLikaszMulti}>KUPUJ ZA {lukaszMultiCost.toFixed(2)}</button>
                <p>poziom: {boughtMultiszAmount}</p>
            </section>

            <p>Obecny multiLukasz: {((lukaszMulti + lukaszMultiValue) * up3Value).toFixed(4)}</p>
        </>
    )
}

export default Multisz