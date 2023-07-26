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
import GetAvailableDatesForBuyUseCase from "../domain/use_cases/book/GetAvailableDatesForBuyUseCase";
import BookRepository, { BookRepositoryName } from "../domain/repositories/BookRepository";
import GetAvailableDatesForSellUseCase from "../domain/use_cases/book/GetAvailableDatesForSellUseCase";
import GetAvailableHoursForBuyUseCase from "../domain/use_cases/book/GetAvailableHoursForBuyUseCase";
import GetAvailableHoursForSellUseCase from "../domain/use_cases/book/GetAvailableHoursForSellUseCase";
import ModalsProvider, { ModalsProviderName } from "../domain/providers/modal/ModalsProvider";
import ModalsProviderImpl from "../presentation/providers/modals/ModalsProviderImpl";
import BookRepositoryTest from "../data/repositories/book/BookRepositoryTest";
import BookACarWithPaymentUseCase from "../domain/use_cases/car/BookACarWithPaymentUseCase";
import UserProvider, { UserProviderName } from "../domain/providers/user/UserProvider";
import UserProviderImpl from "../presentation/providers/user/UserProviderImpl";
import BookADateForBuyUseCase from "../domain/use_cases/book/BookADateForBuyUseCase";
import CommentRepository, { CommentRepositoryName } from "../domain/repositories/CommentRepository";
import CommentRepositoryTest from "../data/repositories/comment/CommentRepositoryTest";
import GetAllCommentsUseCase from "../domain/use_cases/comment/GetAllCommentsUseCase";
import GetModelsByBrandUseCase from "../domain/use_cases/brand/GetModelsByBrandUseCase";
import GetModelVersionByModelAndBrandIdUseCase from "../domain/use_cases/brand/GetModelVersionByModelAndBrandIdUseCase";
import GetAllCitiesUseCase from "../domain/use_cases/city/GetAllCitiesUseCase";
import CityProvider, { CityProviderName } from "../domain/providers/city/CityProvider";
import CityRepository, { CityRepositoryName } from "../domain/repositories/CityRepository";
import { CityRepositoryTest } from "../data/repositories/city/CityRepositoryTest";
import CityProviderImpl from "../presentation/providers/city/CityProviderImpl";
import CalculatorRepository, { CalculateOfferForCarProps, CalculatorRepositoryName } from "../domain/repositories/CalculatorRepository";
import CalculatorRepositoryTest from "../data/repositories/calculator/CalculatorRepositoryTest";
import CalculateOfferForCarUseCase from "../domain/use_cases/calculator/CalculateOfferForCarUseCase";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.DEVELOPMENT;
const di = new Container();

// ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT) {
}
di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryTest).inSingletonScope();
di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryTest).inSingletonScope();
di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryTest).inSingletonScope();
di.bind<CalculatorRepository>(CalculatorRepositoryName).to(CalculatorRepositoryTest).inSingletonScope();
di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();
di.bind<CityRepository>(CityRepositoryName).to(CityRepositoryTest).inSingletonScope();
di.bind<CommentRepository>(CommentRepositoryName).to(CommentRepositoryTest).inSingletonScope();
di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryTest).inSingletonScope();
di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryTest).inSingletonScope();
di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryTest).inSingletonScope();
di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryTest).inSingletonScope();

// ------------------ PROVIDERS ------------------ //
di.bind<AllyProvider>(AllyProviderName).toConstantValue(AllyProviderImpl);
di.bind<BrandProvider>(BrandProviderName).toConstantValue(BrandProviderImpl);
di.bind<ColorProvider>(ColorProviderName).toConstantValue(ColorProviderImpl);
di.bind<CityProvider>(CityProviderName).toConstantValue(CityProviderImpl);
di.bind<DepartmentProvider>(DepartmentProviderName).toConstantValue(DepartmentProviderImpl);
di.bind<ModalsProvider>(ModalsProviderName).toConstantValue(ModalsProviderImpl);
di.bind<TypeOfFuelProvider>(TypeOfFuelProviderName).toConstantValue(TypeOfFuelProviderImpl);
di.bind<TypeVehicleProvider>(TypeVehicleProviderName).toConstantValue(TypeVehicleProviderImpl);
di.bind<UserProvider>(UserProviderName).toConstantValue(UserProviderImpl);

//------------------ USE CASES ------------------//

//allies
di.bind<GetAllAlliesUseCase>(GetAllAlliesUseCase.name).toDynamicValue((context) => {
    return new GetAllAlliesUseCase({
        allyRepository: context.container.get(AllyRepositoryName),
        alliesProvider: context.container.get(AllyProviderName)
    });
}).inSingletonScope();

//book
di.bind<BookADateForBuyUseCase>(BookADateForBuyUseCase.name).toDynamicValue((context) => {
    return new BookADateForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAvailableDatesForBuyUseCase>(GetAvailableDatesForBuyUseCase.name).toDynamicValue((context) => {
    return new GetAvailableDatesForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableDatesForSellUseCase>(GetAvailableDatesForSellUseCase.name).toDynamicValue((context) => {
    return new GetAvailableDatesForSellUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableHoursForBuyUseCase>(GetAvailableHoursForBuyUseCase.name).toDynamicValue((context) => {
    return new GetAvailableHoursForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableHoursForSellUseCase>(GetAvailableHoursForSellUseCase.name).toDynamicValue((context) => {
    return new GetAvailableHoursForSellUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();

//brands
di.bind<GetAllBrandsUseCase>(GetAllBrandsUseCase.name).toDynamicValue((context) => {
    return new GetAllBrandsUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
        brandProvider: context.container.get(BrandProviderName)
    });
}).inSingletonScope();
di.bind<GetModelsByBrandUseCase>(GetModelsByBrandUseCase.name).toDynamicValue((context) => {
    return new GetModelsByBrandUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
    });
}).inSingletonScope();
di.bind<GetModelVersionByModelAndBrandIdUseCase>(GetModelVersionByModelAndBrandIdUseCase.name).toDynamicValue((context) => {
    return new GetModelVersionByModelAndBrandIdUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
    });
}).inSingletonScope();

//calculator
di.bind<CalculateOfferForCarUseCase>(CalculateOfferForCarUseCase.name).toDynamicValue((context) => {
    return new CalculateOfferForCarUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();

//Car  
di.bind<BookACarWithPaymentUseCase>(BookACarWithPaymentUseCase.name).toDynamicValue((context) => {
    return new BookACarWithPaymentUseCase({
        carRepository: context.container.get(CarRepositoryName),
    });
}).inSingletonScope();
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

//departments
di.bind<GetAllDepartmentsUseCase>(GetAllDepartmentsUseCase.name).toDynamicValue((context) => {
    return new GetAllDepartmentsUseCase({
        departmentRepository: context.container.get(DepartmentRepositoryName),
        departmentProvider: context.container.get(DepartmentProviderName)
    });
}).inSingletonScope();

//cities
di.bind<GetAllCitiesUseCase>(GetAllCitiesUseCase.name).toDynamicValue((context) => {
    return new GetAllCitiesUseCase({
        cityProvider: context.container.get(CityProviderName),
        cityRepository: context.container.get(CityRepositoryName),
    });
}).inSingletonScope();
//colors
di.bind<GetAllColorsUseCase>(GetAllColorsUseCase.name).toDynamicValue((context) => {
    return new GetAllColorsUseCase({
        colorRepository: context.container.get(ColorRepositoryName),
        colorProvider: context.container.get(ColorProviderName)
    });
}).inSingletonScope();

//comments
di.bind<GetAllCommentsUseCase>(GetAllCommentsUseCase.name).toDynamicValue((context) => {
    return new GetAllCommentsUseCase({
        commentRepository: context.container.get(CommentRepositoryName),
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
        getAllCitiesUseCase: context.container.get(GetAllCitiesUseCase.name),
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