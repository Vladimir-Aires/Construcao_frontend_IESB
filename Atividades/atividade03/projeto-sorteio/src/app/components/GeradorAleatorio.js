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
        
            <div class='primeiro-conjunto'>
                <div>
                    <h2>Números Sorteados:</h2>
                </div>
                <div>
                    <GeradorAleatorio />
                    <GeradorAleatorio />
                    <GeradorAleatorio />
                    <GeradorAleatorio />
                    <GeradorAleatorio />
                    <GeradorAleatorio />
                </div>
            </div>    
        </>
    )
}





