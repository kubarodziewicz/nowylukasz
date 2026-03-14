
type KlikaszProps = {
    lukaszCount: number
    lukaszIncrement: number
    lukaszMulti: number
    lukaszMultiValue: number
    up3Value: number

    setLukaszCount: React.Dispatch<React.SetStateAction<number>>
}

const Klikasz = ( {lukaszCount, setLukaszCount, lukaszIncrement, lukaszMulti, lukaszMultiValue, up3Value}: KlikaszProps ) => {

    function handleLikaszClick() {
        setLukaszCount(lukaszCount + lukaszIncrement * (lukaszMulti + lukaszMultiValue) * up3Value)
    }



    return (
        <>
            <p>Lukasze: {lukaszCount.toFixed(2)} </p>
            <button onClick={handleLikaszClick}> DODAJ {(lukaszIncrement * (lukaszMulti + lukaszMultiValue) * up3Value).toFixed(4)} LUKASZÓW </button>
        </>
    )
}

export default Klikasz


