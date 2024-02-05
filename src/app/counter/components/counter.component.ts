import { Component, NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  template:`
    <h1>Counter component</h1>
    <hr>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>


  `,
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  reset():void {
    this.counter = 10;
  }

}
