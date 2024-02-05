import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";



@NgModule({
  imports: [AppComponent,
            HeroComponent,
            ListComponent],
})

export class AppModule {}
