import { ErrorMessage } from "@hookform/error-message";
import Icons from "../../../../../assets/Icons";
import "./ModalGarantieStyles.scss";
import { useForm } from "react-hook-form";
import Validators from "../../../../../../utils/Validators";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrencyParse from "../../../../../../utils/CurrencyParse";

interface ModalAmountProps {
    close: () => void;
    id: string;
    carValue: number;
    SrvCode: string;
}

type Inputs = {
    amount: number;
    terms: boolean;
};

export default function ModalGarantie({ close, id, carValue, SrvCode }: ModalAmountProps) {
    console.log("🚀 ~ file: index.tsx:23 ~ ModalAmount ~ carValue:", carValue);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const {
        register,
        setValue,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
        setError,
    } = useForm<Inputs>();
    const terms = watch("terms");
    const amount = watch("amount");

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [typeIdentification, setTypeIdentification] = useState("CC");
    const [document, setDocument] = useState("");
    const [security, setSecurity] = useState("0");
    const [disabledButton, setDisabledButton] = useState(false);
    const [plate, setPlate] = useState("");
    const seguroOptions = [
        { label: "Seguro 1", value: 500000.0 },
        { label: "Seguro 2", value: 1000000.0 },
        { label: "Seguro 3", value: 1500000.0 },
        { label: "Seguro 4", value: 2000000.0 },
        { label: "Seguro 5", value: 2500000.0 },
        { label: "Seguro 6", value: 3000000.0 },
        { label: "Seguro 7", value: 3500000.0 },
        { label: "Seguro 8", value: 4000000.0 },
        { label: "Seguro 9", value: 4500000.0 },
        { label: "Seguro 10", value: 5000000.0 },
        { label: "Seguro 11", value: 5500000.0 },
        { label: "Seguro 12", value: 6000000.0 },
        { label: "Seguro 13", value: 6500000.0 },
        { label: "Seguro 14", value: 7000000.0 },
        { label: "Seguro 15", value: 7500000.0 },
        { label: "Seguro 16", value: 8000000.0 },
        { label: "Seguro 17", value: 8500000.0 },
        { label: "Seguro 18", value: 9000000.0 },
        { label: "Seguro 19", value: 9500000.0 },
        { label: "Seguro 20", value: 10000000.0 },
    ];

    const garantiaOptions = [
        { label: "Garantia 1", value: 1000000.0 },
        { label: "Garantia 2", value: 1500000.0 },
        { label: "Garantia 3", value: 2000000.0 },
        { label: "Garantia 4", value: 2500000.0 },
        { label: "Garantia 5", value: 3000000.0 },
        { label: "Garantia 6", value: 3500000.0 },
        { label: "Garantia 7", value: 4000000.0 },
        { label: "Garantia 8", value: 4500000.0 },
        { label: "Garantia 9", value: 5000000.0 },
        { label: "Garantia 10", value: 5500000.0 },
        { label: "Garantia 11", value: 6000000.0 },
        { label: "Garantia 12", value: 6500000.0 },
        { label: "Garantia 13", value: 7000000.0 },
        { label: "Garantia 14", value: 7500000.0 },
        { label: "Garantia 15", value: 8000000.0 },
        { label: "Garantia 16", value: 8500000.0 },
        { label: "Garantia 17", value: 9000000.0 },
        { label: "Garantia 18", value: 9500000.0 },
        { label: "Garantia 19", value: 10000000.0 },
    ];

    const options = SrvCode == "1002" ? seguroOptions : garantiaOptions;

    useEffect(() => {
        if (
            name.length > 3 &&
            lastName.length > 3 &&
            typeIdentification &&
            document.length > 3 &&
            security &&
            plate.length > 3
        ) {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
        console.log(typeIdentification, security);
    }, [name, lastName, typeIdentification, document, security, plate]);

    function formatValue(value: string): string {
        const plainValue = value?.replace(/[\.,\$]/g, "");
        const formattedValue = plainValue + ".00";
        return formattedValue;
    }

    const bookCar = async () => {
        // console.log("AMOUNT____", formatValue(amount.toString()));

        console.log({
            name,
            SrvCode: "1002",
            lastName,
            typeIdentification,
            plate,
            document,
            typeSecurityOrGarantie: options[security].label,
            totalToPay: parseFloat(formatValue(options[security].value.toString().trimStart())),
        });
        try {
            const response = await window.fetch("https://api.wcaronline.com/api/garantie-security/", {
                // const response = await window.fetch("http://localhost:8000/api/garantie-security/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    lastName,
                    SrvCode: "1002",
                    typeIdentification,
                    plate,
                    document,
                    typeSecurityOrGarantie: options[security].label,
                    totalToPay: parseFloat(formatValue(options[security].value.toString().trimStart())),
                }),
            });
            const data = await response.json();
            console.log(data);
            // @ts-ignore
            window.location.href = data?.data_eccolect?.eCollectUrl;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="box">
            <div className="closer">
                <div className="modal-amount position-relative">
                    <div className="icon-close" onClick={close}>
                        <Icons.Clear />
                    </div>
                    <h5 className="modal-title">Adquiere tu {SrvCode == "1002" ? "Seguro" : "Garantia"}</h5>
                    <div className="form-group mt-4 input-box">
                        <div className="d-flex " style={{ gap: 12 }}>
                            <div className="form-group w-50">
                                <label className="mandatory">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group w-50">
                                <label className="mandatory">Apellido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="d-flex mt-3" style={{ gap: 12 }}>
                            <div className="" style={{ width: "30%" }}>
                                <div className="form-group ">
                                    <label className="mandatory">Tipo</label>
                                    <select
                                        className="form-control"
                                        value={typeIdentification}
                                        onChange={(e) => setTypeIdentification(e.target.value)}
                                    >
                                        <option value={"CC"} selected>
                                            Cédula de Ciudadanía
                                        </option>
                                        <option value={"PS"}>Pasaporte</option>
                                        <option value={"NIT"}>NIT</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group" style={{ width: "70%" }}>
                                <label className="mandatory">Documento</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-group w-full mt-3">
                            <label className="mandatory">Placa</label>
                            <input
                                type="text"
                                className="form-control"
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                            />
                        </div>

                        <div className="form-group w-full mt-3">
                            <label className="mandatory">{SrvCode == "1002" ? "Seguro" : "Garantia"}</label>
                            <select
                                className="form-control"
                                defaultValue={0}
                                value={security}
                                onChange={(e) => setSecurity(e.target.value)}
                            >
                                {options.map((item, index) => (
                                    <option value={index} key={index}>
                                        {CurrencyParse.toCop(item.value)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button
                            disabled={!disabledButton}
                            className="btn btn_orange btn-modal"
                            style={{
                                backgroundColor: disabledButton ? "" : "#ccc",
                            }}
                            onClick={bookCar}
                        >
                            <p>Apartar</p>
                        </button>
                        <div className="btn btn_orange_outline" onClick={close}>
                            Cancelar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
