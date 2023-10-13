import { FC } from "react"
import Layout from "../../layout/Layout"
import { Link } from "react-router-dom";

const CarForAllPoliciesPage: FC<{}> = () => {
    return <Layout>
        <div className="w-100 px-3 p_spaced" style={{ backgroundImage: 'url(/assets/pages/contact/bg_contact.jpg)', backgroundSize: 'contain' }}>
            <div className="container">
                <div className="bg-white p-5">
                    <div className="side side_top mb-3">
                        <h2>“Auto para todos, beneficios únicos”</h2>
                    </div>

                    <h3>
                        Beneficios 
                    </h3>
                    <br />
                    <ul>
                        <li>Te pagamos la gasolina de tu carro por un mes.</li>
                        <li>Garantía por 6 meses sin límite de KM.</li>
                        <li>Bono del 20% de descuento en taller para tu próximo mantenimiento.</li>
                        <li>Descuentos hasta de 2 millones.</li>
                    </ul>

                    <h3>
                        Términos y Condiciones de la Campaña  
                    </h3>
                    <br />
                    <ul>
                        <li><strong>Organizador:</strong> La presente campaña es promovida por WCAR, ubicada en la calle 98 a 69 b 35.</li>
                        <li><strong>Elegibilidad:</strong> Está abierta a todos los residentes legales de Colombia, mayores de 18 años.</li>
                        <li><strong>Periodo de la Campaña:</strong> Válida para compras realizadas entre el 11 y 25 de octubre de 2023. Todos los vehículos deben ser entregados a más tardar el 7 de noviembre de 2023.</li>
                        <li><strong>Beneficio de Gasolina:</strong> WCAR concederá bonos de gasolina valorados en $500,000 COP, basados en un consumo promedio de 35 KM/Gal y un uso estimado de 900 km mensuales. Los bonos son canjeables hasta 30 días después de la entrega del vehículo, en las estaciones afiliadas. WCAR no asume responsabilidad por fluctuaciones en los precios del combustible o cambios en el consumo del vehículo.</li>
                        <li><strong>Garantía Extendida:</strong> Los vehículos comprados disfrutarán de una garantía de 6 meses sin restricción de kilometraje. Consulta los términos específicos y exclusiones enwww.wcar.co o en el documento proporcionado durante la entrega.</li>
                        <li><strong>Bono de Mantenimiento:</strong> Los beneficiarios obtendrán un 20% de descuento en su próximo mantenimiento en talleres WCAR. No es convertible en efectivo o aplicable a otros servicios.</li>
                        <li><strong>Descuentos Adicionales:</strong> Se aplican descuentos de hasta $2,000,000 COP en vehículos seleccionados, sujetos a disponibilidad.</li>
                        <li><strong>Restricciones:</strong> Los beneficios de esta campaña no son combinables con otras ofertas o promociones. Los compradores deben cumplir con los requisitos legales para la adquisición y registro de vehículos.</li>
                        <li><strong>Exención de Responsabilidad:</strong> WCAR no será responsable por incidentes o accidentes ocurridos durante el uso del vehículo. Los propietarios son responsables del mantenimiento y seguro adecuado.</li>
                        <li><strong>Aceptación de los Términos:</strong> Participar en la campaña implica la aceptación total de estos términos y condiciones, sin reservas ni condiciones.</li>
                    </ul>

    
                    <p>Para consultas adicionales, contáctanos en servicioalcliente@wcar.co o visita <Link to="https://wcar.co/">www.wcar.co </Link></p>
                </div>
            </div>
        </div>
    </Layout >

}

export default CarForAllPoliciesPage;