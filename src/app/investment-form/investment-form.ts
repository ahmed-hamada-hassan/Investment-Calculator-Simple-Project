import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from './investment.service';
import { InvestmentData } from './investment.models';

@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  templateUrl: './investment-form.html',
  styleUrl: './investment-form.css',
})
export class InvestmentForm {
  private investmentService: InvestmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('');
  enteredAnnualContribution = signal('');
  enteredInvestmentDuration = signal('');
  enteredExpectedReturn = signal('');

  onSubmit() {
    const inputData: InvestmentData = {
      initialInvestment: Number(this.enteredInitialInvestment()) || 0,
      annualContribution: Number(this.enteredAnnualContribution()) || 0,
      investmentDuration: Number(this.enteredInvestmentDuration()) || 0,
      expectedReturn: Number(this.enteredExpectedReturn()) || 0,
    };
    console.log('Form submitted with values:', inputData);
    this.investmentService.calculateInvestmentROI(inputData);
  }
}
