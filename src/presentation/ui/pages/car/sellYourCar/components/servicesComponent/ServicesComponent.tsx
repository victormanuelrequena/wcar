import {FC} from "react";
import ServiceItemSubComponent from "./ServiceItem/ServiceItemSubComponent";
import Icons from "../../../../../assets/Icons";

const ServicesComponent: FC = () => {

    const services = [
        {
            title: "Soluciones integrales a la medida", 
            description: "Te contamos las cosas importantes del carro tal y como son.", 
            icon: <Icons.Car/>
        },
        {
            title: "Alternativa honesta y con precios justos",
            description: "A través de nuestro algoritmo calculamos precios de venta reales de mercado.",
            icon: <Icons.Money/>
        },
        {
            title: "Uso de la tecnología para facilitar procesos",
            description: "La tecnología es para nosotros un camino para mejorar el servicio, no para reemplazar las interacciones.",
            icon: <Icons.Computer/>
        }
];

    return <div className="container py-5 px-4">
        <div className="row d-flex justify-content-center">
            {services.map((service) => (<ServiceItemSubComponent 
                    title={service.title} 
                    description={service.description}
                    icon={service.icon}
                />))}
        </div>
    </div>
}

export default ServicesComponent;