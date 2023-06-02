import { Container } from "inversify";
import "reflect-metadata";
import GetSomeRandomCarsUseCase from "../domain/use_cases/car/GetSomeRandomCarsUseCase";
import CarRepository, { CarRepositoryName } from "../domain/repositories/CarRepository";
import CarRepositoryTest from "../data/repositories/car/CarRepositoryTest";
import LikeCarUseCase from "../domain/use_cases/car/LikeCarUseCase";

enum MODE_DI { PRODUCTION, DEVELOPMENT, TEST }

const mode = MODE_DI.DEVELOPMENT;
const di = new Container();

// ------------------ REPOSITORIES ------------------ //
if (mode === MODE_DI.DEVELOPMENT) {
}
di.bind<CarRepository>(CarRepositoryName).to(CarRepositoryTest).inSingletonScope();

// ------------------ PROVIDERS ------------------ //
// di.bind<ModalsProvider>(ModalsProviderName).toConstantValue(ModalsProviderImpl);

//------------------ USE CASES ------------------//

//Car  
di.bind<GetSomeRandomCarsUseCase>(GetSomeRandomCarsUseCase.name).toDynamicValue((context) => {
    return new GetSomeRandomCarsUseCase({ carRepository: context.container.get(CarRepositoryName) });
}).inSingletonScope();
di.bind<LikeCarUseCase>(LikeCarUseCase.name).toDynamicValue((context) => {
    return new LikeCarUseCase({ carRepository: context.container.get(CarRepositoryName) });
});

export default di;