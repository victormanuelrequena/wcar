import { FC } from "react"
import Layout from "../../layout/Layout"
import { Link } from "react-router-dom";

const SaleYourCarPage: FC<{}> = () => {
    return <Layout>
        <div className="w-100 px-3 p_spaced" style={{ backgroundImage: 'url(/assets/pages/contact/bg_contact.jpg)', backgroundSize: 'contain' }}>
            <div className="container">
                <div className="bg-white p-5">
                    <div className="side side_top mb-3">
                        <h2>¡Vende tu auto sin tanto rollo!</h2>
                    </div>

                    <h3>
                        Beneficios 
                    </h3>
                    <br />
                    <ul>
                        <li>Bono de recompra por $1,000,000.</li>
                        <li>Beneficio de $500,000 aplicado en los gastos de trámite.</li>
                        <li>Precio calculado técnicamente.</li>
                        <li>Opción de compra, consignación física o virtual.</li>
                    </ul>
                    <p><strong>Vigencia:</strong> del 6 al 26 de Octubre 2023.</p>
                    <h3>
                        Términos y Condiciones de la Campaña  
                    </h3>
                    <br />
                    <ul>
                        <li><strong>Organizador:</strong> La campaña es llevada a cabo por WCAR, ubicada en la calle 98 a 69 b 35.</li>
                        <li><strong>Elegibilidad:</strong> Está abierta a todos los propietarios de automóviles que deseen vender su vehículo y sean residentes legales en Colombia.</li>
                        <li><strong>Periodo de la Campaña:</strong> La campaña será válida del 6 al 26 de octubre de 2023.</li>
                        <li><strong>Bono de Recompra:</strong> Los vendedores recibirán un bono de recompra de $1,000,000 COP, que podrán utilizar dentro de los siguientes 6 meses para adquirir un nuevo vehículo en WCAR. El bono puede ser endosado a un familiar o amigo. No es canjeable por efectivo, otros productos o servicios.</li>
                        <li><strong>Beneficio en Gastos de Trámite:</strong> Se aplicará un descuento de $500,000 COP directamente en los gastos de trámite a cargo del vendedor del auto.</li>
                        <li><strong>Precio Calculado Técnicamente:</strong> WCAR calculará el precio del vehículo basándose en una revisión técnica y comparativa de diversas fuentes de información, como Fasecolda, MercadoLibre, entre otros, para asegurar un precio ajustado al mercado actual.</li>
                        <li><strong>Opciones de Venta:</strong> WCAR ofrece la opción de comprar el vehículo directamente. En caso de no llegar a un acuerdo, el propietario puede optar por una consignación física o virtual, donde WCAR se encargará de la venta del vehículo.</li>
                        <li><strong>Restricciones:</strong> Los beneficios de esta campaña no son combinables con otras ofertas o promociones.</li>
                        <li><strong>Responsabilidades:</strong> Los participantes aceptan y entienden los términos y condiciones al participar en la campaña.</li>
                        <li><strong>Aceptación de los Términos:</strong> Participar en la campaña implica la aceptación total de estos términos y condiciones, sin reservas ni condiciones.</li>

                    </ul>

    
                    <p>Para consultas adicionales, contáctanos en servicioalcliente@wcar.co o visita <Link to="https://wcar.co/">www.wcar.co </Link></p>
                </div>
            </div>
        </div>
    </Layout >

}

export default SaleYourCarPage;