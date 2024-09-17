'use client'
import { Container } from "react-bootstrap";
import BarraNavegacao from "./BarraNavegacao";


export default function EstruturaPagina({titulo, children}) {
  return (
    <>
        <BarraNavegacao></BarraNavegacao>

        <div className="bg-dark text-white text-center py-3">
            <h1 className="display-5">{titulo}</h1>
        </div>

        <Container className="mt-4">
            {children}
        </Container>
    </>
  )
}
