import React from 'react'
import Value from './Value'

export default function Counter() {
  return (
    <div className='counter'>
        <Value counter={2} />
        <div className='btns'>
            <button>Incrementer</button>    
            <button>Decrementer</button>    
            <button>Initialiser</button>    
        </div> 
        <fieldset>
            <legend>Pas d'incrémentation</legend>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
        </fieldset>
        <fieldset>
            <legend>Pas de decrémentation</legend>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
        </fieldset>
    </div>
  )
}
