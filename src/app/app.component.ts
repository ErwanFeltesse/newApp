import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public fruit: string = '';
  public fruits: string[] = ['fraise', 'ananas', 'pomme'];
  /*  public addFruit() {
    this.fruits.push(this.fruit);
    this.fruit = '';
    console.log(this.fruits);
  } */
  public addFruit(reference: HTMLInputElement) {
    this.fruits.push(reference.value);
  }
  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter((f) => f !== fruit);
  }
}
