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
import CalculatorRepository, { CalculatorRepositoryName } from "../domain/repositories/CalculatorRepository";
import CalculatorRepositoryTest from "../data/repositories/calculator/CalculatorRepositoryTest";
import CalculateOfferForCarUseCase from "../domain/use_cases/calculator/CalculateOfferForCarUseCase";
import FrequentQuestionRepository, { FrequentQuestionRepositoryName } from "../domain/repositories/FrequentQuestionRepository";
import FrequentQuestionRepositoryTest from "../data/repositories/frequentQuestion/FrequentQuestionRepositoryTest";
import GetAllFrequentQuestionsUseCase from "../domain/use_cases/frequentQuestion/GetAllFrequentQuestionsUseCase";
import InsuranceRepository, { InsuranceRepositoryName } from "../domain/repositories/InsuranceRepository";
import { InsuranceRepositoryTest } from "../data/repositories/insurance/InsuranceRepositoryTest";
import GetAllInsurancesUseCase from "../domain/use_cases/insurance/GetAllInsurancesUseCase";
import CalculateCreditForCarUseCase from "../domain/use_cases/calculator/CalculateCreditForCarUseCase";
import GetAllProcedureQuestionsUseCase from "../domain/use_cases/frequentQuestion/GetAllProcedureQuestionsUseCase";
import GetAllBlogsAndMainPostUseCase from "../domain/use_cases/blog/GetAllBlogsAndMainPostUseCase";
import BlogPostRepository, { BlogPostRepositoryName } from "../domain/repositories/BlogPostRepository";
import BlogPostRepositoryTest from "../data/repositories/blogPost/BlogPostRepositoryTest";
import FavoriteCarsProviderImpl from "../presentation/providers/favoriteCars/FavoriteCarsProviderImpl";
import GetFavoriteCarsUseCase from "../domain/use_cases/car/GetFavoriteCarsUseCase";
import GetBlogPostByIdUseCase from "../domain/use_cases/blog/GetBlogPostByIdUseCase.tsx";
import FavoriteCarsProvider, { FavoriteCarsProviderName } from "../domain/providers/favoriteCars/FavoriteCarsProviderName";
import CalculateInsuranceUseCase from "../domain/use_cases/calculator/CalculateInsuranceUseCase";
import TagRepository, { TagRepositoryName } from "../domain/repositories/TagRepository";
import TagRepositoryTest from "../data/repositories/tag/TagRepositoryTest";
import TagProvider, { TagProviderName } from "../domain/providers/tag/TagProvider";
import TagProviderImpl from "../presentation/providers/tag/TagProviderImpl";
import GetAllTagsUseCase from "../domain/use_cases/tag/GetAllTagsUseCase";
import AuthRepositoryTest from "../data/repositories/auth/AuthRepositoryTest";
import AuthRepository, { AuthRepositoryName } from "../domain/repositories/AuthRepository";
import ConfirmUserUseCase from "../domain/use_cases/auth/ConfirmUserUseCase";
import GetCurrentUserUseCase from "../domain/use_cases/auth/GetCurrentUserUseCase";
import SendConfirmCodeUseCase from "../domain/use_cases/auth/SendConfirmCodeUseCase";
import SendRecoveryPasswordCodeUseCase from "../domain/use_cases/auth/SendRecoveryPasswordCodeUseCase";
import SignInUseCase from "../domain/use_cases/auth/SignInUseCase";
import SignOutUseCase from "../domain/use_cases/auth/SignOutUseCase";
import SignUpUseCase from "../domain/use_cases/auth/SignUpUseCase";
import UpdatePasswordByRecoveryUseCase from "../domain/use_cases/auth/UpdatePasswordByRecoveryUseCase";
import SignInWithFacebookUseCase from "../domain/use_cases/auth/SignInWithFacebookUseCase";
import SignInWithGoogleUseCase from "../domain/use_cases/auth/SignInWithGoogleUseCase";
import BrandRepositoryImpl from "../data/repositories/brand/impl/BrandRepositoryImpl";
import CarRepositoryImpl from "../data/repositories/car/impl/CarRepositoryImpl";
import AuthRepositoryDev from "../data/repositories/auth/AuthRepositoryDev";
import AuthRepositoryImpl from "../data/repositories/auth/impl/AuthRepositoryImpl";
import AllyRepositoryDev from "../data/repositories/ally/AllyRepositoryDev";
import AllyRepositoryImpl from "../data/repositories/ally/impl/AllyRepositoryImpl";
import BrandRepositoryDev from "../data/repositories/brand/BrandRepositoryDev";
import CarRepositoryDev from "../data/repositories/car/CarRepositoryDev";
import BookRepositoryImpl from "../data/repositories/book/impl/BookRepositoryImpl";
import BookRepositoryDev from "../data/repositories/book/BookRepositoryDev";
import BlogPostRepositoryImpl from "../data/repositories/blogPost/impl/BlogPostRepositoryImpl";
import BlogPostRepositoryDev from "../data/repositories/blogPost/BlogPostRepositoryDev";
import TypeVehicleRepositoryImpl from "../data/repositories/typeOfVehicle/impl/TypeVehicleRepositoryImpl";
import TypeVehicleRepositoryDev from "../data/repositories/typeOfVehicle/TypeVehicleRepositoryDev";
import TypeOfFuelRepositoryDev from "../data/repositories/typeOfFuel/TypeOfFuelRepositoryDev";
import TypeOfFuelRepositoryImpl from "../data/repositories/typeOfFuel/impl/TypeOfFuelRepositoryImpl";
import TagRepositoryDev from "../data/repositories/tag/TagRepositoryDev";
import TagRepositoryImpl from "../data/repositories/tag/impl/TagRepositoryImpl";
import { InsuranceRepositoryDev } from "../data/repositories/insurance/InsuranceRepositoryDev";
import InsuranceRepositoryImpl from "../data/repositories/insurance/impl/InsuranceRepositoryImpl";
import FrequentQuestionRepositoryDev from "../data/repositories/frequentQuestion/FrequentQuestionRepositoryDev";
import FrequentQuestionRepositoryImpl from "../data/repositories/frequentQuestion/impl/FrequentQuestionRepositoryImpl";
import DepartmentRepositoryDev from "../data/repositories/deparment/DepartmentRepositoryDev";
import DepartmentRepositoryImpl from "../data/repositories/deparment/impl/DepartmentRepositoryImpl";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.DEVELOPMENT;
const di = new Container();

//#region ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT) {
    di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryDev).inSingletonScope();
    di.bind<AuthRepository>(AuthRepositoryName).to(AuthRepositoryDev).inSingletonScope();
    di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryDev).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryDev).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryDev).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryDev).inSingletonScope();

    di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryDev).inSingletonScope();
    di.bind<FrequentQuestionRepository>(FrequentQuestionRepositoryName).to(FrequentQuestionRepositoryDev).inSingletonScope();
    di.bind<InsuranceRepository>(InsuranceRepositoryName).to(InsuranceRepositoryDev).inSingletonScope();
    di.bind<TagRepository>(TagRepositoryName).to(TagRepositoryDev).inSingletonScope();
    di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryDev).inSingletonScope();
    di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryDev).inSingletonScope();
} else if (mode === MODE_DI.PRODUCTION) {
    di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryImpl).inSingletonScope();
    di.bind<AuthRepository>(AuthRepositoryName).to(AuthRepositoryImpl).inSingletonScope();
    di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryImpl).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryImpl).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryImpl).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryImpl).inSingletonScope();

    di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryImpl).inSingletonScope();
    di.bind<FrequentQuestionRepository>(FrequentQuestionRepositoryName).to(FrequentQuestionRepositoryImpl).inSingletonScope();
    di.bind<InsuranceRepository>(InsuranceRepositoryName).to(InsuranceRepositoryImpl).inSingletonScope();
    di.bind<TagRepository>(TagRepositoryName).to(TagRepositoryImpl).inSingletonScope();
    di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryImpl).inSingletonScope();
    di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryImpl).inSingletonScope();
} else {
    di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryTest).inSingletonScope();
    di.bind<AuthRepository>(AuthRepositoryName).to(AuthRepositoryTest).inSingletonScope();
    di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryTest).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryTest).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryTest).inSingletonScope();

    di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryTest).inSingletonScope();
    di.bind<FrequentQuestionRepository>(FrequentQuestionRepositoryName).to(FrequentQuestionRepositoryTest).inSingletonScope();
    di.bind<InsuranceRepository>(InsuranceRepositoryName).to(InsuranceRepositoryTest).inSingletonScope();
    di.bind<TagRepository>(TagRepositoryName).to(TagRepositoryTest).inSingletonScope();
    di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryTest).inSingletonScope();
    di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryTest).inSingletonScope();

}
di.bind<CalculatorRepository>(CalculatorRepositoryName).to(CalculatorRepositoryTest).inSingletonScope();
di.bind<CityRepository>(CityRepositoryName).to(CityRepositoryTest).inSingletonScope();
di.bind<CommentRepository>(CommentRepositoryName).to(CommentRepositoryTest).inSingletonScope();
di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryTest).inSingletonScope();
//#endregion

//#region ------------------ PROVIDERS ------------------ //
di.bind<AllyProvider>(AllyProviderName).toConstantValue(AllyProviderImpl);
di.bind<BrandProvider>(BrandProviderName).toConstantValue(BrandProviderImpl);
di.bind<ColorProvider>(ColorProviderName).toConstantValue(ColorProviderImpl);
di.bind<CityProvider>(CityProviderName).toConstantValue(CityProviderImpl);
di.bind<DepartmentProvider>(DepartmentProviderName).toConstantValue(DepartmentProviderImpl);
di.bind<FavoriteCarsProvider>(FavoriteCarsProviderName).toConstantValue(FavoriteCarsProviderImpl);
di.bind<ModalsProvider>(ModalsProviderName).toConstantValue(ModalsProviderImpl);
di.bind<TagProvider>(TagProviderName).toConstantValue(TagProviderImpl);
di.bind<TypeOfFuelProvider>(TypeOfFuelProviderName).toConstantValue(TypeOfFuelProviderImpl);
di.bind<TypeVehicleProvider>(TypeVehicleProviderName).toConstantValue(TypeVehicleProviderImpl);
di.bind<UserProvider>(UserProviderName).toConstantValue(UserProviderImpl);
//#endregion

//#region ------------------ USE CASES ------------------//
//#region Auth  
di.bind<ConfirmUserUseCase>(ConfirmUserUseCase.name).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new ConfirmUserUseCase({ authRepository });
}).inSingletonScope();
di.bind<GetCurrentUserUseCase>(GetCurrentUserUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new GetCurrentUserUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SendConfirmCodeUseCase>(SendConfirmCodeUseCase.name).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SendConfirmCodeUseCase({ authRepository });
}).inSingletonScope();
di.bind<SendRecoveryPasswordCodeUseCase>(SendRecoveryPasswordCodeUseCase.name).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SendRecoveryPasswordCodeUseCase({ authRepository });
}).inSingletonScope();
di.bind<SignInUseCase>(SignInUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignInWithFacebookUseCase>(SignInWithFacebookUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInWithFacebookUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignInWithGoogleUseCase>(SignInWithGoogleUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInWithGoogleUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignOutUseCase>(SignOutUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignOutUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignUpUseCase>(SignUpUseCase.name).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignUpUseCase({ authRepository });
}).inSingletonScope();
di.bind<UpdatePasswordByRecoveryUseCase>(UpdatePasswordByRecoveryUseCase.name).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new UpdatePasswordByRecoveryUseCase({ userProvider, authRepository });
}).inSingletonScope();
//#endregion
//#region allies
di.bind<GetAllAlliesUseCase>(GetAllAlliesUseCase.name).toDynamicValue((context) => {
    return new GetAllAlliesUseCase({
        allyRepository: context.container.get(AllyRepositoryName),
        alliesProvider: context.container.get(AllyProviderName)
    });
}).inSingletonScope();
//#endregion
//#region blog post
di.bind<GetBlogPostByIdUseCase>(GetBlogPostByIdUseCase.name).toDynamicValue((context) => {
    return new GetBlogPostByIdUseCase({
        blogPostRepository: context.container.get(BlogPostRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAllBlogsAndMainPostUseCase>(GetAllBlogsAndMainPostUseCase.name).toDynamicValue((context) => {
    return new GetAllBlogsAndMainPostUseCase({
        blogPostRepository: context.container.get(BlogPostRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region book
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
//#endregion
//#region brands
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
//#endregion
//#region calculator
di.bind<CalculateCreditForCarUseCase>(CalculateCreditForCarUseCase.name).toDynamicValue((context) => {
    return new CalculateCreditForCarUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
di.bind<CalculateInsuranceUseCase>(CalculateInsuranceUseCase.name).toDynamicValue((context) => {
    return new CalculateInsuranceUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
di.bind<CalculateOfferForCarUseCase>(CalculateOfferForCarUseCase.name).toDynamicValue((context) => {
    return new CalculateOfferForCarUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region Car  
di.bind<BookACarWithPaymentUseCase>(BookACarWithPaymentUseCase.name).toDynamicValue((context) => {
    return new BookACarWithPaymentUseCase({
        carRepository: context.container.get(CarRepositoryName),
    });
}).inSingletonScope();
di.bind<GetFavoriteCarsUseCase>(GetFavoriteCarsUseCase.name).toDynamicValue((context) => {
    return new GetFavoriteCarsUseCase({
        carRepository: context.container.get(CarRepositoryName),
        favoriteCarProvider: context.container.get(FavoriteCarsProviderName)
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
    return new LikeCarUseCase({
        carRepository: context.container.get(CarRepositoryName),
        userProvider: context.container.get(UserProviderName),
        favoriteCarProvider: context.container.get(FavoriteCarsProviderName)
    });
});
di.bind<SearchCarsUseCase>(SearchCarsUseCase.name).toDynamicValue((context) => {
    return new SearchCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
});
//#endregion
//#region departments
di.bind<GetAllDepartmentsUseCase>(GetAllDepartmentsUseCase.name).toDynamicValue((context) => {
    return new GetAllDepartmentsUseCase({
        departmentRepository: context.container.get(DepartmentRepositoryName),
        departmentProvider: context.container.get(DepartmentProviderName)
    });
}).inSingletonScope();
//#endregion
//#region cities
di.bind<GetAllCitiesUseCase>(GetAllCitiesUseCase.name).toDynamicValue((context) => {
    return new GetAllCitiesUseCase({
        cityProvider: context.container.get(CityProviderName),
        cityRepository: context.container.get(CityRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region colors
di.bind<GetAllColorsUseCase>(GetAllColorsUseCase.name).toDynamicValue((context) => {
    return new GetAllColorsUseCase({
        colorRepository: context.container.get(ColorRepositoryName),
        colorProvider: context.container.get(ColorProviderName)
    });
}).inSingletonScope();
//#endregion
//#region comments
di.bind<GetAllCommentsUseCase>(GetAllCommentsUseCase.name).toDynamicValue((context) => {
    return new GetAllCommentsUseCase({
        commentRepository: context.container.get(CommentRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region defaultf
di.bind<LoadUseCase>(LoadUseCase.name).toDynamicValue((context) => {
    return new LoadUseCase({
        getAllAlliesUseCase: context.container.get(GetAllAlliesUseCase.name),
        getAllBrandsUseCase: context.container.get(GetAllBrandsUseCase.name),
        getAllColorsUseCase: context.container.get(GetAllColorsUseCase.name),
        getAllTypeOfFueslUseCase: context.container.get(GetAllTypeOfFuelsUseCase.name),
        getAllTypeOfVehiclesUseCase: context.container.get(GetAllTypeVehiclesUseCase.name),
        getAllCitiesUseCase: context.container.get(GetAllCitiesUseCase.name),
        getFavoriteCarsUseCase: context.container.get(GetFavoriteCarsUseCase.name),
        getAllTagsUseCase: context.container.get(GetAllTagsUseCase.name),
        getCurrentUserUseCase: context.container.get(GetCurrentUserUseCase.name),
    });
});
//#endregion
//#region frequent
di.bind<GetAllFrequentQuestionsUseCase>(GetAllFrequentQuestionsUseCase.name).toDynamicValue((context) => {
    return new GetAllFrequentQuestionsUseCase({
        frequentQuestionRepository: context.container.get(FrequentQuestionRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAllProcedureQuestionsUseCase>(GetAllProcedureQuestionsUseCase.name).toDynamicValue((context) => {
    return new GetAllProcedureQuestionsUseCase({
        frequentQuestionRepository: context.container.get(FrequentQuestionRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region insurance
di.bind<GetAllInsurancesUseCase>(GetAllInsurancesUseCase.name).toDynamicValue((context) => {
    return new GetAllInsurancesUseCase({
        insuranceRepository: context.container.get(InsuranceRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region tags
di.bind<GetAllTagsUseCase>(GetAllTagsUseCase.name).toDynamicValue((context) => {
    return new GetAllTagsUseCase({
        tagRepository: context.container.get(TagRepositoryName),
        tagProvider: context.container.get(TagProviderName)
    });
}).inSingletonScope();
//#endregion
//#region type of fuel
di.bind<GetAllTypeOfFuelsUseCase>(GetAllTypeOfFuelsUseCase.name).toDynamicValue((context) => {
    return new GetAllTypeOfFuelsUseCase({
        typeOfFuelRepository: context.container.get(TypeOfFuelRepositoryName),
        typeOfFuelProvider: context.container.get(TypeOfFuelProviderName)
    });
}).inSingletonScope();
//#endregion
//#region type of vehicle
di.bind<GetAllTypeVehiclesUseCase>(GetAllTypeVehiclesUseCase.name).toDynamicValue((context) => {
    return new GetAllTypeVehiclesUseCase({
        typeVehicleRepository: context.container.get(TypeVehicleRepositoryName),
        typeVehicleProvider: context.container.get(TypeVehicleProviderName)
    });
}).inSingletonScope();
//#endregion
//#endregion usecases
export default di;