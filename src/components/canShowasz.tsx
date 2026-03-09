import Klikasz from "./klikasz.tsx";
import Incrementasz from "./incrementasz.tsx";
import {useEffect} from "react";

type canShowaszProps = {
    lukaszCount: number;
    setCanShowIncrementasz: React.Dispatch<React.SetStateAction<boolean>>;
    setCanShowUpgradasz: React.Dispatch<React.SetStateAction<boolean>>;
    setCanShowMultisz: React.Dispatch<React.SetStateAction<boolean>>;
}


const CanShowasz = ({lukaszCount, setCanShowIncrementasz, setCanShowUpgradasz, setCanShowMultisz}: canShowaszProps) => {

    useEffect(() => {
        if(lukaszCount >= 10) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCanShowIncrementasz(true)
        }
    }, [lukaszCount])

    useEffect(() => {
        if(lukaszCount >= 100) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCanShowUpgradasz(true)
        }
    }, [lukaszCount])

    useEffect(() => {
        if(lukaszCount >= 1000) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCanShowMultisz(true)
        }
    }, [lukaszCount]);


    return (
        <>

        </>
    )
}

export default CanShowasz;