import {useEffect, useState} from 'react'
import './styles/App.css'
import Klikasz from "./components/klikasz.tsx";
import Incrementasz from "./components/incrementasz.tsx";
import Multisz from "./components/multisz.tsx";
import Upgradasz from "./components/upgradasz.tsx";
import CanShowasz from "./components/canShowasz.tsx";

function App() {
    const [lukaszCount, setLukaszCount] = useState(1)

    const [lukaszMulti, setLukaszMulti] = useState(1)
    const [lukaszMultiValue, setLukaszMultiValue] = useState(0)
    const [boughtMultiszAmount, setBoughtMultiszAmount] = useState(0)
    const [globalIncrementaszMultiplier, setGlobalIncrementaszMultiplier] = useState(1);


    const [up3Value, setUp3Value] = useState(1)
    const [up5Value, setUp5Value] = useState(0)


    const [lukaszIncrement, setLukaszIncrement] = useState(1)
    const [lukaszIncrementValue, setLukaszIncrementValue] = useState(1)
    const [boughtIncrementAmount, setBoughtIncrementAmount] = useState(0)

    const [canShowIncrementasz, setCanShowIncrementasz] = useState(false)
    const [canShowUpgradasz, setCanShowUpgrades] = useState(false)
    const [canShowMultisz, setCanShowMultisz] = useState(false)
    const [canShowNavbar, setCanShowNavbar] = useState(false)

    const [mainTabWidth, setMainTabWidth] = useState(100)




    useEffect(() => {
        if(canShowNavbar) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMainTabWidth(86)
        }
    }, [canShowNavbar])


    return (
        <>
            <h1 className="skibidiWojtekPiec">KLikasz</h1>

            {
                canShowNavbar &&
                    <section className="navBar">
                        <p className="automaniasz">Automationasz</p>
                    </section>
            }


            <section className="mainTab" style={ {width: `${mainTabWidth}%`} }>
                <CanShowasz
                    lukaszCount={lukaszCount}
                    setCanShowIncrementasz={setCanShowIncrementasz}
                    setCanShowUpgradasz={setCanShowUpgrades}
                    setCanShowMultisz={setCanShowMultisz}
                    setCanShowNavbar={setCanShowNavbar}/>

                <Klikasz
                    up3Value={up3Value}
                    lukaszCount={lukaszCount}
                    setLukaszCount={setLukaszCount}
                    lukaszIncrement={lukaszIncrement}
                    lukaszMulti={lukaszMulti}
                    lukaszMultiValue={lukaszMultiValue}/>

                { canShowIncrementasz &&
                    <Incrementasz
                        boughtIncrementAmount={boughtIncrementAmount}
                        setBoughtIncrementAmount={setBoughtIncrementAmount}
                        setLukaszCount={setLukaszCount}
                        setLukaszIncrement={setLukaszIncrement}
                        lukaszIncrement={lukaszIncrement}
                        lukaszCount={lukaszCount}
                        lukaszIncrementValue={lukaszIncrementValue}
                        up5Value={up5Value}
                        setLukaszIncrementValue={setLukaszIncrementValue}
                        globalIncrementaszMultiplier={globalIncrementaszMultiplier}
                        setGlobalIncrementaszMultiplier={setGlobalIncrementaszMultiplier}/> }

                { canShowUpgradasz &&
                    <Upgradasz
                        canShowMultisz={canShowMultisz}
                        lukaszMultiValue={lukaszMultiValue}
                        setLukaszMultiValue={setLukaszMultiValue}
                        lukaszIncrementValue={lukaszIncrementValue}
                        boughtIncrementAmount={boughtIncrementAmount}
                        setLukaszIncrementValue={setLukaszIncrementValue}
                        lukaszCount={lukaszCount} lukaszIncrement={lukaszIncrement}
                        lukaszMulti={lukaszMulti} setLukaszCount={setLukaszCount}
                        setLukaszIncrement={setLukaszIncrement}
                        setLukaszMulti={setLukaszMulti}
                        setUp3Value={setUp3Value}
                        up3Value={up3Value}
                        setUp5Value={setUp5Value}
                        globalIncrementaszMultiplier={globalIncrementaszMultiplier}
                        setGlobalIncrementaszMultiplier={setGlobalIncrementaszMultiplier}/>}


                { canShowMultisz &&
                    <Multisz up3Value={up3Value}
                             lukaszMultiValue={lukaszMultiValue}
                             setLukaszCount={setLukaszCount}
                             setLukaszMulti={setLukaszMulti}
                             lukaszCount={lukaszCount}
                             lukaszMulti={lukaszMulti}
                             boughtMultiszAmount={boughtMultiszAmount}
                             setBoughtMultiszAmount={setBoughtMultiszAmount}/>
                }
            </section>

        </>
  )
}

export default App
