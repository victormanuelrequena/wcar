import { FC } from "react"
import Layout from "../../layout/Layout"

const SellerPoliciesPage: FC<{}> = () => {
    return <Layout>
        <div className="w-100 px-3 p_spaced" style={{ backgroundImage: 'url(/assets/pages/contact/bg_contact.jpg)', backgroundSize: 'contain' }}>
            <div className="container">
                <div className="bg-white p-5">
                    <div className="side side_top mb-3">
                        <h2>TÉRMINOS Y CONDICIONES COMPRADOR WCAR</h2>
                    </div>
                    <h3>CONDICIONES GENERALES:</h3>
                    <ol>
                        <li>
                            WCAR (en adelante “WCAR” o “LA PLATAFORMA”) es una plataforma tecnológica operada por WCAR SAS (en adelante “EL OPERADOR”), sociedad identificada con NIT 901.566.049-8, que busca generar un espacio para la oferta de vehículos en venta por parte de personas independientes a LA PLATAFORMA y a EL OPERADOR. WCAR proporciona un espacio virtual que permite vincular personas interesadas en vender un vehículo con aquellas interesadas en adquirirlo por medio de un contrato de corretaje. En desarrollo de dicho corretaje, a través de WCAR, EL OPERADOR podrá prestar diferentes servicios relacionados con los trámites de traspaso, intermediación en la consecución de créditos, entre otros.
                        </li>
                        <li>
                            El vehículo cuyo vendedor ha ofrecido a través de WCAR y que el comprador está interesado en adquirir bajo las condiciones del presente contrato, es el que se encuentra en la descripción del vehículo (en adelante “EL VEHÍCULO”) y se especificará en el contexto de cada contrato.
                        </li>
                        <li>
                            En desarrollo de lo anterior, los vehículos ofrecidos en venta no son de propiedad de WCAR sino que le pertenecen a terceras personas interesadas en venderlos exclusivamente a través de LA PLATAFORMA. Por tal motivo, EL COMPRADOR no realizará un negocio jurídico de compraventa con EL OPERADOR sino con el propietario - vendedor del vehículo, utilizando los servicios e intermediación de WCAR. Con la aceptación de las presentes condiciones, EL COMPRADOR declara conocer y aceptar que WCAR no es el vendedor EL VEHÍCULO seleccionado, sino que funge como un intermediario corredor entre el vendedor y EL COMPRADOR. Así mismo, se compromete al cumplimiento de las obligaciones a favor de EL OPERADOR y del vendedor en relación con los servicios, términos y condiciones pactados en el presente documento.
                        </li>
                        <li>
                            Al reservar un vehículo se da inicio al proceso de compraventa por lo cual EL COMPRADOR acepta cumplir con los siguientes términos y condiciones:
                            <ol type="a">
                                <li>
                                    La reserva del vehículo no es una oferta vinculante, por lo tanto WCAR se reserva el derecho de confirmar la disponibilidad del mismo en un plazo no superior a 24 horas.
                                </li>
                                <li>
                                    El proceso de compraventa debe completarse y concretarse dentro de las próximas 72 horas, una vez realizada la confirmación de la disponibilidad del vehículo, so pena de perder la reserva sobre EL VEHÍCULO. (con excepción del proceso de pago mediante crédito financiero, como se explica más adelante).
                                </li>
                                <li>
                                    La reserva no elimina el vehículo reservado de la oferta de vehículos disponibles para otros usuarios. Para estos efectos, WCAR se reserva el derecho de confirmar la disponibilidad del vehículo durante las 24 horas posteriores a la reserva de este.
                                </li>
                                <li>
                                    Al momento de realizar la EL COMPRADOR deberá cancelar $500,000 o un valor superior si así lo desea, dinero que se tendrá como abono para el pago del precio a título de arras confirmatorias.
                                </li>
                                <li>
                                    En caso de que tal que EL COMPRADOR desee ejercer el Derecho de retracto consagrado en el artículo 47 de la ley 1480 de 2011, deberá hacerlo dentro de los cinco (5) días hábiles posteriores a la reserva de EL VEHÍCULO. Únicamente será reembolsado el dinero cancelado como anticipo por fuera del término anteriormente mencionado, si le fuere negada la aprobación de un crédito en caso de que se haya escogido ese medio de pago o que EL VEHÍCULO ya no se encuentre disponible.
                                </li>
                                <li>
                                    EL VEHÍCULO que EL COMPRADOR ha seleccionado ha sido previamente avaluado y peritado por WCAR, quien ha sugerido el precio y demás condiciones de venta, las cuales a su vez han sido aceptadas por su propietario - vendedor.
                                </li>
                                <li>
                                    Con la firma del presente documento, EL COMPRADOR acepta conocer que El VEHÍCULO es usado y que por lo tanto puede ser vendido sin ningún tipo de garantía.
                                </li>
                            </ol>
                        </li>
                        <li>
                            CONDICIONES PARA EL PAGO DEL VEHÍCULO:
                            <ol type="a">
                                <li>
                                    EL COMPRADOR cuenta con 72 horas contadas a partir del momento de la reserva de EL VEHÍCULO para cumplir con las diferentes etapas del proceso de compra, incluida la legalización del pago del precio a través de WCAR.
                                    Dicho plazo podrá ser modificado por WCAR siempre y cuando se estipule en el presente documento o como anexo.
                                </li>
                                <li>
                                    El valor total a pagar corresponde al precio de EL VEHÍCULO anunciado, más los valores adicionales que le serán liquidados como: domicilio, impuestos, traspaso, honorarios de trámites y alistamiento. Adicionalmente y solo en caso de solicitarlo, se generarán cobros por concepto de seguros, accesorios, garantía extendida o cualquier otro.
                                </li>
                                <li>
                                    WCAR no será responsable por variación en el precio indicado en caso de que dicha variación sea producto de hechos ajenos a su control, como lo son diferencias en los gastos de trámites, pago de impuestos o cualquier otro.
                                </li>
                                <li>
                                    WCAR no radicará los documentos para el proceso de traspaso de EL VEHÍCULO hasta tanto no se encuentre acreditado el pago.
                                </li>
                            </ol>
                        </li>
                        <li>
                            CONDICIONES PARA LA ENTREGA DEL VEHÍCULO:
                            <ol type="a">
                                <li>
                                    EL VEHÍCULO se entregará posterior a la acreditación total del valor a pagar a WCAR, el cual se especifica en CONDICIONES PARA EL PAGO DEL VEHÍCULO literal b.
                                </li>
                                <li>
                                    EL VEHÍCULO se entregará una vez se haya emitido la tarjeta de propiedad a nombre del cliente comprador.
                                </li>
                                <li>
                                    Si EL COMPRADOR desea que EL VEHÍCULO se entregue con la radicación del proceso de traspaso, deberá firmar un pagaré por los posibles daños ocasionados al antiguo propietario y deberá contar con un seguro contra todo riesgo activo.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </Layout >

}

export default SellerPoliciesPage;