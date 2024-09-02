function GeradorAleatorio() {
    const numAleatorio = Math.round(Math.random() * 60);
  return (
    <>
        <span>{numAleatorio}</span>
    </>
  )
}


export default function Conjunto(){
    return(
        <>
            <GeradorAleatorio />
            <GeradorAleatorio />
            <GeradorAleatorio />
            <GeradorAleatorio />
            <GeradorAleatorio />
            <GeradorAleatorio />            
        </>
    )
}





