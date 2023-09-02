import { Either, left, right } from "fp-ts/lib/Either";
import ExceptionEntity from "../../../../../domain/entities/ExceptionEntity";

const CalculateCreditApiImpl = async (vehicleValue: number, initialQuote: number, months: number, insurance: number): Promise<Either<ExceptionEntity, number>> => {
    console.log(vehicleValue, initialQuote, months, insurance);
    const interestRate = 0.1; // Tasa de interés anual (ejemplo: 10%)
    const loanAmount = vehicleValue - initialQuote; // Valor presente del préstamo

    const monthlyInterestRate = interestRate / 12; // Tasa de interés periódica
    const denominator = Math.pow(1 + monthlyInterestRate, -months);

    const payment = ((monthlyInterestRate * loanAmount) / (1 - denominator)) + insurance;
    return right(payment);
}

export default CalculateCreditApiImpl;