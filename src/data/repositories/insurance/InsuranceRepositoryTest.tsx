import { injectable } from "inversify";
import InsuranceRepository from "../../../domain/repositories/InsuranceRepository";
import InsuranceEntity from "../../../domain/entities/InsuranceEntity";

const _test: InsuranceEntity = {
    id: '1',
    name: 'Seguro 1'
}
@injectable()
export class InsuranceRepositoryTest implements InsuranceRepository {
    getInsurances(): Promise<InsuranceEntity[]> {
        return new Promise((resolve, reject) => {
            resolve([_test, _test, _test, _test, _test, _test,_test]);
        });
    }
}