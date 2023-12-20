import { FC } from "react";
import Layout from "../../layout/Layout";

const TermAndConditions: FC<{}> = () => {
    return (
        <Layout>
            <div
                className="w-100 px-3 p_spaced"
                style={{ backgroundImage: "url(/assets/pages/contact/bg_contact.jpg)", backgroundSize: "contain" }}
            >
                <div className="container">
                    <div className="bg-white p-5">
                        <div className="side side_top mb-3">
                            <h2>Términos y condiciones garantía vehículos WCAR</h2>
                        </div>
                        <div className="side side_top mb-3">
                            <h4>Aclaración Importante respecto de la garantía de vehículos usados</h4>
                        </div>
                        <ul>
                            <li>
                                WCAR S.A.S. identificada con NIT 901.566.049-8, en adelante WCAR, informa al comprador
                                que, de acuerdo con lo establecido en el artículo 8 de la Ley 1480 de 2011, conocida
                                como el Estatuto del Consumidor, los productos usados pueden ser vendidos sin garantía.
                            </li>
                            <li>
                                Se pone en conocimiento del comprador que este vehículo se vende sin garantía legal por
                                tratarse de un vehículo usado respecto del cual el término de garantía ya expiró.
                            </li>
                            <li>
                                Sin embargo, para brindar una mayor satisfacción a sus clientes y como una buena
                                práctica comercial, WCAR ofrece una garantía adicional sobre piezas, componentes y
                                sistemas del vehículo, que cubre únicamente los aspectos especificados en la sección
                                "Cobertura de la Garantía".
                            </li>
                            <li>
                                . Así mismo, el comprador reconoce y acepta que está adquiriendo un vehículo usado, y
                                que, por lo tanto, sus componentes mecánicos han estado sometidos a desgaste y fatiga
                                natural que acarrea su uso.
                            </li>
                            <li>
                                También reconoce, que, de conformidad con lo estipulado en la ley, está informado y
                                acepta que el vehículo es vendido sin la garantía legal otorgada por el fabricante y/o
                                importador y únicamente cuenta con la garantía adicional respecto de los componentes
                                previstos en la sección “Cobertura de la Garantía”.
                            </li>
                            <li>
                                También reconoce, que, de conformidad con lo estipulado en la ley, está informado y
                                acepta que el vehículo es vendido sin la garantía legal otorgada por el fabricante y/o
                                importador y únicamente cuenta con la garantía adicional respecto de los componentes
                                previstos en la sección “Cobertura de la Garantía”.
                            </li>
                            <li>
                                De igual manera, WCAR indica al comprador que la intervención mecánica y/o diagnósticos
                                que se efectúen como parte de la garantía que aquí se establece, pueden ser realizados
                                en talleres propios de WCAR o en aquellos autorizados por la empresa, sin la necesidad
                                de que sean específicamente de la marca del vehículo adquirido.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Término de la Garantía</h4>
                        </div>
                        <ul>
                            <li>
                                La garantía proporcionada por WCAR será efectiva desde la fecha de entrega física del
                                vehículo al cliente comprador y tendrá una duración máxima de seis (6) meses, sin límite
                                de kilometraje.
                            </li>
                            <li>
                                La garantía aquí conferida, aplica exclusivamente a vehículos modelo 2015 en adelante,
                                que están expresamente señalados con garantía.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Cobertura de la Garantía</h4>
                        </div>
                        <p>
                            La garantía otorgada por WCAR cubre únicamente los siguientes componentes, sistemas del
                            vehículo y aspectos legales:
                        </p>
                        <ul>
                            <li>
                                MOTOR: Árbol de levas, Balancines, Bielas, Bloque, Bomba de aceite, Pernos, Camisas de
                                pistón, Cigüeñal, Cilindros, Cojinetes/Metales, Culata, Muelles válvulas, Pistones,
                                Anillos, Válvulas admisión/escape, Buzos.
                            </li>
                            <li>
                                CHASIS: Chasis sin alteraciones y dentro de las especificaciones y medidas del
                                fabricante, pudiéndose presentar correctas modificaciones en los frontales, paneles,
                                estribos y costados (Piezas que vienen como repuestos originales o alternativo para
                                cambio y que no afecten el funcionamiento y la línea del vehículo), cumpliendo de esta
                                forma los estándares de un vehículo usado que generan un comportamiento normal y seguro.
                            </li>
                            <li>
                                CAJA DE CAMBIO (STD/AUT/CVT): Incluye Árboles, Engranajes/piñones, Horquilla selectora,
                                Bomba de Aceite, Convertidor de par, Sensor de posición palanca Automática, Bloque de
                                válvulas (excluidos solenoides de cambio).
                            </li>
                            <li>
                                DIFERENCIAL: Corona, Piñón de ataque, Planetario, Satélites, Flechas laterales de
                                diferencial trasero, Engranaje reducción.
                            </li>
                            <li>
                                SISTEMA DE DIRECCIÓN: Bomba de aceite, Cajas de dirección (mecánica, hidráulica, electro
                                asistida), Columna de dirección (mecánica y electrónica).
                            </li>
                            <li>
                                EMBRAGUE: Cilindro maestro, Cilindro esclavo, Chicote de embrague, Collarín de empuje,
                                Horquilla de empuje, Plato de presión, Balero/Buje piloto.
                            </li>
                            <li>
                                FRENOS: Módulo de ABS, Bomba de freno (Cilindro Maestro), Servofreno, Mordazas/Cálipers,
                                y más.
                            </li>
                            <li>
                                AIRE ACONDICIONADO / CLIMATIZADO: Deshidratador, Compresor, Condensador, Evaporador,
                                Válvula de expansión, Módulo de mando electrónico.
                            </li>
                            <li>
                                SISTEMA DE ENFRIAMIENTO: Bomba de agua, Fan clutch (eléctrico y viscoso), Moto
                                ventilador, Radiador, y más.
                            </li>
                            <li>
                                SISTEMA DE ALIMENTACIÓN: Sensor de presión de gasolina, Bomba de combustible,
                                Inyectores, Turbocompresor, Caja de mariposa mecánica, y más.
                            </li>
                            <li>
                                SISTEMA ELÉCTRICO: Béndix, Bobina de encendido, PCM, Alternador, Motor de calefacción,
                                Motores varios, Actuadores de seguros.
                            </li>
                            <li>
                                SUSPENSIÓN: Barra estabilizadora, Barras de torsión, Rótulas, y otros componentes clave.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Elementos no cubiertos por la garantía</h4>
                        </div>
                        <ul>
                            <li>
                                Elementos Consumibles: entendidos como la sustitución de elementos como aceites,
                                lubricantes, filtros, baterías, neumáticos y cualquier otro componente consumible.
                            </li>
                            <li>
                                Software: Actualizaciones, programaciones o cargas de software de cualquier módulo
                                electrónico del vehículo.
                            </li>
                            <li>
                                Diagnósticos No Cubiertos: Los costos asociados a diagnósticos de averías que no están
                                cubiertas por la garantía.
                            </li>
                            <li>
                                Mantenimiento Preventivo: Operaciones de mantenimiento periódicas y preventivas no están
                                cubiertas.
                            </li>
                            <li>
                                Gastos Adicionales: Los servicios de grúa, remolque, estacionamiento y/o almacenamiento
                                del vehículo, y cualquier daño o pérdida resultante de la avería o retraso en la
                                reparación.
                            </li>
                            <li>
                                Seguridad pasiva del vehículo: como airbags, frenos ABS, Pretensores pirotécnicos,
                                Sistema de deformación programada
                            </li>
                            <li>
                                Accesorios: Duplicados de llaves, codificadores, tarjetas de GPS o manuales del
                                propietario con la venta de vehículos, llantas, tapicería, latonería, pintura, alarmas,
                                luces, catalizadores.
                            </li>
                            <li>
                                Exclusiones Adicionales: Cualquier otro elemento o situación no mencionada
                                explícitamente en el apartado "Cobertura de la Garantía" de este documento.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Eventos que excluyen la Garantía: </h4>
                        </div>
                        <p>La garantía otorgada por WCAR no será aplicable por los siguientes aspectos:</p>
                        <ul>
                            <li>
                                Reparaciones Incorrectas: Averías como resultado de reparaciones previas incorrectas o
                                no realizadas según los parámetros del fabricante. Así mismo, WCAR no responderá por
                                averías o daños que resulten de reparaciones sobre piezas y componentes que sean
                                realizadas por terceros diferentes a WCAR.
                            </li>
                            <li>
                                Piezas al Final de su Vida Útil: Sustitución o reparación de piezas que han alcanzado el
                                final de su vida útil por uso natural.
                            </li>
                            <li>
                                Daños por Erosión o Corrosión: Incluyendo deformación, oxidación, descomposición y daños
                                a elementos que han perdido su forma original.
                            </li>
                            <li>
                                Elementos No Garantizados: Averías causadas por componentes no originales o que no son
                                parte integral del vehículo. Así mismo tampoco están incluidas las reparaciones respecto
                                de componentes que el comprador haya instalado por cuenta de terceros.
                            </li>
                            <li>
                                Mantenimiento Preventivo: Las averías o daños que sean causados como consecuencia de la
                                negligencia del comprador en realizar los mantenimientos preventivos o las revisiones
                                periódicas al vehículo, así como daños o averías que deriven de un mantenimiento
                                deficiente del vehículo. El cliente debe informarse sobre las características del
                                vehículo y seguir las instrucciones del fabricante para un uso y conservación adecuados.
                            </li>
                            <li>
                                Daños o Averías Específicas: entendidos como averías por defectos de serie, diseño
                                defectuoso, alteraciones o modificaciones, y daños causados por seguir operando el
                                vehículo cuando los indicadores señalan un problema. De igual manera se excluyen averías
                                o daños por uso del vehículo sin atención a las directrices establecidas en el manual
                                del vehículo o sin atención a las recomendaciones realizadas por el fabricante.
                            </li>
                            <li>
                                Mal Uso o Negligencia: Averías causadas por el uso incorrecto, negligencia o uso del
                                vehículo en competiciones.
                            </li>
                            <li>
                                Accidentes o Catástrofes Naturales: Averías ocasionadas por accidentes, robo, incendio,
                                explosión, vandalismo o catástrofes naturales.
                            </li>
                            <li>
                                Intervenciones en Situación de Avería: Incluye cualquier intervención realizada en el
                                lugar de la avería por servicios de asistencia en carretera o fuera de la ciudad en la
                                cual se encuentran los talleres autorizados por Wcar.
                            </li>
                            <li>Daños a Terceros: Los daños a terceros originados por la avería.</li>
                            <li>
                                Exclusiones Adicionales: Cualquier otro elemento o situación no mencionada
                                explícitamente en el apartado "Cobertura de la Garantía" de este documento.
                            </li>
                            <li>
                                Vehículos que se hayan vendido como “fuera de estándar” o que sean de año 2014 o
                                inferior quedan totalmente excluidos de cobertura de garantía.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Procedimiento para hacer efectiva la garantía:</h4>
                        </div>
                        <ul>
                            <li>
                                En caso de que el comprador requiera hacer efectiva la garantía para alguno de los
                                componentes, piezas o sistemas previstos en el numeral 3 de estos términos y condiciones
                                deberá ponerse en contacto con WCAR mediante el correo servicioalcliente@wcar.co.
                            </li>
                            <li>
                                El comprador deberá remitir con su comunicación sus datos completos de identificación,
                                número de celular y e-mail de contacto. Así mismo deberá señalar los datos
                                correspondientes al vehículo.
                            </li>
                            <li>
                                En caso de que sea posible para WCAR determinar que la reclamación del comprador se
                                realiza sobre una pieza o componente no cubierto por la garantía, lo notificará dentro
                                de los cinco (5) días siguientes a la recepción del e-mail del comprador.
                            </li>
                            <li>
                                En caso de que sea necesario el examen técnico del vehículo para determinar si hay lugar
                                a la aplicación de la garantía, en el término de cinco (5) días contados desde la
                                recepción del e-mail, WCAR le comunicará al comprador el día y la hora en la cual puede
                                presentar el vehículo de manera presencial en la ciudad de Bogotá D.C. Así mismo, WCAR
                                le comunicará al comprador el taller asignado para la revisión del vehículo.
                            </li>
                            <li>
                                WCAR realizará la revisión técnica y de acuerdo con el fallo detectado, se informará al
                                comprador si efectivamente la reparación, ajuste o cambio de componente o pieza, se
                                encuentra incluido o no dentro de la garantía.
                            </li>
                            <li>
                                Si la garantía es procedente, WCAR le informará al comprador el término de duración de
                                la reparación y la fecha en la cual podrá presentarse al taller.
                            </li>
                            <li>
                                Si el reclamo se relaciona con algún componente o pieza de los establecidos en el punto
                                3, WCAR procederá a reemplazar sin costo el componente o la pieza.
                            </li>
                            <li>
                                WCAR, cuenta con un término de treinta (30) días hábiles contados a partir de la entrega
                                del vehículo por parte del cliente en uno de los talleres autorizados, para poder
                                ejecutar las actividades propias por medio de la cual se hace efectiva la garantía; esto
                                es para llevar a cabo el diagnóstico y reparaciones.
                            </li>
                            <li>
                                Este periodo podrá ser adicionado hasta por sesenta (60) días hábiles para aquellos
                                casos en los cuales se haga necesario que WCAR importe alguna de las piezas necesarias
                                para el arreglo del vehículo, siempre y cuando ésta haga parte de las coberturas de la
                                Garantía.
                            </li>
                            <li>
                                En caso de que la reparación implique el cambio de piezas o componentes adicionales a
                                los establecidos en el punto 3, WCAR le informará al comprador, por escrito, el valor
                                que deberá pagar por los componentes o piezas excluidas, los cuales serán facturados.
                                Así mismo, en caso de que la garantía no sea procedente se efectuará un cobro por
                                concepto de diagnóstico a cargo del comprador.
                            </li>
                            <li>
                                Los gastos de traslado del vehículo al taller o centro de reparación designado por WCAR,
                                correrán por cuenta del comprador
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Documentación</h4>
                        </div>
                        <ul>
                            <li>
                                Los vehículos vendidos por WCAR SAS, al ser vehículos usados, pueden presentar
                                reclamaciones de siniestros por el (los) propietario (s), anterior (es), las cuales
                                pueden estar reportadas en diferentes bases de datos de los talleres de servicio o de
                                las aseguradoras, como FASECOLDA u otras, lo cual no impide la vigencia del negocio
                                efectuado entre las partes.
                            </li>
                            <li>
                                WCAR informará al comprador de acuerdo con su conocimiento razonable el estado legal del
                                vehículo relacionado con multas, comparendos e infracciones de tránsito a la fecha de
                                matrícula del mismo. Ello teniendo en cuenta las bases de datos y páginas de consulta
                                disponibles al público entre ellas el RUNT.
                            </li>
                            <li>
                                WCAR en caso de que se presenten novedades en el estado legal del vehículo entre la
                                fecha de matrícula y la expedición de la tarjeta de propiedad a nombre del nuevo
                                comprador, WCAR hará sus mejores esfuerzos por hacer el recobro al vendedor de las sumas
                                de dinero que deban ser pagados por concepto de multas, comparendos o infracciones de
                                tránsito. Lo anterior, teniendo en cuenta que el trámite de expedición de la tarjeta de
                                propiedad se realiza dentro de los treinta (30) días calendario siguientes a la firma
                                del contrato.
                            </li>
                            <li>
                                WCAR no asume responsabilidad por la información legal del vehículo que repose en bases
                                de datos no administradas por WCAR, y que por errores de terceros no se encuentre
                                actualizada, especialmente las de entidades del Estado como DIJIN, SIJIN, FISCALÍAS y
                                Organismos de tránsito competentes de Bogotá, Cundinamarca y demás municipios del país,
                                que deriven de la etapa previa o posterior a la comercialización del vehículo.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>
                                Reembolsos de reparaciones realizadas en talleres de terceros.
                            </h4>
                        </div>
                        <ul>
                            <li>
                                La garantía que aquí se otorga únicamente podrá hacerse efectiva en los talleres
                                autorizados por WCAR.
                            </li>
                            <li>
                                Por lo anterior, en ningún caso podrá el comprador solicitar a un taller no autorizado,
                                la realización de reparaciones o el cambio de piezas y componentes señalados en el punto
                                3, y posteriormente presentar facturas a WCAR para que le realice el reembolso de esos
                                gastos. Es decir, si el cliente decide hacer reparaciones en talleres que no hayan sido
                                delegados por WCAR, no habrá lugar a reembolso.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Seguros. </h4>
                        </div>
                        <ul>
                            <li>
                                WCAR con relación a la asegurabilidad del vehículo informa que cada aseguradora, al ser
                                una entidad distinta e independiente, tiene la potestad de asegurar o no los vehículos
                                que inspecciona directamente o a través de terceros.
                            </li>
                            <li>
                                En caso de que se presente algún rechazo de asegurabilidad por parte de alguna
                                aseguradora, WCAR SAS se reserva el derecho de solicitar un segundo o tercer concepto
                                emitido por un tercero u otra(s) aseguradora(s) para verificar la razón de dicho
                                rechazo.
                            </li>
                            <li>
                                En caso de que hecha la anterior verificación ninguna aseguradora proceda a asegurar el
                                vehículo vendido por WCAR SAS, éste procederá a devolver la totalidad del dinero
                                entregada por el cliente en un plazo no mayor a 7 días hábiles contados desde el último
                                concepto del tercero y/o última negativa de la aseguradora.
                            </li>
                        </ul>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Transparencia y Confianza. </h4>
                        </div>
                        <p>
                            Estas coberturas y exclusiones están diseñadas para brindar una clara comprensión de los
                            límites de nuestra garantía, asegurando la máxima transparencia y construyendo confianza con
                            nuestros valiosos clientes.
                        </p>
                        <div className="side side_top mb-3">
                            <h4 style={{ marginLeft: 16 }}>Deberes del Cliente como Consumidor</h4>
                        </div>
                        <ul>
                            <li>
                                Realizar las revisiones obligatorias periódicas para mantener el vehículo en condiciones
                                adecuadas de funcionamiento, de acuerdo con las recomendaciones del fabricante y
                                mantener un registro o soporte de las mismas.
                            </li>
                            <li>
                                Informarse respecto de las características del vehículo, así como de las instrucciones
                                que estén disponibles por parte del fabricante en relación con su adecuado uso y
                                conservación.
                            </li>
                            <li>Comunicar a través de los canales autorizados las posibles fallas del vehículo.</li>
                            <li>
                                Remitir el vehículo a los talleres autorizados por WCAR para la correspondiente revisión
                                y eventual reparación, en los términos de este documento.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermAndConditions;
