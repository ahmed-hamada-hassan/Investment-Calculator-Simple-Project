import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { InvestmentForm } from './investment-form/investment-form';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [Header, InvestmentForm, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
