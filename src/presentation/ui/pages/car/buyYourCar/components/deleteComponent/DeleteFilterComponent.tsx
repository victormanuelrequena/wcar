import './DeleteFilterComponentStyles.scss';
import { FC, useContext, useEffect } from "react";
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
import { Helmet } from 'react-helmet-async';
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
    const type = typeVehicles.find(type => type.id == watch('type_vehcile_id'));
    const transmission = watch('type_transmission');
    const tag = tags.find(tag => tag.id === watch('tag_id'));
    const rangeMileage = watch('km');
    const fuel = typeOfFuels.find(fuel => fuel.id === watch('type_fuel_id'));
    const color = colors.find(color => color.id === watch('color_id'));
    const plateNumber = watch('plate_number');

    const _handleRemoveBrand = () => {
        setValue('brand_id', undefined);
        setValue('model', undefined);

    }
    const _handleRemoveModel = () => { setValue('model', undefined); }

    const _handleRemoveYear = () => { setValue('year', undefined); }
    const _handleRemovePrice = () => { setValue('price', undefined); }
    const _handleRemoveType = () => { setValue('type_vehcile_id', undefined); }
    const _handleRemoveTransmission = () => { setValue('type_transmission', undefined); }
    const _handleRemoveTag = () => { setValue('tag_id', undefined); }
    const _handleRemoveRangeMileage = () => { setValue('km', undefined); }
    const _handleRemoveFuel = () => { setValue('type_fuel_id', undefined); }
    const _handleRemoveColor = () => { setValue('color_id', undefined); }
    const _handleRemovePlateNumber = () => { setValue('plate_number', undefined); }

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
        {type && <Helmet>
            <title>{type.name} | wcar</title>
            {type.id == "3" && <>
                <meta name="description" content="¿Buscas Carros Sedan en Colombia? en wcar te entregamos toda la información que necesitas, porqué más que vender te aconsejamos.​" />
                <meta name="keywords" content='Carros Sedan, Carros Sedan Colombia, Auto Sedan, Aveo Sedan, Joy Sedan, mazda 2 sedan, chevrolet onix sedan, kia rio sedan, Sedan Usados, Compra Sedan Usado, Qué es un sedan' />
            </>}
            {type.id == "6" && <>
                <meta name="description" content="¡Carros Hatchback Colombia! En wcar te mostramos todas las opciones que hay en Colombia con carros usados 5 puertas con nuestra transparencia brutal. ​" />
                <meta name="keywords" content='Hatchback Colombia, Hatchback, Carros Hatchback usados, Hatchback la mejor opción en Bogotá, Hatchback la mejor opción en Bogotá, Los Mejores Hatchback en Colombia, Hachback Carros, Kia Rio Hatchback, Hyundai Accent Hatchback, Chevrolet Onix Hatchback, Mazda 3 Hatchback' />
            </>}
            {type.id == "8" && <>
                <meta name="description" content="¿Buscas Carros Sedan en Colombia? en wcar te entregamos toda la información que necesitas, porqué más que vender te aconsejamos.​" />
                <meta name="keywords" content='Carros Sedan, Carros Sedan Colombia, Auto Sedan, Aveo Sedan, Joy Sedan, mazda 2 sedan, chevrolet onix sedan, kia rio sedan, Sedan Usados, Compra Sedan Usado, Qué es un sedan' />
            </>}
        </Helmet>}
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
            {tag.id == "5" && <Helmet>
                <title>#1 en Carros de lujo usados 2023 | wcar</title>
                <meta name="description" content="¡Carros de lujo usados! En wcar te mostramos todas las opciones que hay en Colombia con los más exclusivos autos de gama alta del país.​" />
                <meta name="keywords" content='Carros de lujo usados, carros de gama alta usados, autos de lujo usados, carros de lujo para mujeres, autos de lujo para hombres, Top 5 de carros alta gama en Colombia' />
            </Helmet>}
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
            {fuel.id == "3" && <Helmet>
                <meta name='desciption' content='¡Carros Híbridos Colombia! En wcar te mostramos todas las opciones que hay en Colombia con carros usados híbridos y tecnologías limpias. ' />
                <meta name='keywords' content='Carros Híbridos Colombia, Tecnologías Limpias, Híbrido, Carros Híbridos, Vehículos híbridos, Hyundai Híbrido, Suzuki Híbrido, Toyota Híbrido, Mazda Híbrido' />
            </Helmet>}
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