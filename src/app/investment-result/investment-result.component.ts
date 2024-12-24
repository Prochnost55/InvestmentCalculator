import { Component } from '@angular/core';
import { InvestmentCalculatorService } from './investment-calculator.service';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResult } from './investment-result.model';


@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  constructor(
    private investementCalculatorService: InvestmentCalculatorService
  ) {}

  get investmentResults(): InvestmentResult[] | undefined {
    return this.investementCalculatorService.getCalculatedInvestmentResults();
  }
}
