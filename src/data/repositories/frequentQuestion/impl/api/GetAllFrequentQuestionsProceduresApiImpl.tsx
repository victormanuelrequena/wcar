import FrequentQuestionEntity from "../../../../../domain/entities/FrequentQuestionEntity";

const _procedures: FrequentQuestionEntity[] = [
    {
        id: "cambio-propietario",
        question: "Traspasos",
        answer: "Mediante este trámite se realiza el cambio de propietario de un vehículo usado. Los costos de tramitador y traspaso dependen del organismo de tránsito donde esté registrado el vehículo. El valor de las toma de improntas estará incluido en el valor que se indique y podrán ser tomadas a domicilio en la ciudad de Bogotá sin ningún costo adicional. "
    },
    {
        id: "inscripcion-prenda",
        question: "Inscripción de Prenda",
        answer: "Mediante este trámite se registra un contrato de prenda por parte de un banco, financiera, persona jurídica o persona natural. Los valores se liquidarán específicamente cuando se reciban y revisen los documentos, pues depende del organismo de tránsito en donde se deba registrar la prenda. El valor de la toma de improntas estará incluido en el valor que se indique y podrán ser tomadas a domicilio en la ciudad de Bogotá sin ningún costo adicional."
    },
    {
        id: "levantamiento-prenda",
        question: "Levantamiento de Prenda",
        answer: "Mediante este trámite se cancela un contrato de prenda por parte de un banco, financiera, persona jurídica o persona natural. Los valores se liquidarán específicamente cuando se reciban y revisen los documentos, pues depende del organismo de tránsito en donde se deba registrar la prenda. El valor de la toma de improntas estará incluido en el valor que se indique y podrán ser tomadas a domicilio en la ciudad de Bogotá sin ningún costo adicional."
    },
    {
        id: "liquidacion-impuestos",
        question: "Liquidación de Impuestos y Comparendos",
        answer: "El impuesto del vehículo es el valor anual que se debe pagar al territorio en donde se tiene registrado el vehículo. Dicho pago debe ser realizado por el propietario. En WCAR Trámites, te ayudamos a liquidar dichos impuestos para que los puedas pagar de forma ágil y sencilla."
    },
    {
        id: "traslado-radicacion-cuenta",
        question: "Traslado y Radicación de Cuenta",
        answer: "Consiste en trasladar la matrícula de un vehículo desde el organismo de tránsito donde se encuentra radicado, a la ciudad que desees."
    },
    {
        id: "juicios-sucesion",
        question: "Juicios de Sucesión",
        answer: "Cuando un vehículo se encuentra a nombre de una persona que tristemente ha fallecido, los herederos deben resolver el traslado de propiedad. Dicho proceso es complejo y requiere la asesoría de abogados expertos en la materia. En WCAR te ayudamos, para que ese duro momento de tu vida sea un poco más llevadero."
    }
];

const GetAllFrequentQuestionsProceduresApiImpl = async (): Promise<FrequentQuestionEntity[]> => {
    return _procedures;
}

export default GetAllFrequentQuestionsProceduresApiImpl;