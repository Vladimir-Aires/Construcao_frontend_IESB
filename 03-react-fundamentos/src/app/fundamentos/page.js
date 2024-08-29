import { Fragment } from "react";
import MeuComponente from "./meuComponente";
import NumeroMaior from "./NumeroMaior";
import NumeroAleatorio from "./NumeroAleatorio";
import Cabecalho from "./Cabecalho";
import Familia from "./Familia";
import Filho from "./Filho";
import ImagemAleatoria from "./ImagemAleatoria";

export default function FundamentosPage(){

    return(
        <Fragment>
            <Cabecalho titulo ='SOBRE REACT' descricao='Aprendendo sobre propriedades, componentes, estilos CSS em react, etc'></Cabecalho>
            <hr></hr>
            <h1>Apresentações</h1>
            <p>
                Testando Fragmentos react
            </p> <br />
            <MeuComponente />
            <hr></hr>
            <NumeroMaior numA = {2} numB = {5} /> <hr/>

            <NumeroAleatorio></NumeroAleatorio>
            <NumeroAleatorio></NumeroAleatorio>
            <NumeroAleatorio></NumeroAleatorio>

            <hr></hr>

            <Familia nomeFamilia='Aires'>
                <Filho nome='Vladimir' sobrenome='Aires' />
                <Filho nome='Marco' sobrenome='Aires' />
            </Familia>

            <hr />

            <ImagemAleatoria></ImagemAleatoria>
            <ImagemAleatoria></ImagemAleatoria>
            
            </Fragment>

    
    )
}