import { useState } from "react"

import StampaEsercizio from "../components/StampaEsercizio"


const Esercizio3 = () => {

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState('')
    const [history, setHistory]= useState([])

    const handleIncrement = () => {
        if(counter == 10) {
            return
        }
        setHistory([...history, "+1"])
        setCounter((con) => con+1)
        setColor('blue')
    }

    const handleDecrement = () => {
        if(counter == 0) {
            setColor('white')
            return
        }
        setHistory([...history, "-1"])
        setCounter((con) => con-1)
        setColor('orange')
    }

    const handleReset = () => {
        setHistory([...history, "reset"])
        setColor('white')
        setCounter(0)
    }


    return (
        <>
        <StampaEsercizio numero="3"/>
        <div className="mt-10">
            <h2 className="font-semibold text-2xl">Contatore</h2>
            <div>
                <p style={{color: color}}>{counter}</p>
            </div>
            <div className="flex gap-2 mt-5">
                <button onClick={handleIncrement} className="rounded-3xl bg-sky-600 p-2">Increment</button>
                <button onClick={handleDecrement} className="rounded-3xl bg-amber-600 p-2">Decrement</button>
                <button onClick={handleReset} className="rounded-3xl bg-emerald-500 p-2">Reset</button>

            </div>
            <div className="cronologia mt-5">
                <ul className="flex gap-2">
                {
                    history.map((element, index) => {
                        return(
                            <li key={index}>{element}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Esercizio3