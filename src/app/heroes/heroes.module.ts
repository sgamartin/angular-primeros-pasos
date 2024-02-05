import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { NgIf } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [HeroComponent,
            ListComponent]
            ,
  exports: [HeroComponent,
            ListComponent],

})


export class HeroeModule {}
