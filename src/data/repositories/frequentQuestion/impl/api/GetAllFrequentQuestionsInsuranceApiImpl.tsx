import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";

const _procedures: FrequentQuestionEntity[] = [
    {
        id: "cuota-mensual",
        question: "¿De cuánto queda mi cuota?",
        answer: "La cuota mensual que vas a pagar depende de varios factores como el valor del vehículo que estás comprando, la cuota inicial, el plazo y la tasa de interés que te sea aprobada por el banco. Te puedes dirigir a nuestra calculadora financiera para hacer una simulación aproximada."
    },
    {
        id: "tasa-de-interes",
        question: "¿Cuál es la tasa de interés que me aplica?",
        answer: "Las tasas de interés pueden variar mucho dependiendo del perfil de cada cliente. Teniendo en cuenta factores de riesgo como nivel de ingresos, historial crediticio (puntaje y experiencia), edad, tipo de actividad (empleado), nivel de endeudamiento y monto de la cuota inicial. Las tasas de interés para crédito de carro hoy día están entre el 0,89 hasta el 1,98% nominal mes vencido. Si tienes un excelente perfil, puedes aspirar a una tasa que se acerque al 0,89, pero si tu perfil debe mejorar, la tasa será de 1,6 en adelante."
    },
    {
        id: "bancos-convenio",
        question: "¿Con cuáles bancos tienen convenio?",
        answer: "Tenemos convenio con todos los bancos y entidades financieras que prestan para crédito de vehículo, entre las cuales podemos encontrar finanzauto, OLX, banco de Bogotá, Banco de occidente, BBVA, RCI, entre muchos otros."
    },
    {
        id: "documentos-necesarios",
        question: "¿Qué documentos necesito para acceder a un crédito de vehículo?",
        answer: "La documentación requerida depende de tu perfil. Por ejemplo, si eres empleado, necesitaremos tu carta laboral, desprendibles de pago y certificado de ingresos y retenciones. Si eres pensionado, necesitaremos copia de la resolución de la pensión, 3 últimas colillas de pago y certificado de ingresos del año anterior."
    }
];

const GetAllFrequentQuestionsInsuranceApiImpl = async (): Promise<FrequentQuestionEntity[]> => {
    return _procedures;
}

export default GetAllFrequentQuestionsInsuranceApiImpl;