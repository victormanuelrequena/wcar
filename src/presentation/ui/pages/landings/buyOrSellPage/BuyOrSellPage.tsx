import './BuyOrSellPageStyles.scss';
import { FC } from "react";
import Layout from "../../../layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/RoutesComponent";
import Icons from "../../../assets/Icons";
import AccordeonComponent from '../../../components/accordeon/AccordeonComponent';

const _buyAdvices = [
    {
        title: <h3 className="h4 text_bold">1. Haz tu tarea antes de comprar</h3>,
        content: 'Antes de comprar un auto usado, es importante hacer una investigación exhaustiva. Asegúrate de conocer el modelo y marca del auto, su precio promedio en el mercado, los problemas comunes que podría tener y cuánto puede costar su mantenimiento. De esta manera, estarás mejor preparado para negociar y tomar una decisión informada.',
    },
    {
        title: <h3 className="h4 text_bold">2. Busca en diferentes lugares</h3>,
        content: 'No te limites a buscar autos usados en una sola plataforma o lugar. Busca en diferentes lugares, como concesionarios de autos usados, sitios web de anuncios clasificados y grupos de redes sociales. Esto te dará una idea más amplia de las opciones disponibles y te permitirá comparar precios y condiciones.',
    },
    {
        title: <h3 className="h4 text_bold">3. Inspecciona cuidadosamente el auto</h3>,
        content: 'Antes de comprar un auto usado, es fundamental que lo inspecciones en persona y a fondo. Si no tienes experiencia en mecánica, considera llevar a un mecánico de confianza contigo para que revise el auto. Verifica el estado de la carrocería, el motor, la transmisión y los sistemas eléctricos.',
    },
    {
        title: <h3 className="h4 text_bold">4. Negocia el precio</h3>,
        content: 'Una vez que hayas seleccionado el auto que deseas comprar, es hora de negociar el precio. No te conformes con el precio inicial y busca obtener un descuento justo. Usa la información que hayas recolectado sobre el auto y su precio promedio en el mercado para apoyar tus argumentos.',
    },
    {
        title: <h3 className="h4 text_bold">5. Verifica la documentación</h3>,
        content: 'Antes de cerrar la compra, asegúrate de revisar la documentación del auto, incluyendo la tarjeta de propiedad, el impuesto de vehículos y la revisión técnico-mecánica. Asegúrate de que todo esté en regla y que el vendedor sea el propietario legal del vehículo.',
    },
];

const _sellAdvices = [
    {
        title: <h3 className="h4 text_bold">1. Limpia y arregla el auto</h3>,
        content: 'Para obtener el mejor precio posible, es importante que el auto se vea lo mejor posible. Limpia el interior y exterior del auto y haz las reparaciones necesarias. Considera también darle un mantenimiento básico antes de ponerlo en venta.',
    },
    {
        title: <h3 className="h4 text_bold">2. Anuncia en los lugares correctos</h3>,
        content: 'Asegúrate de anunciar el auto en los lugares correctos, como sitios web de anuncios clasificados, grupos de redes sociales y concesionarios de autos usados. Esto aumentará tus posibilidades de encontrar compradores interesados.',
    },
    {
        title: <h3 className="h4 text_bold">3. Pon un precio justo</h3>,
        content: 'Investiga el precio promedio de tu auto en el mercado y pon un precio justo y razonable. No intentes venderlo por más de lo que vale, ya que esto alejará a los compradores interesados.',
    },
    {
        title: <h3 className="h4 text_bold">4. Ofrece información detallada</h3>,
        content: 'Cuando publiques el anuncio, asegúrate de proporcionar información detallada sobre el auto, incluyendo el modelo, la marca, el año de fabricación, el kilometraje y cualquier otro dato relevante para generar confianza en la venta del carro.',
    },
    {
        title: <h3 className="h4 text_bold">5. Sé honesto sobre el estado del auto</h3>,
        content: 'Es importante ser honesto sobre el estado del auto. Si hay algún problema o defecto, asegúrate de mencionarlo en el anuncio. De esta manera, los compradores estarán mejor informados y tendrán una idea más clara de lo que están comprando.',
    },
];

const BuyOrSellPage: FC<{}> = () => {
    return <div className="buy_or_sell_page">
        <Layout>
            <Helmet>
                <title>Compra o vende tu carro en Colombia en 2023</title>
                <meta name='description' content='Si ya te dijiste ¡Compra o vende tu carro en Colombia! aquí te explicamos todo lo que debes tener en cuenta para realizar una transacción segura.' />
                <meta name='keywords' content='Vende tu carro, Carros Usados, Venta de Carros en Colombia, venta de carros usados, Voy a Vender' />
            </Helmet>
            <section className="bg_black position-relative section_1">
                <img src="/assets/pages/buyOrSell/banner.jpg" alt="Vende tu carro" title='Vende tu carro' className="img_section_1 img-fluid" />
                <div className="bg_black">
                    <div className="container py-5 position-relative">
                        <div className="row">
                            <div className="col-md-4 text-white py-3">
                                <div className="mb-3">
                                    <h1> <span className='text_bold'> Compra o vende<br /> tu carro en Colombia</span> <br /> <span className="text_italic">en 2023</span>
                                    </h1>
                                </div>
                                <Link to={routes.quoteYourCar.relativePath} className='btn btn_orange'>
                                    Vende tu carro <Icons.ArrowCircle />
                                </Link>
                                <Link to={routes.buyYourCar.relativePath} className='btn btn_orange px-5 my-2'>Compra tu carro <Icons.ArrowCircle /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sell_your_car py-5">
                <div className="container px-md-5">
                    <div className="px-md-5">
                        <div className="row">
                            <div className="col-md-6 pb-5 pb-md-0">
                                <h2>Vende tu carro en Colombia</h2>
                                <p className='py-3 h4'>Cuando te dices ¡Vende tu carro en Colombia! puede ser un proceso desafiante, especialmente si no tienes experiencia en la venta de vehículos. Es importante tener en cuenta que, en la actualidad, la mayoría de las personas buscan información en línea antes de tomar una decisión de compra, por lo que es fundamental que tu vehículo tenga una presencia en línea sólida y efectiva.</p>
                                <Link to={routes.sellYourCar.relativePath} className="btn btn_orange">Vende tu seguro aquí</Link>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-md-5"><img src="/assets/pages/buyOrSell/buy_your_car.jpg" alt="Vende tu carro en Colombia" title='Vende tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="buy_your_car py-5 bg_gray">
                <div className="container px-md-5">
                    <div className="px-md-5">
                        <div className="row">
                            <div className="col-md-6 d-none d-md-block">
                                <div className="pe-md-5"><img src="/assets/pages/buyOrSell/sell_your_car.jpg" alt="Compra tu carro en Colombia" title='Compra tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                            <div className="col-md-6">
                                <h2>Compra tu carro en Colombia</h2>
                                <p className='py-3 h4'>Cuando te dices ¡Compra tu carro en Colombia! los carros usados pueden ser una excelente opción. No solo ofrecen un precio más cómodo que los vehículos nuevos, sino que también puedes encontrar modelos más antiguos o raros que ya no están disponibles en el mercado. </p>
                                <p className='py-3 h4'>Sin embargo, al comprar un carro usado, es importante que tomes algunas precauciones para garantizar que estás haciendo una inversión segura y satisfactoria.</p>
                            </div>
                            <div className="col-md-6 py-2 pb-5 pb-md-2">
                                <p className='py-3 h4'>Cuando te dices ¡Compra tu carro en Colombia! los carros usados pueden ser una excelente opción. No solo ofrecen un precio más cómodo que los vehículos nuevos, sino que también puedes encontrar modelos más antiguos o raros que ya no están disponibles en el mercado. </p>
                                <p className='py-3 h4'>Sin embargo, al comprar un carro usado, es importante que tomes algunas precauciones para garantizar que estás haciendo una inversión segura y satisfactoria.</p>
                                <Link to={routes.sellYourCar.relativePath} className="btn btn_orange">Compra seguro aquí</Link>
                                <a href="https://listado.tucarro.com.co/wcar" className="ms-3 btn btn_orange">Listado tu carro.com</a>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-md-5"><img src="/assets/pages/buyOrSell/buy_your_car_2.jpg" alt="Compra tu carro en Colombia" title='Compra tu carro en Colombia' className="img_rounded img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advices py-5">
                <div className="container px-md-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text_orange">Consejos para compra o vende tu carro en Colombia</h2>
                            <p className="h4">Comprar y vender autos usados en Colombia puede ser una tarea complicada, especialmente si no se tiene experiencia en el tema. Sin embargo, con algunos consejos útiles, se puede hacer una transacción exitosa sin caer en estafas o problemas legales. Aquí te presentamos algunos consejos útiles tanto para compradores como vendedores de autos usados en Colombia.</p>
                        </div>
                        <div className="col-md-6 py-5">
                            <AccordeonComponent
                                title={<h2 className="font_bold h3">Consejos para comprar <br /><span className="text_orange text_italic">carros usados en Colombia</span></h2>}
                                options={_buyAdvices}
                            ></AccordeonComponent>
                        </div>
                        <div className="col-md-6 py-5">
                            <AccordeonComponent
                                title={<h2 className="font_bold h3">Consejos para vender <br /><span className="text_orange text_italic">carros usados en Colombia</span></h2>}
                                options={_sellAdvices}
                            ></AccordeonComponent>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <img src="/assets/pages/buyOrSell/advices.jpg" alt="Consejos para compra o vende tu carro en Colombia" title='Consejos para compra o vende tu carro en Colombia' className="img-fluid img_rounded    " />
                    </div>
                </div>
            </section>
            <section className="aditional_advices py-5 bg_gray">
                <div className="container px-md-5">
                    <div className="row">
                        <div className="col-12 py-4">
                            <h2 className="text_orange">Consejos adicionales</h2>
                            <p className="h4">
                                Nuestra principal razón de ser en <a href="https://wcar.com" className='text_orange'>wcar</a> es brindar a compradores y vendedores todas las herramientas informacionales, técnicas y operativas para que puedan realizar una transacción segura y confiable, generando un ambiente comercial vehicular seguro para todos los involucrados en la compra o venta de un carro usado en Colombia.
                            </p>
                        </div>
                        <div className="col-md-6 py-4">
                            <h3 className="text_orange">Haz una prueba de manejo</h3>
                            <p className="h4">Antes de comprar un auto usado, siempre es recomendable hacer una prueba de manejo. Esto te permitirá sentir cómo maneja el auto y detectar posibles problemas que no hayas notado durante la inspección.</p>
                        </div>
                        <div className="col-md-6 py-4">
                            <h3 className="text_orange">No aceptes transacciones en efectivo</h3>
                            <p className="h4">Las transacciones en efectivo pueden ser riesgosas tanto para compradores como vendedores. En su lugar, utiliza métodos de pago seguros como transferencias bancarias o pagos electrónicos.</p>
                        </div>
                        <div className="col-md-6 py-4">
                            <h3 className="text_orange">No te apresures en tomar una decisión</h3>
                            <p className="h4">Comprar o vender un auto usado puede ser una decisión importante, así que no te apresures en tomarla. Tómate tu tiempo para investigar, comparar opciones y considerar todas las posibilidades antes de tomar una decisión.</p>
                        </div>
                        <div className="col-md-6 py-4">
                            <h3 className="text_orange">Busca asesoramiento legal</h3>
                            <p className="h4">Si tienes dudas sobre los aspectos legales de comprar o vender un auto usado en Colombia, busca asesoramiento legal. En wcar tenemos todo un equipo de expertos dispuestos a asesorarte en tu proceso de venta o compra de tu vehículo usado.</p>
                        </div>
                        <div className="col-12 py-4">
                            <h3 className="text_orange">Mantén los documentos en orden</h3>
                            <p className="h4">Una vez que hayas comprado o vendido un auto usado, asegúrate de mantener todos los documentos en orden y en un lugar seguro. Esto incluye la tarjeta de propiedad, el impuesto de vehículos y la revisión técnico-mecánica.</p>
                            <p className="h4">En conclusión, comprar y vender autos usados en Colombia puede ser una tarea complicada, pero siguiendo estos consejos útiles, podrás hacer una transacción exitosa sin preocupaciones. Recuerda hacer tu tarea antes de comprar o vender, buscar en diferentes lugares como en <a href='https://listado.tucarro.com.co/wcar' className='text_orange'>tucarro.com</a>, inspeccionar cuidadosamente el auto, negociar el precio y verificar la documentación. </p>
                            <p className="h4">Para los vendedores, asegúrate de limpiar y arreglar el auto, anunciar en los lugares correctos, poner un precio justo, ofrecer información detallada y ser honesto sobre el estado del auto. Además, no olvides hacer una prueba de manejo, utilizar métodos de pago seguros, tomar tu tiempo para tomar una decisión, buscar asesoramiento legal y mantener los documentos en orden. Con estos consejos, estarás mejor preparado para hacer una transacción exitosa y sin preocupaciones.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
}

export default BuyOrSellPage;