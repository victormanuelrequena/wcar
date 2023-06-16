import { FC, useContext } from "react";
import FilterComponentProps from "./FilterComponentProps";
import BrandContext from "../../../../../../domain/providers/brand/BrandContext";
import BrandContextType from "../../../../../../domain/providers/brand/BrandContextType";
import ColorContext from "../../../../../../domain/providers/color/ColorContext";
import ColorContextType from "../../../../../../domain/providers/color/ColorContextType";
import TypeOfFuelContext from "../../../../../../domain/providers/typeOfFuel/TypeOfFuelContext";
import TypeOfFuelContextType from "../../../../../../domain/providers/typeOfFuel/TypeOfFuelContextType";
import TypeVehicleContext from "../../../../../../domain/providers/typeVehicle/TypeVehicleContext";
import TypeVehicleContextType from "../../../../../../domain/providers/typeVehicle/TypeVehicleContextType";
import { TransmissionCar } from "../../../../../../domain/entities/CarEntity";

const FilterComponent: FC<FilterComponentProps> = ({ formFunctions, isOpen, setIsOpen }) => {
    const { register, setValue } = formFunctions;
    const { brands } = useContext(BrandContext) as BrandContextType;
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { typeOfFuels } = useContext(TypeOfFuelContext) as TypeOfFuelContextType;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;

    return <div className={`filter_component ps-5 pe-4 ${isOpen && 'open'}`}>
        <div className="back_drop" onClick={() => setIsOpen(false)}></div>
        <div className="w-100 d-flex align-items-center" onClick={() => setIsOpen(false)}>
            <img src="/assets/icons/filter.svg" alt="" />
            <span className="ms-2"></span>Ocultar filtros
        </div>
        <div className="my-3">
            <select className="form-control form_underline" defaultValue="" {...register('brand_id')}>
                <option value="" disabled >Marca</option>
                {brands.map((brand, index) => <option key={index} value={brand.id}>{brand.name}</option>)}
            </select>
        </div>

        <div className="my-3">
            <select className="form-control form_underline" defaultValue="" {...register('year')}>
                <option value="" disabled >Año</option>
                {Array.from(Array(34).keys()).map((year, index) => <option key={index} value={(new Date()).getFullYear() - year}>{(new Date()).getFullYear() - year}</option>)}
            </select>
        </div>

        <div className="my-3">
            {typeVehicles.map((typeVehicle, index) => <div key={index} className="form-check my-2">
                <input className="form-check-input" type="checkbox" value={typeVehicle.id} {...register('type_vehicle_id')} />
                <label className="form-check-label">
                    {typeVehicle.name}
                </label>
            </div>)}
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