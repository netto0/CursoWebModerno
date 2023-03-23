import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="crimson"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="darkviolet"/>
            <Navegador destino="/jsx" texto="Jsx" />
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
            <Navegador destino="cliente/sp-2/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="Estado" cor="orange"/>
            <Navegador destino="/integracao_1" texto="Integração #01" cor="purple"/>
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="purple"/>
        </div>
    )
}