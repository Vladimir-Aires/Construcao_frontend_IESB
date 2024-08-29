export default function NumeroMaior(props){
    
    const getProps = () => {
        if(props.numA > props.numB){
            return props.numA
        } else{
            return props.numB
        }
    }



    return(
        <>
            <h3>Componente que define o número maior</h3>
            <p>Números recebidos: {props.numA} e {props.numB}</p>
            <p>O número maior é: {getProps()}</p>
            
        </>
    )
}