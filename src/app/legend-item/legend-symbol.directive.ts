import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[legend-symbol-host]"
})
export class LegendSymbolDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
