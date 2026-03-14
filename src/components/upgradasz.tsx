import {type Dispatch, useEffect, useState} from "react"
import "../styles/upgradasz.css"

type upgradaszProps = {

    lukaszCount: number,
    lukaszIncrement: number,
    lukaszMulti: number,
    lukaszIncrementValue: number,
    lukaszMultiValue: number,
    up3Value: number,
    boughtIncrementAmount: number,
    globalIncrementaszMultiplier: number

    setLukaszCount: React.Dispatch<React.SetStateAction<number>>,
    setLukaszIncrement: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMulti: React.Dispatch<React.SetStateAction<number>>,
    setLukaszIncrementValue: React.Dispatch<React.SetStateAction<number>>,
    setLukaszMultiValue: React.Dispatch<React.SetStateAction<number>>,
    setUp3Value: React.Dispatch<React.SetStateAction<number>>
    setUp5Value: React.Dispatch<React.SetStateAction<number>>
    setGlobalIncrementaszMultiplier: Dispatch<React.SetStateAction<number>>

    canShowMultisz: boolean,
}


const Upgradasz = ( {
                        lukaszCount,
                        lukaszIncrement,
                        lukaszMulti,
                        lukaszMultiValue,
                        lukaszIncrementValue,
                        boughtIncrementAmount,
                        up3Value,
                        setLukaszCount,
                        setLukaszIncrement,
                        setLukaszMulti,
                        setLukaszMultiValue,
                        setLukaszIncrementValue,
                        setUp3Value,
                        canShowMultisz,
                        setUp5Value,
                        globalIncrementaszMultiplier,
                        setGlobalIncrementaszMultiplier,
}: upgradaszProps ) => {

    const [up1, setUp1] = useState(false)
    const [up2, setUp2] = useState(false)
    const [up3, setUp3] = useState(false)
    const [up4, setUp4] = useState(false)
    const [up5, setUp5] = useState(false)

    function handleUpgrade1() {
        if(!up1 && lukaszCount >= 100) {
            const newMultiplier = globalIncrementaszMultiplier * 1.5;
            setUp1(true);
            setGlobalIncrementaszMultiplier(newMultiplier);

            setLukaszIncrementValue(prev => Math.round(prev * 1.5 * 100) / 100);
            setLukaszIncrement(prev => prev * 1.5);
            setLukaszCount(lukaszCount - 100);
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

    function handleUpgrade3() {
        if(!up3 && lukaszCount >= 5000) {
            setUp3(true)
            setUp3Value(up3Value * 1.2)
            setLukaszCount(lukaszCount - 5000)
        } else
            return;
    }

    function handleUpgrade4() {
        if(!up4 && lukaszCount >= 100000) {
            const newMultiplier = globalIncrementaszMultiplier * 3;
            setUp4(true);
            setGlobalIncrementaszMultiplier(newMultiplier);

            setLukaszIncrementValue(prev => Math.round(prev * 3 * 100) / 100);
            setLukaszIncrement(prev => prev * 3);
            setLukaszCount(lukaszCount - 100000 )
        } else {
            return;
        }
    }

    function handleUpgrade5() {
        if(!up5 && lukaszCount >= 500000) {
            setUp5(true);
            setUp5Value(0.05);
            const currentBonus = 1 * (1 + (boughtIncrementAmount / 20));
            setLukaszIncrementValue(Math.round(currentBonus*globalIncrementaszMultiplier * 100) / 100);

            setLukaszCount(lukaszCount - 500000 )

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

                {canShowMultisz &&
                <section className="upgradasz" id="upgradasz-three">
                    <p>Upgradasz3</p>
                    <p>Multisz * 1.2</p>
                    <button disabled={up3} onClick={handleUpgrade3}>5000 Lukaszów</button>
                </section>}

                {canShowMultisz /* Zmienić to tak, żeby upgrade pojawiał się po automatyzacji (10k lukasz) */ &&
                    <section className="upgradasz" id="upgradasz-three">
                        <p>Upgradasz4</p>
                        <p>Incrementasz * 3</p>
                        <button disabled={up4} onClick={handleUpgrade4}>100k Lukaszów</button>
                    </section>}

                {canShowMultisz /* Zmienić to tak, żeby upgrade pojawiał się po automatyzacji (10k lukasz) */ &&
                    <section className="upgradasz" id="upgradasz-three">
                        <p>Upgradasz5</p>
                        <p>Incrementasz bazuje na kupionych inkrementaszach</p>
                        <button disabled={up5} onClick={handleUpgrade5}>500k Lukaszów</button>
                    </section>}


            </section>


        </>
    )
}

export default Upgradasz;