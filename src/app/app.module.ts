import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";
import { MainPageComponent } from "./dbz/pages/main-page.component";
import { DbzModule } from "./dbz/dbz.module";
import { ListComponentDbz } from "./dbz/components/list/list.component";
import { AddCharacterComponent } from "./dbz/components/add-character/add-character.component";



@NgModule({
  imports: [AppComponent,
            HeroComponent,
            ListComponent,
            ListComponentDbz,
            AddCharacterComponent]
})

export class AppModule {}
