import {useState} from "react"
import Pinger from "./pinger.jsx"
import './App.css'

function App() {
    const [pingers, setPingers] = useState([])
    const [computerName, setComputerName] = useState('')

    const addComputer = () => {
        if (computerName !== '') {
            setPingers([...pingers, computerName])
            setComputerName('')
        }
    }

    return (
        <div>
            <div className="computer__box">
                <input
                    onChange={(e) => setComputerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addComputer()}
                    placeholder="Nombre del entrenador"
                    className="computer__box-input"
                    value={computerName}
                    type="text"
                />
                <button onClick={addComputer} className="computer__box-button">Agregar</button>
            </div>
            <div className="pingers__container">
                {pingers.map((pinger) => (
                    <Pinger name={pinger} key={pinger} />
                ))}
            </div>
        </div>
    )

}

export default App
