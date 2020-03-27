import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[legend-item-host]"
})
export class LegendItemDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
