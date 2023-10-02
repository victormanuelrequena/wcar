import { Container } from "inversify";
import "reflect-metadata";
import GetSomeRandomCarsUseCase, { GetSomeRandomCarsUseCaseName } from "../domain/use_cases/car/GetSomeRandomCarsUseCase";
import CarRepository, { CarRepositoryName } from "../domain/repositories/CarRepository";
import CarRepositoryTest from "../data/repositories/car/CarRepositoryTest";
import LikeCarUseCase, { LikeCarUseCaseName } from "../domain/use_cases/car/LikeCarUseCase";
import AllyProvider, { AllyProviderName } from "../domain/providers/ally/AllyProvider";
import AllyProviderImpl from "../presentation/providers/ally/AllyProviderImpl";
import GetAllAlliesUseCase, { GetAllAlliesUseCaseName } from "../domain/use_cases/ally/GetAllAlliesUseCase";
import AllyRepository, { AllyRepositoryName } from "../domain/repositories/AllyRepository";
import AllyRepositoryTest from "../data/repositories/ally/AllyRepositoryTest";
import LoadUseCase, { LoadUseCaseName } from "../domain/use_cases/default/LoadUseCase";
import SearchCarsUseCase, { SearchCarsUseCaseName } from "../domain/use_cases/car/SearchCarsUseCase";
import BrandProvider, { BrandProviderName } from "../domain/providers/brand/BrandProvider";
import BrandProviderImpl from "../presentation/providers/brand/BrandProviderImpl";
import ColorProvider, { ColorProviderName } from "../domain/providers/color/ColorProvider";
import ColorProviderImpl from "../presentation/providers/color/ColorProviderImpl";
import TypeOfFuelProvider, { TypeOfFuelProviderName } from "../domain/providers/typeOfFuel/TypeOfFuelProvider";
import TypeOfFuelProviderImpl from "../presentation/providers/typeOfFuel/TypeOfFuelProviderImpl";
import TypeVehicleProvider, { TypeVehicleProviderName } from "../domain/providers/typeVehicle/TypeVehicleProvider";
import TypeVehicleProviderImpl from "../presentation/providers/typeVehicle/TypeVehicleProviderImpl";
import GetAllBrandsUseCase, { GetAllBrandsUseCaseName } from "../domain/use_cases/brand/GetAllBrandsUseCase";
import GetAllColorsUseCase, { GetAllColorsUseCaseName } from "../domain/use_cases/color/GetAllColorsUseCase";
import GetAllTypeOfFuelsUseCase, { GetAllTypeOfFuelsUseCaseName } from "../domain/use_cases/typeOfFuel/GetAllTypeOfFuelsUseCase";
import GetAllTypeVehiclesUseCase, { GetAllTypeVehiclesUseCaseName } from "../domain/use_cases/typeVehicle/GetAllTypeVehiclesUseCase";
import BrandRepository, { BrandRepositoryName } from "../domain/repositories/BrandRepository";
import ColorRepository, { ColorRepositoryName } from "../domain/repositories/ColorRepository";
import TypeOfFuelRepository, { TypeOfFuelRepositoryName } from "../domain/repositories/TypeOfFuelRepository";
import BrandRepositoryTest from "../data/repositories/brand/BrandRepositoryTest";
import ColorRepositoryTest from "../data/repositories/color/ColorRepositoryTest";
import TypeVehicleRepository, { TypeVehicleRepositoryName } from "../domain/repositories/TypeVehicleRepository";
import TypeOfFuelRepositoryTest from "../data/repositories/typeOfFuel/TypeOfFuelRepositoryTest";
import TypeVehicleRepositoryTest from "../data/repositories/typeOfVehicle/TypeVehicleRepositoryTest";
import GetCarByIdUseCase, { GetCarByIdUseCaseName } from "../domain/use_cases/car/GetCarByIdUseCase";
import GetRelatedCarsByCardIdUseCase, { GetRelatedCarsByCardIdUseCaseName } from "../domain/use_cases/car/GetRelatedCarsByCardIdUseCase";
import GetAllDepartmentsUseCase, { GetAllDepartmentsUseCaseName } from "../domain/use_cases/department/GetAllDepartmentsUseCase";
import DepartmentRepository, { DepartmentRepositoryName } from "../domain/repositories/DepartmentRepository";
import DepartmentProvider, { DepartmentProviderName } from "../domain/providers/department/DepartmentProvider";
import DepartmentRepositoryTest from "../data/repositories/deparment/DepartmentRepositoryTest";
import DepartmentProviderImpl from "../presentation/providers/deparment/DepartmentProviderImpl";
import GetAvailableDatesForBuyUseCase, { GetAvailableDatesForBuyUseCaseName } from "../domain/use_cases/book/GetAvailableDatesForBuyUseCase";
import BookRepository, { BookRepositoryName } from "../domain/repositories/BookRepository";
import GetAvailableDatesForSellUseCase, { GetAvailableDatesForSellUseCaseName } from "../domain/use_cases/book/GetAvailableDatesForSellUseCase";
import GetAvailableHoursForBuyUseCase, { GetAvailableHoursForBuyUseCaseName } from "../domain/use_cases/book/GetAvailableHoursForBuyUseCase";
import GetAvailableHoursForSellUseCase, { GetAvailableHoursForSellUseCaseName } from "../domain/use_cases/book/GetAvailableHoursForSellUseCase";
import ModalsProvider, { ModalsProviderName } from "../domain/providers/modal/ModalsProvider";
import ModalsProviderImpl from "../presentation/providers/modals/ModalsProviderImpl";
import BookRepositoryTest from "../data/repositories/book/BookRepositoryTest";
import BookACarWithPaymentUseCase, { BookACarWithPaymentUseCaseName } from "../domain/use_cases/car/BookACarWithPaymentUseCase";
import UserProvider, { UserProviderName } from "../domain/providers/user/UserProvider";
import UserProviderImpl from "../presentation/providers/user/UserProviderImpl";
import BookADateForBuyUseCase, { BookADateForBuyUseCaseName } from "../domain/use_cases/book/BookADateForBuyUseCase";
import CommentRepository, { CommentRepositoryName } from "../domain/repositories/CommentRepository";
import CommentRepositoryTest from "../data/repositories/comment/CommentRepositoryTest";
import GetAllCommentsUseCase, { GetAllCommentsUseCaseName } from "../domain/use_cases/comment/GetAllCommentsUseCase";
import GetModelsByBrandUseCase, { GetModelsByBrandUseCaseName } from "../domain/use_cases/brand/GetModelsByBrandUseCase";
import GetModelVersionByModelAndBrandIdUseCase, { GetModelVersionByModelAndBrandIdUseCaseName } from "../domain/use_cases/brand/GetModelVersionByModelAndBrandIdUseCase";
import GetAllCitiesUseCase, { GetAllCitiesUseCaseName } from "../domain/use_cases/city/GetAllCitiesUseCase";
import CityProvider, { CityProviderName } from "../domain/providers/city/CityProvider";
import CityRepository, { CityRepositoryName } from "../domain/repositories/CityRepository";
import { CityRepositoryTest } from "../data/repositories/city/CityRepositoryTest";
import CityProviderImpl from "../presentation/providers/city/CityProviderImpl";
import CalculatorRepository, { CalculatorRepositoryName } from "../domain/repositories/CalculatorRepository";
import CalculatorRepositoryTest from "../data/repositories/calculator/CalculatorRepositoryTest";
import CalculateOfferForCarUseCase, { CalculateOfferForCarUseCaseName } from "../domain/use_cases/calculator/CalculateOfferForCarUseCase";
import FrequentQuestionRepository, { FrequentQuestionRepositoryName } from "../domain/repositories/FrequentQuestionRepository";
import FrequentQuestionRepositoryTest from "../data/repositories/frequentQuestion/FrequentQuestionRepositoryTest";
import InsuranceRepository, { InsuranceRepositoryName } from "../domain/repositories/InsuranceRepository";
import { InsuranceRepositoryTest } from "../data/repositories/insurance/InsuranceRepositoryTest";
import GetAllInsurancesUseCase, { GetAllInsurancesUseCaseName } from "../domain/use_cases/insurance/GetAllInsurancesUseCase";
import CalculateCreditForCarUseCase, { CalculateCreditForCarUseCaseName } from "../domain/use_cases/calculator/CalculateCreditForCarUseCase";
import GetAllProcedureQuestionsUseCase, { GetAllProcedureQuestionsUseCaseName } from "../domain/use_cases/frequentQuestion/GetAllProcedureQuestionsUseCase";
import GetAllBlogsAndMainPostUseCase, { GetAllBlogsAndMainPostUseCaseName } from "../domain/use_cases/blog/GetAllBlogsAndMainPostUseCase";
import BlogPostRepository, { BlogPostRepositoryName } from "../domain/repositories/BlogPostRepository";
import BlogPostRepositoryTest from "../data/repositories/blogPost/BlogPostRepositoryTest";
import FavoriteCarsProviderImpl from "../presentation/providers/favoriteCars/FavoriteCarsProviderImpl";
import GetFavoriteCarsUseCase, { GetFavoriteCarsUseCaseName } from "../domain/use_cases/car/GetFavoriteCarsUseCase";
import GetBlogPostByIdUseCase, { GetBlogPostByIdUseCaseName } from "../domain/use_cases/blog/GetBlogPostByIdUseCase.tsx";
import FavoriteCarsProvider, { FavoriteCarsProviderName } from "../domain/providers/favoriteCars/FavoriteCarsProviderName";
import CalculateInsuranceUseCase, { CalculateInsuranceUseCaseName } from "../domain/use_cases/calculator/CalculateInsuranceUseCase";
import TagRepository, { TagRepositoryName } from "../domain/repositories/TagRepository";
import TagRepositoryTest from "../data/repositories/tag/TagRepositoryTest";
import TagProvider, { TagProviderName } from "../domain/providers/tag/TagProvider";
import TagProviderImpl from "../presentation/providers/tag/TagProviderImpl";
import GetAllTagsUseCase, { GetAllTagsUseCaseName } from "../domain/use_cases/tag/GetAllTagsUseCase";
import AuthRepositoryTest from "../data/repositories/auth/AuthRepositoryTest";
import AuthRepository, { AuthRepositoryName } from "../domain/repositories/AuthRepository";
import ConfirmUserUseCase, { ConfirmUserUseCaseName } from "../domain/use_cases/auth/ConfirmUserUseCase";
import GetCurrentUserUseCase, { GetCurrentUserUseCaseName } from "../domain/use_cases/auth/GetCurrentUserUseCase";
import SendConfirmCodeUseCase, { SendConfirmCodeUseCaseName } from "../domain/use_cases/auth/SendConfirmCodeUseCase";
import SendRecoveryPasswordCodeUseCase, { SendRecoveryPasswordCodeUseCaseName } from "../domain/use_cases/auth/SendRecoveryPasswordCodeUseCase";
import SignInUseCase, { SignInUseCaseName } from "../domain/use_cases/auth/SignInUseCase";
import SignOutUseCase, { SignOutUseCaseName } from "../domain/use_cases/auth/SignOutUseCase";
import SignUpUseCase, { SignUpUseCaseName } from "../domain/use_cases/auth/SignUpUseCase";
import UpdatePasswordByRecoveryUseCase, { UpdatePasswordByRecoveryUseCaseName } from "../domain/use_cases/auth/UpdatePasswordByRecoveryUseCase";
import SignInWithFacebookUseCase, { SignInWithFacebookUseCaseName } from "../domain/use_cases/auth/SignInWithFacebookUseCase";
import SignInWithGoogleUseCase, { SignInWithGoogleUseCaseName } from "../domain/use_cases/auth/SignInWithGoogleUseCase";
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
import CalculatorRepositoryDev from "../data/repositories/calculator/CalculatorRepositoryDev";
import CalculatorRepositoryImpl from "../data/repositories/calculator/CalculatorRepositoryImpl";
import { CityRepositoryDev } from "../data/repositories/city/CityRepositoryDev";
import CityRepositoryImpl from "../data/repositories/city/impl/CityRepositoryImpl";
import ColorRepositoryImpl from "../data/repositories/color/impl/ColorRepositoryImpl";
import ColorRepositoryDev from "../data/repositories/color/ColorRepositoryDev";
import CommentRepositoryDev from "../data/repositories/comment/CommentRepositoryDev";
import CommentRepositoryImpl from "../data/repositories/comment/impl/CommentRepositoryImpl";
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
import ContactRepository, { ContactRepositoryName } from "../domain/repositories/ContactRepository";
import ContactRepositoryDev from "../data/repositories/contact/ContactRepositoryDev";
import ContactRepositoryImpl from "../data/repositories/contact/impl/ContactRepositoryImpl";
import ContactRepositoryTest from "../data/repositories/contact/ContactRepositoryTest";
import ContactUseCase, { ContactUseCaseName } from "../domain/use_cases/contact/ContactUseCase";
import GetCitiesByDepartmentIdUseCase, { GetCitiesByDepartmentIdUseCaseName } from "../domain/use_cases/city/GetCitiesByDepartmentIdUseCase";
import GetAllFrequentQuestionsAboutUsUseCase, { GetAllFrequentQuestionsAboutUsUseCaseName } from "../domain/use_cases/frequentQuestion/GetAllFrequentQuestionsAboutUsUseCase";
import GetAllInsuranceQuestionsUseCase, { GetAllInsuranceQuestionsUseCaseName } from "../domain/use_cases/frequentQuestion/GetAllInsuranceQuestionsUseCase";
import ConfirmBookingUseCase, { ConfirmBookingUseCaseName } from "../domain/use_cases/book/ConfirmBookingUseCase";
import ContactByCRMUseCase, { ContactByCRMUseCaseName } from "../domain/use_cases/contact/ContactByCRMUseCase";
import BookACarUseCase, { BookACarUseCaseName } from "../domain/use_cases/book/BookACarUseCase";
import BookADateForSeeUseCase, { BookADateForSeeUseCaseName } from "../domain/use_cases/book/BookADateForSeeUseCase";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.PRODUCTION.toString();
const di = new Container();

//#region ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT.toString()) {
    di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryDev).inSingletonScope();
    di.bind<AuthRepository>(AuthRepositoryName).to(AuthRepositoryDev).inSingletonScope();
    di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryDev).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryDev).inSingletonScope();
    di.bind<ContactRepository>(ContactRepositoryName).to(ContactRepositoryDev).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryDev).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryDev).inSingletonScope();
    di.bind<CalculatorRepository>(CalculatorRepositoryName).to(CalculatorRepositoryDev).inSingletonScope();
    di.bind<CityRepository>(CityRepositoryName).to(CityRepositoryDev).inSingletonScope();
    di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryDev).inSingletonScope();
    di.bind<CommentRepository>(CommentRepositoryName).to(CommentRepositoryDev).inSingletonScope();
    di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryDev).inSingletonScope();
    di.bind<FrequentQuestionRepository>(FrequentQuestionRepositoryName).to(FrequentQuestionRepositoryDev).inSingletonScope();
    di.bind<InsuranceRepository>(InsuranceRepositoryName).to(InsuranceRepositoryDev).inSingletonScope();
    di.bind<TagRepository>(TagRepositoryName).to(TagRepositoryDev).inSingletonScope();
    di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryDev).inSingletonScope();
    di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryDev).inSingletonScope();
} else if (mode === MODE_DI.PRODUCTION.toString()) {
    di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryImpl).inSingletonScope();
    di.bind<AuthRepository>(AuthRepositoryName).to(AuthRepositoryImpl).inSingletonScope();
    di.bind<BrandRepository>(BrandRepositoryName).to(BrandRepositoryImpl).inSingletonScope();
    di.bind<ContactRepository>(ContactRepositoryName).to(ContactRepositoryImpl).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryImpl).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryImpl).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryImpl).inSingletonScope();
    di.bind<CalculatorRepository>(CalculatorRepositoryName).to(CalculatorRepositoryImpl).inSingletonScope();
    di.bind<CityRepository>(CityRepositoryName).to(CityRepositoryImpl).inSingletonScope();
    di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryImpl).inSingletonScope();
    di.bind<CommentRepository>(CommentRepositoryName).to(CommentRepositoryImpl).inSingletonScope();
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
    di.bind<ContactRepository>(ContactRepositoryName).to(ContactRepositoryTest).inSingletonScope();
    di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();
    di.bind<BlogPostRepository>(BlogPostRepositoryName).to(BlogPostRepositoryTest).inSingletonScope();
    di.bind<BookRepository>(BookRepositoryName).to(BookRepositoryTest).inSingletonScope();
    di.bind<CalculatorRepository>(CalculatorRepositoryName).to(CalculatorRepositoryTest).inSingletonScope();
    di.bind<CityRepository>(CityRepositoryName).to(CityRepositoryTest).inSingletonScope();
    di.bind<ColorRepository>(ColorRepositoryName).to(ColorRepositoryTest).inSingletonScope();
    di.bind<CommentRepository>(CommentRepositoryName).to(CommentRepositoryTest).inSingletonScope();
    di.bind<DepartmentRepository>(DepartmentRepositoryName).to(DepartmentRepositoryTest).inSingletonScope();
    di.bind<FrequentQuestionRepository>(FrequentQuestionRepositoryName).to(FrequentQuestionRepositoryTest).inSingletonScope();
    di.bind<InsuranceRepository>(InsuranceRepositoryName).to(InsuranceRepositoryTest).inSingletonScope();
    di.bind<TagRepository>(TagRepositoryName).to(TagRepositoryTest).inSingletonScope();
    di.bind<TypeOfFuelRepository>(TypeOfFuelRepositoryName).to(TypeOfFuelRepositoryTest).inSingletonScope();
    di.bind<TypeVehicleRepository>(TypeVehicleRepositoryName).to(TypeVehicleRepositoryTest).inSingletonScope();
}
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
di.bind<ConfirmUserUseCase>(ConfirmUserUseCaseName).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new ConfirmUserUseCase({ authRepository });
}).inSingletonScope();
di.bind<GetCurrentUserUseCase>(GetCurrentUserUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new GetCurrentUserUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SendConfirmCodeUseCase>(SendConfirmCodeUseCaseName).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SendConfirmCodeUseCase({ authRepository });
}).inSingletonScope();
di.bind<SendRecoveryPasswordCodeUseCase>(SendRecoveryPasswordCodeUseCaseName).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SendRecoveryPasswordCodeUseCase({ authRepository });
}).inSingletonScope();
di.bind<SignInUseCase>(SignInUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignInWithFacebookUseCase>(SignInWithFacebookUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInWithFacebookUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignInWithGoogleUseCase>(SignInWithGoogleUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignInWithGoogleUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignOutUseCase>(SignOutUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignOutUseCase({ userProvider, authRepository });
}).inSingletonScope();
di.bind<SignUpUseCase>(SignUpUseCaseName).toDynamicValue((context) => {
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new SignUpUseCase({ authRepository });
}).inSingletonScope();
di.bind<UpdatePasswordByRecoveryUseCase>(UpdatePasswordByRecoveryUseCaseName).toDynamicValue((context) => {
    const userProvider = context.container.get<UserProvider>(UserProviderName);
    const authRepository = context.container.get<AuthRepository>(AuthRepositoryName);
    return new UpdatePasswordByRecoveryUseCase({ userProvider, authRepository });
}).inSingletonScope();
//#endregion
//#region allies
di.bind<GetAllAlliesUseCase>(GetAllAlliesUseCaseName).toDynamicValue((context) => {
    return new GetAllAlliesUseCase({
        allyRepository: context.container.get(AllyRepositoryName),
        alliesProvider: context.container.get(AllyProviderName)
    });
}).inSingletonScope();
//#endregion
//#region blog post
di.bind<GetBlogPostByIdUseCase>(GetBlogPostByIdUseCaseName).toDynamicValue((context) => {
    return new GetBlogPostByIdUseCase({
        blogPostRepository: context.container.get(BlogPostRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAllBlogsAndMainPostUseCase>(GetAllBlogsAndMainPostUseCaseName).toDynamicValue((context) => {
    return new GetAllBlogsAndMainPostUseCase({
        blogPostRepository: context.container.get(BlogPostRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region book
di.bind<BookADateForSeeUseCase>(BookADateForSeeUseCaseName).toDynamicValue((context) => {
    return new BookADateForSeeUseCase({
        bookRepository: context.container.get(BookRepositoryName),
    });
}).inSingletonScope();
di.bind<BookACarUseCase>(BookACarUseCaseName).toDynamicValue((context) => {
    return new BookACarUseCase({
        bookRepository: context.container.get(BookRepositoryName),
    });
}).inSingletonScope();
di.bind<BookADateForBuyUseCase>(BookADateForBuyUseCaseName).toDynamicValue((context) => {
    return new BookADateForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName),
        userProvider: context.container.get(UserProviderName),
    });
}).inSingletonScope();
di.bind<ConfirmBookingUseCase>(ConfirmBookingUseCaseName).toDynamicValue((context) => {
    return new ConfirmBookingUseCase({
        bookRepository: context.container.get(BookRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAvailableDatesForBuyUseCase>(GetAvailableDatesForBuyUseCaseName).toDynamicValue((context) => {
    return new GetAvailableDatesForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableDatesForSellUseCase>(GetAvailableDatesForSellUseCaseName).toDynamicValue((context) => {
    return new GetAvailableDatesForSellUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableHoursForBuyUseCase>(GetAvailableHoursForBuyUseCaseName).toDynamicValue((context) => {
    return new GetAvailableHoursForBuyUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
di.bind<GetAvailableHoursForSellUseCase>(GetAvailableHoursForSellUseCaseName).toDynamicValue((context) => {
    return new GetAvailableHoursForSellUseCase({
        bookRepository: context.container.get(BookRepositoryName)
    });
}).inSingletonScope();
//#endregion
//#region brands
di.bind<GetAllBrandsUseCase>(GetAllBrandsUseCaseName).toDynamicValue((context) => {
    return new GetAllBrandsUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
        brandProvider: context.container.get(BrandProviderName)
    });
}).inSingletonScope();
di.bind<GetModelsByBrandUseCase>(GetModelsByBrandUseCaseName).toDynamicValue((context) => {
    return new GetModelsByBrandUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
    });
}).inSingletonScope();
di.bind<GetModelVersionByModelAndBrandIdUseCase>(GetModelVersionByModelAndBrandIdUseCaseName).toDynamicValue((context) => {
    return new GetModelVersionByModelAndBrandIdUseCase({
        brandRepository: context.container.get(BrandRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region calculator
di.bind<CalculateCreditForCarUseCase>(CalculateCreditForCarUseCaseName).toDynamicValue((context) => {
    return new CalculateCreditForCarUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
di.bind<CalculateInsuranceUseCase>(CalculateInsuranceUseCaseName).toDynamicValue((context) => {
    return new CalculateInsuranceUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
di.bind<CalculateOfferForCarUseCase>(CalculateOfferForCarUseCaseName).toDynamicValue((context) => {
    return new CalculateOfferForCarUseCase({
        calculatorRepository: context.container.get(CalculatorRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region Car  
di.bind<BookACarWithPaymentUseCase>(BookACarWithPaymentUseCaseName).toDynamicValue((context) => {
    return new BookACarWithPaymentUseCase({
        carRepository: context.container.get(CarRepositoryName),
    });
}).inSingletonScope();
di.bind<GetFavoriteCarsUseCase>(GetFavoriteCarsUseCaseName).toDynamicValue((context) => {
    return new GetFavoriteCarsUseCase({
        carRepository: context.container.get(CarRepositoryName),
        favoriteCarProvider: context.container.get(FavoriteCarsProviderName)
    });
}).inSingletonScope();
di.bind<GetSomeRandomCarsUseCase>(GetSomeRandomCarsUseCaseName).toDynamicValue((context) => {
    return new GetSomeRandomCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<GetCarByIdUseCase>(GetCarByIdUseCaseName).toDynamicValue((context) => {
    return new GetCarByIdUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<GetRelatedCarsByCardIdUseCase>(GetRelatedCarsByCardIdUseCaseName).toDynamicValue((context) => {
    return new GetRelatedCarsByCardIdUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<LikeCarUseCase>(LikeCarUseCaseName).toDynamicValue((context) => {
    return new LikeCarUseCase({
        carRepository: context.container.get(CarRepositoryName),
        userProvider: context.container.get(UserProviderName),
        favoriteCarProvider: context.container.get(FavoriteCarsProviderName)
    });
});
di.bind<SearchCarsUseCase>(SearchCarsUseCaseName).toDynamicValue((context) => {
    return new SearchCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
});
//#endregion
//#region contact
di.bind<ContactUseCase>(ContactUseCaseName).toDynamicValue((context) => {
    return new ContactUseCase({
        contactRepository: context.container.get(ContactRepositoryName),
    });
}).inSingletonScope();
di.bind<ContactByCRMUseCase>(ContactByCRMUseCaseName).toDynamicValue((context) => {
    return new ContactByCRMUseCase({
        contactRepository: context.container.get(ContactRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region departments
di.bind<GetAllDepartmentsUseCase>(GetAllDepartmentsUseCaseName).toDynamicValue((context) => {
    return new GetAllDepartmentsUseCase({
        departmentRepository: context.container.get(DepartmentRepositoryName),
        departmentProvider: context.container.get(DepartmentProviderName)
    });
}).inSingletonScope();
//#endregion
//#region cities
di.bind<GetAllCitiesUseCase>(GetAllCitiesUseCaseName).toDynamicValue((context) => {
    return new GetAllCitiesUseCase({
        cityProvider: context.container.get(CityProviderName),
        cityRepository: context.container.get(CityRepositoryName),
    });
}).inSingletonScope();
di.bind<GetCitiesByDepartmentIdUseCase>(GetCitiesByDepartmentIdUseCaseName).toDynamicValue((context) => {
    return new GetCitiesByDepartmentIdUseCase({
        cityRepository: context.container.get(CityRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region colors
di.bind<GetAllColorsUseCase>(GetAllColorsUseCaseName).toDynamicValue((context) => {
    return new GetAllColorsUseCase({
        colorRepository: context.container.get(ColorRepositoryName),
        colorProvider: context.container.get(ColorProviderName)
    });
}).inSingletonScope();
//#endregion
//#region comments
di.bind<GetAllCommentsUseCase>(GetAllCommentsUseCaseName).toDynamicValue((context) => {
    return new GetAllCommentsUseCase({
        commentRepository: context.container.get(CommentRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region defaultf
di.bind<LoadUseCase>(LoadUseCaseName).toDynamicValue((context) => {
    return new LoadUseCase({
        getAllAlliesUseCase: context.container.get(GetAllAlliesUseCaseName),
        getAllBrandsUseCase: context.container.get(GetAllBrandsUseCaseName),
        getAllColorsUseCase: context.container.get(GetAllColorsUseCaseName),
        getAllTypeOfFueslUseCase: context.container.get(GetAllTypeOfFuelsUseCaseName),
        getAllTypeOfVehiclesUseCase: context.container.get(GetAllTypeVehiclesUseCaseName),
        getAllCitiesUseCase: context.container.get(GetAllCitiesUseCaseName),
        getFavoriteCarsUseCase: context.container.get(GetFavoriteCarsUseCaseName),
        getAllTagsUseCase: context.container.get(GetAllTagsUseCaseName),
        getCurrentUserUseCase: context.container.get(GetCurrentUserUseCaseName),
    });
});
//#endregion
//#region frequent
di.bind<GetAllFrequentQuestionsAboutUsUseCase>(GetAllFrequentQuestionsAboutUsUseCaseName).toDynamicValue((context) => {
    return new GetAllFrequentQuestionsAboutUsUseCase({
        frequentQuestionRepository: context.container.get(FrequentQuestionRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAllProcedureQuestionsUseCase>(GetAllProcedureQuestionsUseCaseName).toDynamicValue((context) => {
    return new GetAllProcedureQuestionsUseCase({
        frequentQuestionRepository: context.container.get(FrequentQuestionRepositoryName),
    });
}).inSingletonScope();
di.bind<GetAllInsuranceQuestionsUseCase>(GetAllInsuranceQuestionsUseCaseName).toDynamicValue((context) => {
    return new GetAllInsuranceQuestionsUseCase({
        frequentQuestionRepository: context.container.get(FrequentQuestionRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region insurance
di.bind<GetAllInsurancesUseCase>(GetAllInsurancesUseCaseName).toDynamicValue((context) => {
    return new GetAllInsurancesUseCase({
        insuranceRepository: context.container.get(InsuranceRepositoryName),
    });
}).inSingletonScope();
//#endregion
//#region tags
di.bind<GetAllTagsUseCase>(GetAllTagsUseCaseName).toDynamicValue((context) => {
    return new GetAllTagsUseCase({
        tagRepository: context.container.get(TagRepositoryName),
        tagProvider: context.container.get(TagProviderName)
    });
}).inSingletonScope();
//#endregion
//#region type of fuel
di.bind<GetAllTypeOfFuelsUseCase>(GetAllTypeOfFuelsUseCaseName).toDynamicValue((context) => {
    return new GetAllTypeOfFuelsUseCase({
        typeOfFuelRepository: context.container.get(TypeOfFuelRepositoryName),
        typeOfFuelProvider: context.container.get(TypeOfFuelProviderName)
    });
}).inSingletonScope();
//#endregion
//#region type of vehicle
di.bind<GetAllTypeVehiclesUseCase>(GetAllTypeVehiclesUseCaseName).toDynamicValue((context) => {
    return new GetAllTypeVehiclesUseCase({
        typeVehicleRepository: context.container.get(TypeVehicleRepositoryName),
        typeVehicleProvider: context.container.get(TypeVehicleProviderName)
    });
}).inSingletonScope();
//#endregion
//#endregion usecases
export default di;