import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CounterComponent } from './app/counter/components/counter.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
