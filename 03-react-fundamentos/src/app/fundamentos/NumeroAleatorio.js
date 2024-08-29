

export default function NumeroAleatorio() {

    let aleatorio = ((Math.random() * 10) + 3);
    aleatorio = aleatorio.toFixed(0);
    
  return (
    <>
        <h1>Gerando Número Aleatório</h1>
        <p>{aleatorio}</p>
    </>
  )
}
