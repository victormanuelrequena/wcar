import "./FilterStyles.scss";
import { FC, useContext, useEffect, useState } from "react";
import FilterComponentProps from "./FilterComponentProps";
import BrandContext from "../../../../../../../domain/providers/brand/BrandContext";
import BrandContextType from "../../../../../../../domain/providers/brand/BrandContextType";
import ColorContext from "../../../../../../../domain/providers/color/ColorContext";
import ColorContextType from "../../../../../../../domain/providers/color/ColorContextType";
import TypeOfFuelContext from "../../../../../../../domain/providers/typeOfFuel/TypeOfFuelContext";
import TypeOfFuelContextType from "../../../../../../../domain/providers/typeOfFuel/TypeOfFuelContextType";
import TypeVehicleContext from "../../../../../../../domain/providers/typeVehicle/TypeVehicleContext";
import TypeVehicleContextType from "../../../../../../../domain/providers/typeVehicle/TypeVehicleContextType";
import { TransmissionCar } from "../../../../../../../domain/entities/CarEntity";
import di from "../../../../../../../di/DependencyInjection";
import GetModelsByBrandUseCase, {
    GetModelsByBrandUseCaseName,
} from "../../../../../../../domain/use_cases/brand/GetModelsByBrandUseCase";
import RangePickerComponent from "../../../../../components/form/rangePicker/RangePickerComponent";
import SelectOpenComponent from "../../../../../components/selectOpen/SelectOpenComponent";
import TagContext from "../../../../../../../domain/providers/tag/TagContext";
import TagContextType from "../../../../../../../domain/providers/tag/TagContextType";
import ModelEntity from "../../../../../../../domain/entities/ModelEntity";

const FilterComponent: FC<FilterComponentProps> = ({ formFunctions, isOpen, setIsOpen }) => {
    const { register, setValue, watch } = formFunctions;
    const { brands } = useContext(BrandContext) as BrandContextType;
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { tags } = useContext(TagContext) as TagContextType;
    const { typeOfFuels } = useContext(TypeOfFuelContext) as TypeOfFuelContextType;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;
    const [models, setModels] = useState<ModelEntity[]>([]);
    const brandIdValue = watch("brand_id");
    const modelValue = watch("model");
    const typeVehicleId = watch("type_vehcile_id");
    const plateNumberValue = watch("plate_number");
    const typeTransmission = watch("type_transmission");
    const availability = watch("tag_id");
    const typeFuelId = watch("type_fuel_id");

    const handleClose = () => {
        if (window.innerWidth < 700) {
            setIsOpen(false);
        }
    };

    const _handleChangeBrand = async (brandId: string) => {
        if (brandId == brandIdValue) {
            setValue("brand_id", undefined);
        } else {
            setValue("brand_id", brandId);
            setValue("model", undefined);
            setModels([]);
            try {
                const response = await di.get<GetModelsByBrandUseCase>(GetModelsByBrandUseCaseName).call(brandId);
                setModels(response);
            } catch (error) {}
        }
        // setIsOpen(false);
    };

    const _handleChangeModel = (model: any) => {
        if (model === modelValue?.id) setValue("model", undefined);
        else {
            setValue("model", model);
        }
        handleClose();
    };

    const _handleChangeYear = (year: number) => {
        if (year == watch("year")) setValue("year", undefined);
        else setValue("year", year);
        handleClose();
    };

    const _handleChangeColor = (colorId: string) => {
        if (colorId == watch("color_id")) setValue("color_id", undefined);
        else setValue("color_id", colorId);
        handleClose();
    };

    const _handleChangePlateNumber = (plate: number) => {
        if (plate == plateNumberValue) setValue("plate_number", undefined);
        else setValue("plate_number", plate);
        handleClose();
    };

    useEffect(() => {
        if (typeVehicleId || typeTransmission || availability || typeFuelId) {
            handleClose();
        }
    }, [typeVehicleId, typeTransmission, availability, typeFuelId]);

    return (
        <div className={`filter_component ps-5 pt-3 pe-4 ${isOpen && "open"}`}>
            <div className="back_drop" onClick={() => setIsOpen(false)}></div>
            <div className="w-100 d-flex align-items-center hover" onClick={() => setIsOpen(false)}>
                <img src="/assets/icons/filter.svg" alt="Wcar" title="Wcar" />
                <span className="ms-2 py-3"></span>Ocultar filtros
            </div>
            <div className="my-3 model_filter">
                <SelectOpenComponent title="Marca y modelo">
                    {brands.map((brand, index) => (
                        <div key={index} className={`form-check my-2 ps-0 ${brandIdValue == brand.id && "active"}`}>
                            <div className="my-3">
                                <div
                                    className="d-flex align-items-center title hover title"
                                    onClick={() => _handleChangeBrand(brand.id)}
                                >
                                    <img
                                        src={brand.image}
                                        alt="Wcar"
                                        title="Wcar"
                                        className="img-fluid img_filter me-2"
                                    />
                                    <span>{brand.name}</span>
                                </div>
                                {brandIdValue === brand.id && (
                                    <div className="content options_box_container">
                                        {models.map((model, index) => (
                                            <div
                                                key={index}
                                                className={`my-2 option_picker hover ${
                                                    modelValue?.id == model && "active"
                                                }`}
                                                onClick={() => {
                                                    console.log("MODEL____", model);
                                                    _handleChangeModel(model);
                                                }}
                                            >
                                                {model.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Año">
                    <div className="options_box_container row">
                        {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, index) => 2000 + index).map(
                            (year, index) => (
                                <div
                                    key={index}
                                    className={`option_picker col-6 col-md-4 col-lg-3 my-2 ${
                                        watch("year") == year ? "active" : ""
                                    }`}
                                    onClick={() => _handleChangeYear(year)}
                                >
                                    {year}
                                </div>
                            )
                        )}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <label>Precio</label>
                <RangePickerComponent formFunctions={formFunctions} keyName="price" min={0} max={100000000} />
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Tipo">
                    <div className="form-check px-0">
                        {typeVehicles.map((typeVehicle, index) => (
                            <div key={index} className="form-check my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={typeVehicle.id}
                                    {...register("type_vehcile_id")}
                                />
                                <label className="form-check-label">
                                    <img src={typeVehicle.photo} alt={typeVehicle.name} width={25} className="me-2" />
                                    {typeVehicle.name} <span className="text_gray">({typeVehicle.count ?? 0})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Transmisión">
                    <div className="form-check px-0">
                        <div className="form-check my-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                checked={watch("type_transmission") == TransmissionCar.AUTOMATIC}
                                value={TransmissionCar.AUTOMATIC}
                                {...register("type_transmission")}
                            />
                            <label className="form-check-label">Automática</label>
                        </div>
                    </div>
                    <div className="form-check px-0">
                        <div className="form-check my-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                checked={watch("type_transmission") == TransmissionCar.MANUAL}
                                value={TransmissionCar.MANUAL}
                                {...register("type_transmission")}
                            />
                            <label className="form-check-label">Manual</label>
                        </div>
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Disponibilidad">
                    <div className="form-check px-0">
                        {tags.map((tag, index) => (
                            <div key={index} className="form-check my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={tag.id}
                                    {...register("tag_id")}
                                />
                                <label className="form-check-label">{tag.name}</label>
                            </div>
                        ))}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <label>Kilometraje</label>
                <RangePickerComponent formFunctions={formFunctions} keyName="km" min={0} max={1000000} />
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Combustible">
                    <div className="form-check px-0">
                        {typeOfFuels.map((typeOfFuel, index) => (
                            <div key={index} className="form-check my-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value={typeOfFuel.id}
                                    {...register("type_fuel_id")}
                                />
                                <label className="form-check-label">{typeOfFuel.name}</label>
                            </div>
                        ))}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3 color_filter">
                <SelectOpenComponent title="Color">
                    <div className="colors_container">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color ${watch("color_id") == color.id && "active"}`}
                                onClick={() => _handleChangeColor(color.id)}
                            >
                                <div className="fill" style={{ backgroundColor: color.colorHex }}></div>
                            </div>
                        ))}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3">
                <SelectOpenComponent title="Placa">
                    <div className="options_box_container">
                        {Array.from({ length: 10 }, (_, index) => (
                            <div
                                key={index}
                                className={`option_picker hover ${plateNumberValue == index ? "active" : ""}`}
                                onClick={() => {
                                    _handleChangePlateNumber(index);
                                    handleClose();
                                }}
                            >
                                <span>{index}</span>
                            </div>
                        ))}
                    </div>
                </SelectOpenComponent>
            </div>

            <div className="my-3 d-flex justify-content-end">
                <button type="submit" className="btn btn_orange">
                    Filtrar
                </button>
            </div>
        </div>
    );
};

FilterComponent.defaultProps = {
    isOpen: false,
};
export default FilterComponent;
