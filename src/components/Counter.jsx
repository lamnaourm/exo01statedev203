import React, { useState } from 'react'
import Value from './Value'

export default function Counter() {

    const [compteur, setCompteur] = useState(0);
    const [pasI, setPasI] = useState(1);
    const [pasD, setPasD] = useState(1);

    return (
        <div className='counter'>
            <Value counter={compteur} />
            <div className='btns'>
                <button onClick={() => setCompteur(c => c+pasI)}>Incrementer</button>
                <button onClick={() => setCompteur(c => c-pasD)}>Decrementer</button>
                <button onClick={() => {setCompteur(0); setPasI(1); setPasD(1);}} disabled={compteur===0}>Initialiser</button>
            </div>
            <fieldset>
                <legend>Pas d'incrémentation</legend>
                <button onClick={() => setPasI(1)} disabled={pasI===1}>1</button>
                <button onClick={() => setPasI(2)} disabled={pasI===2}>2</button>
                <button onClick={() => setPasI(3)} disabled={pasI===3}>3</button>
                <button onClick={() => setPasI(4)} disabled={pasI===4}>4</button>
            </fieldset>
            <fieldset>
                <legend>Pas de decrémentation</legend>
                <button onClick={() => setPasD(1)} disabled={pasD===1}>1</button>
                <button onClick={() => setPasD(2)} disabled={pasD===2}>2</button>
                <button onClick={() => setPasD(3)} disabled={pasD===3}>3</button>
                <button onClick={() => setPasD(4)} disabled={pasD===4}>4</button>
            </fieldset>
        </div>
    )
}
