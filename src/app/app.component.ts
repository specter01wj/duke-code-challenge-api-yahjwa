import { Component, VERSION } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num: any;
  title: any;

  constructor(private apiService: ApiService) {}

  clickFetch() {
    this.apiService.getData(this.num).subscribe({
      next: (data) => {
        console.log(data);
        if (this.num > 0 && this.num <= 100) {
          this.title = data.title;
        } else {
          this.title = 'Sorry, the to-do was not found';
        }
        if (data === '') {
          this.title = 'Sorry, the to-do was not found';
        }
      },
      error: (error) => {
        console.log('error!');
        this.title = 'Sorry, the to-do was not found, 404';
      },
    });
  }
}
