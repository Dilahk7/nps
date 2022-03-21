export class userModel {
  employecode: string;
  amount: number;
  calculatedAmount: number;
  status: string;
  date: Date;

  constructor(
    employecode: string,
    amount: number,
    calculatedAmount: number,
    status: string,
    date: Date
  ) {
    this.employecode = employecode;
    this.amount = amount;
    this.calculatedAmount = calculatedAmount;
    this.status = status;
    this.date = date;
  }
}
