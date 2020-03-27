import { Component, OnInit } from "@angular/core";

import { AdService } from "./ad.service";
import { AdItem } from "./ad-item";
import { LegendItem } from "./legend-item/legend-item";

import { LegendService } from "./table-legend/legend.service";

@Component({
  selector: "app-root",
  template: `
    <div>
      <app-table-legend [legendItems]="legendItems"></app-table-legend>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[];
  legendItems: LegendItem[];

  constructor(
    private adService: AdService,
    private legendService: LegendService
  ) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.legendItems = this.legendService.getLegendItems();
  }
}
