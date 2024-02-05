import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/components/counter.component';
import { HeroeModule } from './heroes/heroes.module';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CounterComponent, HeroeModule],
})
export class AppComponent {
  public title: string = 'Hola Mundo';

}
