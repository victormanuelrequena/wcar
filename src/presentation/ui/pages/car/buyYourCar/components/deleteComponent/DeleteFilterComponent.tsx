import './DeleteFilterComponentStyles.scss';
import { FC, useContext } from "react";
import DeleteFilterComponentProps from "./DeleteFilterComponentProps";
import BrandContext from "../../../../../../../domain/providers/brand/BrandContext";
import BrandContextType from "../../../../../../../domain/providers/brand/BrandContextType";
import ColorContext from "../../../../../../../domain/providers/color/ColorContext";
import ColorContextType from "../../../../../../../domain/providers/color/ColorContextType";
import TagContext from "../../../../../../../domain/providers/tag/TagContext";
import TagContextType from "../../../../../../../domain/providers/tag/TagContextType";
import TypeOfFuelContext from "../../../../../../../domain/providers/typeOfFuel/TypeOfFuelContext";
import TypeOfFuelContextType from "../../../../../../../domain/providers/typeOfFuel/TypeOfFuelContextType";
import TypeVehicleContext from "../../../../../../../domain/providers/typeVehicle/TypeVehicleContext";
import TypeVehicleContextType from "../../../../../../../domain/providers/typeVehicle/TypeVehicleContextType";
import Icons from "../../../../../assets/Icons";
import { set } from "react-hook-form";
import { TransmissionCar } from "../../../../../../../domain/entities/CarEntity";
import CurrencyParse from "../../../../../../utils/CurrencyParse";

const DeleteFilterComponent: FC<DeleteFilterComponentProps> = ({ formFunctions, onChange }) => {

    const { setValue, watch } = formFunctions;
    const { brands } = useContext(BrandContext) as BrandContextType;
    const { colors } = useContext(ColorContext) as ColorContextType;
    const { tags } = useContext(TagContext) as TagContextType;
    const { typeOfFuels } = useContext(TypeOfFuelContext) as TypeOfFuelContextType;
    const { typeVehicles } = useContext(TypeVehicleContext) as TypeVehicleContextType;

    const brand = brands.find(brand => brand.id === watch('brand_id'));
    const model = watch('model');
    const year = watch('year');
    const price = watch('price');
    const type = typeVehicles.find(type => type.id === watch('type_vehcile_id'));
    const transmission = watch('type_transmission');
    const tag = tags.find(tag => tag.id === watch('tag_id'));
    const rangeMileage = watch('km');
    const fuel = typeOfFuels.find(fuel => fuel.id === watch('type_fuel_id'));
    const color = colors.find(color => color.id === watch('color_id'));
    const plateNumber = watch('plate_number');

    const _handleRemoveBrand = () => {
        setValue('brand_id', undefined);
        setValue('model', undefined);
        onChange();
    }
    const _handleRemoveModel = () => { setValue('model', undefined); onChange(); }

    const _handleRemoveYear = () => { setValue('year', undefined); onChange(); }
    const _handleRemovePrice = () => { setValue('price', undefined); onChange(); }
    const _handleRemoveType = () => { setValue('type_vehcile_id', undefined); onChange(); }
    const _handleRemoveTransmission = () => { setValue('type_transmission', undefined); onChange(); }
    const _handleRemoveTag = () => { setValue('tag_id', undefined); onChange(); }
    const _handleRemoveRangeMileage = () => { setValue('km', undefined); onChange(); }
    const _handleRemoveFuel = () => { setValue('type_fuel_id', undefined); onChange(); }
    const _handleRemoveColor = () => { setValue('color_id', undefined); onChange(); }
    const _handleRemovePlateNumber = () => { setValue('plate_number', undefined); onChange(); }

    return <div className="delete_filter_component">
        {brand && <div className="delete_filter_item">
            <span>{brand.name}</span>
            <div className="icon hover" onClick={_handleRemoveBrand}>
                <Icons.Clear />
            </div>
        </div>}
        {model && <div className="delete_filter_item">
            <span>Modelo {model}</span>
            <div className="icon hover" onClick={_handleRemoveModel}>
                <Icons.Clear />
            </div>
        </div>}
        {year && <div className="delete_filter_item">
            <span>{year}</span>
            <div className="icon hover" onClick={_handleRemoveYear}>
                <Icons.Clear />
            </div>
        </div>}
        {(price?.min || price?.max) && <div className="delete_filter_item">
            <span>{price.min ? CurrencyParse.toCop(price.min) : 0} - {price.max ? CurrencyParse.toCop(price.max) : '...'}</span>
            <div className="icon hover" onClick={_handleRemovePrice}>
                <Icons.Clear />
            </div>
        </div>}
        {type && <div className="delete_filter_item">
            <span>{type.name}</span>
            <div className="icon hover" onClick={_handleRemoveType}>
                <Icons.Clear />
            </div>
        </div>}
        {transmission && <div className="delete_filter_item">
            <span>{transmission == TransmissionCar.AUTOMATIC ? 'Automático' : 'Manual'}</span>
            <div className="icon hover" onClick={_handleRemoveTransmission}>
                <Icons.Clear />
            </div>
        </div>}
        {tag && <div className="delete_filter_item">
            <span>{tag.name}</span>
            <div className="icon hover" onClick={_handleRemoveTag}>
                <Icons.Clear />
            </div>
        </div>}
        {(rangeMileage?.min || rangeMileage?.max) && <div className="delete_filter_item">
            <span>{rangeMileage.min ?? 0}km - {rangeMileage.max ?? '...'}km</span>
            <div className="icon hover" onClick={_handleRemoveRangeMileage}>
                <Icons.Clear />
            </div>
        </div>}
        {fuel && <div className="delete_filter_item">
            <span>{fuel.name}</span>
            <div className="icon hover" onClick={_handleRemoveFuel}>
                <Icons.Clear />
            </div>
        </div>}
        {color && <div className="delete_filter_item">
            <div className="color_fill me-2" style={{ backgroundColor: color.colorHex }}></div>
            <span>{color.name}</span>
            <div className="icon hover" onClick={_handleRemoveColor}>
                <Icons.Clear />
            </div>
        </div>}
        {plateNumber && <div className="delete_filter_item">
            <span>Placa {plateNumber}</span>
            <div className="icon hover" onClick={_handleRemovePlateNumber}>
                <Icons.Clear />
            </div>
        </div>}
    </div>
}
export default DeleteFilterComponent;