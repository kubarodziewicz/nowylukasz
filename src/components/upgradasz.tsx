import {useEffect, useState} from "react"
import "../styles/upgradasz.css"

type upgradaszProps = {

    lukaszCount: number,
    lukaszIncrement: number,
    lukaszMulti: number,
    lukaszMultiValue: number,
    setLukaszCount: React.Dispatch<React.SetStateAction<number>>,
    setLukaszIncrement: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMulti: React.Dispatch<React.SetStateAction<number>>,
    lukaszIncrementValue: number,
    setLukaszIncrementValue: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMultiValue: React.Dispatch<React.SetStateAction<number>>,

    canShowMultisz: boolean,
}

const Upgradasz = ( {
                        lukaszCount,
                        lukaszIncrement,
                        lukaszMulti,
                        lukaszMultiValue,
                        setLukaszCount,
                        setLukaszIncrement,
                        setLukaszMulti,
                        setLukaszMultiValue,
                        lukaszIncrementValue,
                        setLukaszIncrementValue,
                        canShowMultisz
}: upgradaszProps ) => {

    const [up1, setUp1] = useState(false)
    const [up2, setUp2] = useState(false)
    const [up3, setUp3] = useState(false)

    function handleUpgrade1() {
        if(!up1 && lukaszCount >= 100) {
            setUp1(true)
            setLukaszIncrementValue(lukaszIncrementValue * 1.5)
            setLukaszIncrement(lukaszIncrement * 1.5)
            setLukaszCount(lukaszCount - 100 )
        } else {
            return;
        }
    }

    function handleUpgrade2() {
        if(!up2 && lukaszCount >= 3000) {
            setUp2(true)
            setLukaszCount(lukaszCount - 3000)
        } else {
            return;
        }
    }

    useEffect(() => {
        if(up2) {
            if(lukaszCount <= 10 ) {
                setLukaszMultiValue(0)
            } else {
                setLukaszMultiValue((Math.log10(lukaszCount) - 1));
            }
            setLukaszCount(lukaszCount)
        }
    }, [lukaszCount])


    return (
        <>
            <h1>Upgradasz</h1>

            <section className="upgradaszSection">
                <section className="upgradasz" id="upgradasz-one">
                    <p>Upgradasz1</p>
                    <p>incrementasz * 1.5 (MEGA DOBRE I WORTH!!!)</p>
                    <button disabled={up1} onClick={handleUpgrade1}>100 Lukaszów</button>
                </section>

                {canShowMultisz &&
                    <section className="upgradasz" id="upgradasz-two">
                        <p>Upgradasz2</p>
                        <p>!! DODAJ MULTISZ NA PODSTAWIE lukasz !! <br/>(obecnie: +{lukaszMultiValue.toFixed(2)})</p>
                        <button disabled={up2} onClick={handleUpgrade2}>3000 Lukaszów</button>
                    </section>
                }

                {/*<section className="upgradasz" id="upgradasz-three">*/}
                {/*    <p>Upgradasz3</p>*/}
                {/*    <p>incrementasz * 1.5 (MEGA DOBRE I WORTH!!!)</p>*/}
                {/*    <button disabled={up3} onClick={handleUpgrade1}>100 Lukaszów</button>*/}
                {/*</section>*/}
            </section>


        </>
    )
}

export default Upgradasz;