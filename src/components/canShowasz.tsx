// import Klikasz from "./klikasz.tsx";
// import Incrementasz from "./incrementasz.tsx";
import {useEffect} from "react";

type canShowaszProps = {
    lukaszCount: number;
    setCanShowIncrementasz: React.Dispatch<React.SetStateAction<boolean>>;
    setCanShowUpgradasz: React.Dispatch<React.SetStateAction<boolean>>;
    setCanShowMultisz: React.Dispatch<React.SetStateAction<boolean>>;
    setCanShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}


const CanShowasz = ({lukaszCount, setCanShowIncrementasz, setCanShowUpgradasz, setCanShowMultisz, setCanShowNavbar}: canShowaszProps) => {

    useEffect(() => {
        if(lukaszCount >= 10) {
             
            setCanShowIncrementasz(true)
        }
    }, [lukaszCount])

    useEffect(() => {
        if(lukaszCount >= 100) {
             
            setCanShowUpgradasz(true)
        }
    }, [lukaszCount])

    useEffect(() => {
        if(lukaszCount >= 1000) {
             
            setCanShowMultisz(true)
        }
    }, [lukaszCount]);

    useEffect(() => {
        if(lukaszCount >= 10000) {

            setCanShowNavbar(true)
        }
    }, [lukaszCount]);


    return (
        <>

        </>
    )
}

export default CanShowasz;