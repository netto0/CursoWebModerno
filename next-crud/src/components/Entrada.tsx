interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input 
            type={props.tipo}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`
            border border-purple-500 rounded-lg bg-gray-50
            focus:outline-none px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `}
            />
            
        </div>
    )
}