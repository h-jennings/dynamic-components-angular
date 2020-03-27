import { Injectable } from "@angular/core";

import { CircleIconComponent } from "../circle-icon/circle-icon.component";
import { LegendItemComponent } from "../legend-item/legend-item.component";
import { LegendItem } from "../legend-item/legend-item";
import { LegendSymbol } from "../legend-item/legend-symbol";
import { PlaneIconComponent } from "../plane-icon/plane-icon.component";

@Injectable()
export class LegendService {
  getLegendItems() {
    return [
      new LegendItem(LegendItemComponent, {
        text: "Some Text",
        symbol: new LegendSymbol(CircleIconComponent, {
          fill: "red"
        })
      }),
      new LegendItem(LegendItemComponent, {
        text: "Different Text",
        symbol: new LegendSymbol(PlaneIconComponent, {
          fill: "orange"
        })
      }),
      new LegendItem(LegendItemComponent, {
        text: "Legend Text",
        symbol: new LegendSymbol(CircleIconComponent, {
          fill: "red"
        })
      }),
      new LegendItem(LegendItemComponent, {
        text: "Legend TEXT",
        symbol: new LegendSymbol(PlaneIconComponent, {
          fill: "green"
        })
      }),
      new LegendItem(LegendItemComponent, {
        text: "Yeet",
        symbol: new LegendSymbol(CircleIconComponent, {
          fill: "yellow"
        })
      })
    ];
  }
}
