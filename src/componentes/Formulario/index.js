import CampoTexto from '../CampoTexto/'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const grupos = [
        'Favoritos',
        'Assistindo',
        'Sitcom',
        'Animação',
        'Ruim'

    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card da série/filme</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome da série ou filme" />
                <CampoTexto label="Nota" placeholder="Digite a nota de 0 a 10" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label='Grupos' itens={grupos}/>
            </form>
        </section>
    )
}

export default Formulario