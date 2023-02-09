import React from "react";

export default props => [
    <h1 key={'nome1'}>Bom dia {props.nome}</h1>,
    <h2 key={'nome2'}>Até Breve</h2>
    ]

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até Breve</h2>
//     </div>

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}</h1>
//         <h2>Até Breve</h2>
//     </React.Fragment>