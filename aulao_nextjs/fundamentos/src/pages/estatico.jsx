import Layout from "../components/Layout"

// export function getStaticProps() {
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

export async function getServerSideProps() {
    const numero = Math.random()
    return {props: {numero}}
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}