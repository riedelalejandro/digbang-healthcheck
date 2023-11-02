import { useState } from 'react'
import axios from 'axios'
import c from 'classnames'
import './pinger.css'

// eslint-disable-next-line react/prop-types
function Pinger({ name }) {
    const [inputValue, setInputValue] = useState('https://')
    const [success, setSuccess] = useState(false)
    const [pinged, setPinged] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setPinged(true)
        setLoading(true)

        axios.get(`${inputValue}`)
            .then((res) => {
                console.log(res.data)
                setSuccess(true)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setSuccess(false)
                setLoading(false)
            })
    }

    return (
        <div className="pinger">
            <div className="pinger__title">IP o ruta para <span className="pinger__name">{name}</span></div>
            <div className="pinger__box">
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="https://..."
                    className="pinger__input"
                    value={inputValue}
                    type="text"
                />
                <button onClick={handleClick} className="pinger__button">Ping</button>
            </div>
            {loading && <div className="pinger__loading"><div className="pinger__loading-pokeball" /></div>}
            {pinged && !loading && (
                <div className={c('pinger__status-box', success ? 'success' : 'failed')}>
                    {success ? <div>Conexión exitosa :)</div> : <div>Conexión Fallida :(</div>}
                </div>
            )}
        </div>
    )

}

export default Pinger
