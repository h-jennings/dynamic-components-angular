import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plane-icon",
  template: `
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          d="M13.995 6.003c.1.121.06.305-.083.372l-2.088.99v6.87l-.062.16-1.356 1.524a.242.242 0 01-.408-.08l-1.641-4.626-1.198 1.113-.003 3.177a.242.242 0 01-.242.241H5.516l-.19-.094-1.585-2.054-1.423.357a.242.242 0 01-.292-.298l.38-1.393-2.05-1.584-.094-.191V9.088c0-.133.108-.242.242-.242l3.18-.003 1.131-1.17L.162 6.035a.242.242 0 01-.081-.409l1.522-1.36.161-.062h6.902l1.125-2.09a.242.242 0 01.377-.063l.618.569 1.993-1.536c.227-.175.473-.33.736-.464a5.944 5.944 0 011.529-.523A4.98 4.98 0 0115.747 0 .242.242 0 0116 .245a4.876 4.876 0 01-.075.706 5.735 5.735 0 01-.48 1.536c-.134.276-.29.534-.473.772l-1.573 2.022.596.722z"
          fill="#FD4B4B"
          [ngStyle]="{
            fill: data.fill
          }"
        />
      </g>
    </svg>
  `,
  styleUrls: ["./plane-icon.component.css"]
})
export class PlaneIconComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {}
}
