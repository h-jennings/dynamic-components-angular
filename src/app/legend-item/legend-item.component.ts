import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { LegendSymbolDirective } from "./legend-symbol.directive";
import { LegendSymbolComponent } from "./legend-symbol.component";

@Component({
  selector: "app-legend-item",
  template: `
    <li>
      <div legend-symbol-host></div>
      <div class="legend-text">{{ data.text }}</div>
    </li>
  `,
  styleUrls: ["./legend-item.component.css"]
})
// Here we dynamically create the legend symbol component
export class LegendItemComponent implements OnInit {
  @Input() data: any;

  @ViewChild(LegendSymbolDirective, { static: true })
  legendSymbolHost: LegendSymbolDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadSymbolComponent();
  }

  loadSymbolComponent(): void {
    const { symbol } = this.data;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      symbol.component
    );

    const viewContainerRef = this.legendSymbolHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as LegendSymbolComponent).data = symbol.data;
  }
}
