import style from './fundamentos.module.css';

export default function Cabecalho(props) {

const {titulo, descricao} = props

  return (
    <>
        <h1 style={{textAlign: 'center'}} className={style.titulo}>{titulo}</h1>
        <p style={{textAlign: 'center'}} className={style.descricao}>{descricao}</p>
    </>
  )
}
