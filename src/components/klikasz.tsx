
type KlikaszProps = {
    lukaszCount: number
    lukaszIncrement: number
    lukaszMulti: number
    lukaszMultiValue: number
    setLukaszCount: React.Dispatch<React.SetStateAction<number>>
}

const Klikasz = ( {lukaszCount, setLukaszCount, lukaszIncrement, lukaszMulti, lukaszMultiValue}: KlikaszProps ) => {

    function handleLikaszClick() {
        setLukaszCount(lukaszCount + lukaszIncrement * (lukaszMulti + lukaszMultiValue))
    }



    return (
        <>
            <p>Lukasze: {lukaszCount.toFixed(2)} </p>
            <button onClick={handleLikaszClick}> DODAJ {(lukaszIncrement * (lukaszMulti + lukaszMultiValue)).toFixed(4)} LUKASZÓW </button>
        </>
    )
}

export default Klikasz


