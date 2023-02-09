import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome= "Guilherme"/> 
        <Multi.BoaNoite nome= "Bruno"/>
    </div>
, document.getElementById('root'))