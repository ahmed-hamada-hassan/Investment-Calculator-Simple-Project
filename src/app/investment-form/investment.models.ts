export interface InvestmentData {
  initialInvestment: number;
  annualContribution: number;
  investmentDuration: number;
  expectedReturn: number;
}

export interface InvetmentResult {
  year: number;
  endValue: number;
  annualProfit: number;
  totalProfit: number;
  totalCapital: number;
}
