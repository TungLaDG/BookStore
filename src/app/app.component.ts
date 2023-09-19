import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStore';
  logs = new Array<string>();
  counter2: number=0;
  counter1: number=0;
  counterChange(event: string){
    this.logs.push(event);
  }
}
