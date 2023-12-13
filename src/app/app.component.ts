import { Component, OnInit } from '@angular/core';
import { AdvicesService } from './services/advices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  id: string = '';
  advice: string = '';
  isAnimated: boolean = false;

  constructor(private advicesService: AdvicesService) {
    this.fetchAdvice();
  }

  ngOnInit(): void {}

  fetchAdvice() {
    this.isAnimated = false;
    this.advicesService.getAdvice().subscribe({
      next: (data) => {
        this.id = data.slip.id;
        this.advice = data.slip.advice;
        this.isAnimated = true;
      },
    });
  }
}
