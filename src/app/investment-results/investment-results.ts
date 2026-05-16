import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { InvestmentService } from '../investment-form/investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  private investmentService: InvestmentService = inject(InvestmentService);

  results = this.investmentService.result;
}
