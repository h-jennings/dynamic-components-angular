import { Component, OnInit, Input } from "@angular/core";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-circle-icon",
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none" fill-rule="evenodd">
        <circle
          cx="9"
          cy="9"
          r="9"
          fill="#0C3"
          [ngStyle]="{ fill: data.fill }"
        />
        <path
          fill="#FFF"
          d="M6.33333333,9.78756265 L3.86968375,7.38818219 C3.67554543,7.19910835 3.36612123,7.19910835 3.17198292,7.38818219 L2.65114958,7.89542857 C2.44961681,8.09170397 2.44961681,8.41554241 2.65114958,8.61181781 L5.98448292,11.8581946 C6.17862123,12.0472685 6.48804543,12.0472685 6.68218375,11.8581946 L13.3488504,5.365441 C13.5503832,5.1691656 13.5503832,4.84532716 13.3488504,4.64905175 L12.8280171,4.14180538 C12.6338788,3.95273154 12.3244546,3.95273154 12.1303163,4.14180538 L6.33333333,9.78756265 Z"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  `,
  styleUrls: ["./circle-icon.component.css"]
})
export class CircleIconComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {}
}
