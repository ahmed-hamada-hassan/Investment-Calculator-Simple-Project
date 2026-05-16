import { Injectable, signal } from '@angular/core';
import { InvestmentData, InvetmentResult } from './investment.models';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private resultData = signal<InvetmentResult[] | null>(null);
  result = this.resultData.asReadonly();

  calculateInvestmentROI(investementData: InvestmentData) {
    const annualData: InvetmentResult[] = [];
    let startingBalance: number = investementData.initialInvestment;
    let totalProfit: number = 0;
    for (let i = 1; i <= investementData.investmentDuration; i++) {
      let currentBalance = startingBalance + investementData.annualContribution;
      let annualProfit = (currentBalance * investementData.expectedReturn) / 100;
      let endValue = currentBalance + annualProfit;
      totalProfit += annualProfit;
      startingBalance = endValue;

      annualData.push({
        year: i,
        endValue: endValue,
        annualProfit: annualProfit,
        totalProfit: totalProfit,
        totalCapital: investementData.initialInvestment + investementData.annualContribution * i,
      });
    }
    this.resultData.set(annualData);
  }
}
