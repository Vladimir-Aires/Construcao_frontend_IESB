

export default function ImagemAleatoria() {
    const aleatorio = Math.round(Math.random() * 10) + 1
    const urlImagem = `https://picsum.photos/100?random=${aleatorio}`
    
  return (
   <>
    <h3>Imagem Aleatória</h3>
    <img src={urlImagem} alt="foto aleatória"/>
   </>
  )
}
