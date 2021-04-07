import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public fruit: string = '';
  public fruits: string[] = [];
  public addFruit() {
    this.fruits.push(this.fruit);
    this.fruit = '';
    console.log(this.fruits);
  }
}
