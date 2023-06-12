import { Container } from "inversify";
import "reflect-metadata";
import GetSomeRandomCarsUseCase from "../domain/use_cases/car/GetSomeRandomCarsUseCase";
import CarRepository, { CarRepositoryName } from "../domain/repositories/CarRepository";
import CarRepositoryTest from "../data/repositories/car/CarRepositoryTest";
import LikeCarUseCase from "../domain/use_cases/car/LikeCarUseCase";
import AlliesProvider, { AlliesProviderName } from "../domain/providers/allies/AlliesProvider";
import AlliesProviderImpl from "../presentation/providers/allies/AlliesProviderImpl";
import GetAllAlliesUseCase from "../domain/use_cases/ally/GetAllAlliesUseCase";
import AllyRepository, { AllyRepositoryName } from "../domain/repositories/AllyRepository";
import AllyRepositoryTest from "../data/repositories/ally/AllyRepositoryTest";
import LoadUseCase from "../domain/use_cases/default/LoadUseCase";
import SearchCarsUseCase from "../domain/use_cases/car/SearchCarsUseCase";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.DEVELOPMENT;
const di = new Container();

// ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT) {
}
di.bind<AllyRepository>(AllyRepositoryName).to(AllyRepositoryTest).inSingletonScope();
di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();

// ------------------ PROVIDERS ------------------ //
di.bind<AlliesProvider>(AlliesProviderName).toConstantValue(AlliesProviderImpl);

//------------------ USE CASES ------------------//

//allies
di.bind<GetAllAlliesUseCase>(GetAllAlliesUseCase.name).toDynamicValue((context) => {
    return new GetAllAlliesUseCase({
        allyRepository: context.container.get(AllyRepositoryName),
        alliesProvider: context.container.get(AlliesProviderName)
    });
}).inSingletonScope();

//Car  
di.bind<GetSomeRandomCarsUseCase>(GetSomeRandomCarsUseCase.name).toDynamicValue((context) => {
    return new GetSomeRandomCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<LikeCarUseCase>(LikeCarUseCase.name).toDynamicValue((context) => {
    return new LikeCarUseCase({ carRepository: context.container.get(CarRepositoryName) });
});
di.bind<SearchCarsUseCase>(SearchCarsUseCase.name).toDynamicValue((context) => {
    return new SearchCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
});

//default
di.bind<LoadUseCase>(LoadUseCase.name).toDynamicValue((context) => {
    return new LoadUseCase({ getAllAlliesUseCase: context.container.get(GetAllAlliesUseCase.name) });
});

export default di;