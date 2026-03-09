import {useState} from 'react'
import './styles/App.css'
import Klikasz from "./components/klikasz.tsx";
import Incrementasz from "./components/incrementasz.tsx";
import Multisz from "./components/multisz.tsx";
import Upgradasz from "./components/upgradasz.tsx";
import CanShowasz from "./components/canShowasz.tsx";

function App() {
    const [lukaszCount, setLukaszCount] = useState(0)
    const [lukaszMulti, setLukaszMulti] = useState(1)
    const [lukaszMultiValue, setLukaszMultiValue] = useState(0)
    const [lukaszIncrement, setLukaszIncrement] = useState(1)
    const [lukaszIncrementValue, setLukaszIncrementValue] = useState(1)

    const [canShowIncrementasz, setCanShowIncrementasz] = useState(false)
    const [canShowUpgradasz, setCanShowUpgrades] = useState(false)
    const [canShowMultisz, setCanShowMultisz] = useState(false)


    return (
        <>
            <h1>KLikasz</h1>
            <CanShowasz lukaszCount={lukaszCount} setCanShowIncrementasz={setCanShowIncrementasz} setCanShowUpgradasz={setCanShowUpgrades} setCanShowMultisz={setCanShowMultisz} />
            <Klikasz lukaszCount={lukaszCount} setLukaszCount={setLukaszCount} lukaszIncrement={lukaszIncrement} lukaszMulti={lukaszMulti} lukaszMultiValue={lukaszMultiValue}/>
            { canShowIncrementasz && <Incrementasz setLukaszCount={setLukaszCount} setLukaszIncrement={setLukaszIncrement} lukaszIncrement={lukaszIncrement} lukaszCount={lukaszCount} lukaszIncrementValue={lukaszIncrementValue} /> }
            { canShowUpgradasz && <Upgradasz canShowMultisz={canShowMultisz} lukaszMultiValue={lukaszMultiValue} setLukaszMultiValue={setLukaszMultiValue} lukaszIncrementValue={lukaszIncrementValue} setLukaszIncrementValue={setLukaszIncrementValue} lukaszCount={lukaszCount} lukaszIncrement={lukaszIncrement} lukaszMulti={lukaszMulti} setLukaszCount={setLukaszCount} setLukaszIncrement={setLukaszIncrement} setLukaszMulti={setLukaszMulti}/>}
            { canShowMultisz && <Multisz lukaszMultiValue={lukaszMultiValue} setLukaszCount={setLukaszCount} setLukaszMulti={setLukaszMulti} lukaszCount={lukaszCount} lukaszMulti={lukaszMulti}/> }
        </>
  )
}

export default App
