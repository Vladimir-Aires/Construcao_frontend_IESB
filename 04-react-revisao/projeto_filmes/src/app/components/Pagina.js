import { Container } from "react-bootstrap";
import BarraNavegacao from "./BarraNavegacao";


export default function Pagina({titulo, children}) {
  return (
    <>
        <BarraNavegacao />

        
        <div className="bg-secondary text-white text-center py-2">
            <h1 className="display-5">{titulo}</h1>
        </div>

        <Container className="mt-3">
            {children}
        </Container>
    </>
  )
}
