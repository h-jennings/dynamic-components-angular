import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { LegendItem } from "../legend-item/legend-item";
import { LegendItemDirective } from "../legend-item/legend-item.directive";
import { LegendItemComponent } from "../legend-item/legend-item.component";

@Component({
  selector: "app-table-legend",
  template: `
    <div class="c-table-legend__container">
      <ul legend-item-host></ul>
    </div>
  `,
  styleUrls: ["./table-legend.component.css"]
})

// Here we dynamically create the legend-item component
export class TableLegendComponent implements OnInit {
  @Input() legendItems: LegendItem[];
  @ViewChild(LegendItemDirective, { static: true })
  legendItemHost: LegendItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadLegendItems();
  }

  loadLegendItems(): void {
    // Looping over legend items
    this.legendItems.forEach(legendItem => {
      const { component, data } = legendItem;

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );

      const viewContainerRef = this.legendItemHost.viewContainerRef;

      const componentRef = viewContainerRef.createComponent(componentFactory);

      (componentRef.instance as LegendItemComponent).data = data;
    });
  }
}
