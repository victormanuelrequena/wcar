import { Container } from "inversify";
import "reflect-metadata";
import GetSomeRandomCarsUseCase from "../domain/use_cases/car/GetSomeRandomCarsUseCase";
import CarRepository, { CarRepositoryName } from "../domain/repositories/CarRepository";
import CarRepositoryTest from "../data/repositories/car/CarRepositoryTest";
import LikeCarUseCase from "../domain/use_cases/car/LikeCarUseCase";
import AllyProvider, { AllyProviderName } from "../domain/providers/ally/AllyProvider";
import AllyProviderImpl from "../presentation/providers/ally/AllyProviderImpl";
import GetAllAlliesUseCase from "../domain/use_cases/ally/GetAllAlliesUseCase";
import AllyRepository, { AllyRepositoryName } from "../domain/repositories/AllyRepository";
import AllyRepositoryTest from "../data/repositories/ally/AllyRepositoryTest";
import LoadUseCase from "../domain/use_cases/default/LoadUseCase";
import SearchCarsUseCase from "../domain/use_cases/car/SearchCarsUseCase";
import BrandProvider, { BrandProviderName } from "../domain/providers/brand/BrandProvider";
import BrandProviderImpl from "../presentation/providers/brand/BrandProviderImpl";
import ColorProvider, { ColorProviderName } from "../domain/providers/color/ColorProvider";
import ColorProviderImpl from "../presentation/providers/color/ColorProviderImpl";
import TypeOfFuelProvider, { TypeOfFuelProviderName } from "../domain/providers/typeOfFuel/TypeOfFuelProvider";
import TypeOfFuelProviderImpl from "../presentation/providers/typeOfFuel/TypeOfFuelProviderImpl";
import TypeVehicleProvider, { TypeVehicleProviderName } from "../domain/providers/typeVehicle/TypeVehicleProvider";
import TypeVehicleProviderImpl from "../presentation/providers/typeVehicle/TypeVehicleProviderImpl";
import GetAllBrandsUseCase from "../domain/use_cases/brand/GetAllBrandsUseCase";
import GetAllColorsUseCase from "../domain/use_cases/color/GetAllColorsUseCase";
import GetAllTypeOfFuelsUseCase from "../domain/use_cases/typeOfFuel/GetAllTypeOfFuelsUseCase";
import GetAllTypeVehiclesUseCase from "../domain/use_cases/typeVehicle/GetAllTypeVehiclesUseCase";
import BrandRepository, { BrandRepositoryName } from "../domain/repositories/BrandRepository";
import ColorRepository, { ColorRepositoryName } from "../domain/repositories/ColorRepository";
import TypeOfFuelRepository, { TypeOfFuelRepositoryName } from "../domain/repositories/TypeOfFuelRepository";
import BrandRepositoryTest from "../data/repositories/brand/BrandRepositoryTest";
import ColorRepositoryTest from "../data/repositories/color/ColorRepositoryTest";
import TypeVehicleRepository, { TypeVehicleRepositoryName } from "../domain/repositories/TypeVehicleRepository";
import TypeOfFuelRepositoryTest from "../data/repositories/typeOfFuel/TypeOfFuelRepositoryTest";
import TypeVehicleRepositoryTest from "../data/repositories/typeOfVehicle/TypeVehicleRepositoryTest";
import GetCarByIdUseCase from "../domain/use_cases/car/GetCarByIdUseCase";
import GetRelatedCarsByCardIdUseCase from "../domain/use_cases/car/GetRelatedCarsByCardIdUseCase";
import GetAllDepartmentsUseCase from "../domain/use_cases/department/GetAllDepartmentsUseCase";
import DepartmentRepository, { DepartmentRepositoryName } from "../domain/repositories/DepartmentRepository";
import DepartmentProvider, { DepartmentProviderName } from "../domain/providers/department/DepartmentProvider";
import DepartmentRepositoryTest from "../data/repositories/deparment/DepartmentRepositoryTest";
import DepartmentProviderImpl from "../presentation/providers/deparment/DepartmentProviderImpl";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.DEVELOPMENT;
const di = new Container();

// ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT) {
}
di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryTest).inSingletonScope();
di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryTest).inSingletonScope();
di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryTest).inSingletonScope();
di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();
di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryTest).inSingletonScope();
di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryTest).inSingletonScope();
di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryTest).inSingletonScope();

// ------------------ PROVIDERS ------------------ //
di.bind<AllyProvider>(AllyProviderName).toConstantValue(AllyProviderImpl);
di.bind<BrandProvider>(BrandProviderName).toConstantValue(BrandProviderImpl);
di.bind<DepartmentProvider>(DepartmentProviderName).toConstantValue(DepartmentProviderImpl);
di.bind<ColorProvider>(ColorProviderName).toConstantValue(ColorProviderImpl);
di.bind<TypeOfFuelProvider>(TypeOfFuelProviderName).toConstantValue(TypeOfFuelProviderImpl);
di.bind<TypeVehicleProvider>(TypeVehicleProviderName).toConstantValue(TypeVehicleProviderImpl);

//------------------ USE CASES ------------------//

//allies
di.bind<GetAllAlliesUseCase>(GetAllAlliesUseCase.name).toDynamicValue((context) => {
    return new GetAllAlliesUseCase({
        allyRepository: context.container.get(AllyRepositoryName),
        alliesProvider: context.container.get(AllyProviderName)
    });
}).inSingletonScope();

//brands
di.bind<GetAllBrandsUseCase>(GetAllBrandsUseCase.name).toDynamicValue((context) => {
    return new GetAllBrandsUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
        brandProvider: context.container.get(BrandProviderName)
    });
}).inSingletonScope();

//Car  
di.bind<GetSomeRandomCarsUseCase>(GetSomeRandomCarsUseCase.name).toDynamicValue((context) => {
    return new GetSomeRandomCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<GetCarByIdUseCase>(GetCarByIdUseCase.name).toDynamicValue((context) => {
    return new GetCarByIdUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<GetRelatedCarsByCardIdUseCase>(GetRelatedCarsByCardIdUseCase.name).toDynamicValue((context) => {
    return new GetRelatedCarsByCardIdUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<LikeCarUseCase>(LikeCarUseCase.name).toDynamicValue((context) => {
    return new LikeCarUseCase({ carRepository: context.container.get(CarRepositoryName) });
});
di.bind<SearchCarsUseCase>(SearchCarsUseCase.name).toDynamicValue((context) => {
    return new SearchCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
});

di.bind<GetAllDepartmentsUseCase>(GetAllDepartmentsUseCase.name).toDynamicValue((context) => {
    return new GetAllDepartmentsUseCase({
        departmentRepository: context.container.get(DepartmentRepositoryName),
        departmentProvider: context.container.get(DepartmentProviderName)
    });
}).inSingletonScope();

//colors
di.bind<GetAllColorsUseCase>(GetAllColorsUseCase.name).toDynamicValue((context) => {
    return new GetAllColorsUseCase({
        colorRepository: context.container.get(ColorRepositoryName),
        colorProvider: context.container.get(ColorProviderName)
    });
}).inSingletonScope();

//default
di.bind<LoadUseCase>(LoadUseCase.name).toDynamicValue((context) => {
    return new LoadUseCase({ 
        getAllAlliesUseCase: context.container.get(GetAllAlliesUseCase.name),
        getAllBrandsUseCase: context.container.get(GetAllBrandsUseCase.name),
        getAllColorsUseCase: context.container.get(GetAllColorsUseCase.name),
        getAllTypeOfFueslUseCase: context.container.get(GetAllTypeOfFuelsUseCase.name),
        getAllTypeOfVehiclesUseCase: context.container.get(GetAllTypeVehiclesUseCase.name),
     });
});

//type of fuel
di.bind<GetAllTypeOfFuelsUseCase>(GetAllTypeOfFuelsUseCase.name).toDynamicValue((context) => {
    return new GetAllTypeOfFuelsUseCase({
        typeOfFuelRepository: context.container.get(TypeOfFuelRepositoryName),
        typeOfFuelProvider: context.container.get(TypeOfFuelProviderName)
    });
}).inSingletonScope();

//type of vehicle
di.bind<GetAllTypeVehiclesUseCase>(GetAllTypeVehiclesUseCase.name).toDynamicValue((context) => {
    return new GetAllTypeVehiclesUseCase({
        typeVehicleRepository: context.container.get(TypeOfFuelRepositoryName),
        typeVehicleProvider: context.container.get(TypeVehicleProviderName)
    });
}).inSingletonScope();

export default di;