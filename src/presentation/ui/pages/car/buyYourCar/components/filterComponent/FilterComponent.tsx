import { FC, useContext, useState } from "react";
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
import GetModelsByBrandUseCase from "../../../../../../../domain/use_cases/brand/GetModelsByBrandUseCase";
import Validators from "../../../../../../utils/Validators";
import RangePickerComponent from "../../../../../components/form/rangePicker/RangePickerComponent";
import SelectOpenComponent from "../../../../../components/selectOpen/SelectOpenComponent";
import { watch } from "fs";

const FilterComponent: FC<FilterComponentProps> = ({ formFunctions, isOpen, setIsOpen }) => {
    const { register, setValue, watch } = formFunctions;
    const { brands } = useContext(BrandContext) as BrandContextType;
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { typeOfFuels } = useContext(TypeOfFuelContext) as TypeOfFuelContextType;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;
    const [models, setModels] = useState<string[]>([]);
    const brandIdValue = watch('brand_id');
    const modelValue = watch('model');

    const _handleChangeBrand = async (brandId: string) => {
        if (brandId == brandIdValue) return;
        setValue('brand_id', brandId);
        setValue('model', undefined);
        setModels([]);
        try {
            const response = await di.get<GetModelsByBrandUseCase>(GetModelsByBrandUseCase.name).call(brandId);
            setModels(response);
        } catch (error) {
        }
    }

    return <div className={`filter_component ps-5 pe-4 ${isOpen && 'open'}`}>
        <div className="back_drop" onClick={() => setIsOpen(false)}></div>
        <div className="w-100 d-flex align-items-center" onClick={() => setIsOpen(false)}>
            <img src="/assets/icons/filter.svg" alt="" />
            <span className="ms-2"></span>Ocultar filtros
        </div>
        <div className="my-3">
            <SelectOpenComponent title="Marca y modelo">
                {brands.map((brand, index) => <div key={index} className={`form-check my-2 ${brandIdValue == brand.id && 'active'}`}>
                    <div className="my-3">
                        <div className="d-flex align-items-center title hover title">
                            <img src={brand.image} alt="" className="img-fluid img_filter me-2" /><span>{brand.name}</span>
                        </div>
                        <div className="content">
                            {models.map((model, index) => <div key={index} className={`my-2 option_picker hover ${modelValue == model}`} onClick={() => setValue('model', model)}>
                                {model}
                            </div>)}
                        </div>
                    </div>
                </div>)}
            </SelectOpenComponent>
        </div>

        <div className="my-3">
            <SelectOpenComponent title="Año">
                <>
                    {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, index) => 2000 + index).map(
                        (year, index) => (
                            <div key={index} className={`option_picker my-2 ${watch('year') === year ? 'active' : ''}`}>
                                {year}
                            </div>
                        )
                    )}
                </>
            </SelectOpenComponent>
        </div>

        <div className="my-3">
            <label>Precio</label>
            <RangePickerComponent formFunctions={formFunctions} keyName="price" min={0} max={100000000} />
        </div>

        <div className="my-3">
            <SelectOpenComponent title="Tipo">
                <div className="form-check pe-0">
                    {typeVehicles.map((typeVehicle, index) => <div key={index} className="form-check my-2">
                        <input className="form-check-input" type="checkbox" value={TransmissionCar.AUTOMATIC} {...register('type_transmission')} />
                        <label className="form-check-label">
                            <img src={typeVehicle.photo} alt={typeVehicle.name} className="me-2" />
                            {typeVehicle.name} <span className="text_gray">({typeVehicle.count ?? 0})</span>
                        </label>
                    </div>)}
                </div>
            </SelectOpenComponent>
        </div>

        <div className="my-3">
            <SelectOpenComponent title="Combustible">
                <div className="form-check pe-0">
                    {typeOfFuels.map((typeVehicle, index) => <div key={index} className="form-check my-2">
                        <input className="form-check-input" type="checkbox" value={TransmissionCar.AUTOMATIC} {...register('type_transmission')} />
                        <label className="form-check-label">
                            {typeVehicle.name}
                        </label>
                    </div>)}
                </div>
            </SelectOpenComponent>
        </div>

        <div className="my-3">
            <div className="form-check my-2">
                <input className="form-check-input" type="checkbox" value={TransmissionCar.AUTOMATIC} {...register('type_transmission')} />
                <label className="form-check-label">
                    Automática
                </label>
            </div>
            <div className="form-check my-2">
                <input className="form-check-input" type="checkbox" value={TransmissionCar.MANUAL} {...register('type_transmission')} />
                <label className="form-check-label">
                    Mecánico
                </label>
            </div>
        </div>
    </div >
}

FilterComponent.defaultProps = {
    isOpen: false,
}
export default FilterComponent;