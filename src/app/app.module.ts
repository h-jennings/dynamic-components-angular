import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroJobAdComponent } from "./hero-job-ad.component";
import { AdBannerComponent } from "./ad-banner.component";
import { HeroProfileComponent } from "./hero-profile.component";
import { AdDirective } from "./ad.directive";
import { AdService } from "./ad.service";
import { TableLegendComponent } from "./table-legend/table-legend.component";
import { LegendItemComponent } from "./legend-item/legend-item.component";
import { LegendSymbolDirective } from "./legend-item/legend-symbol.directive";
import { LegendItemDirective } from "./legend-item/legend-item.directive";
import { CircleIconComponent } from "./circle-icon/circle-icon.component";
import { LegendService } from "./table-legend/legend.service";
import { PlaneIconComponent } from "./plane-icon/plane-icon.component";

@NgModule({
  imports: [BrowserModule],
  providers: [AdService, LegendService],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    TableLegendComponent,
    LegendItemComponent,
    LegendSymbolDirective,
    LegendItemDirective,
    CircleIconComponent,
    PlaneIconComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent,
    LegendItemComponent,
    TableLegendComponent,
    CircleIconComponent,
    PlaneIconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
