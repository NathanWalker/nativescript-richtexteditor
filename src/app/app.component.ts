import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { PageRouterOutlet, registerElement } from "@nativescript/angular";
import { RichEditor } from "./native-views/rich-editor";

registerElement("RichEditor", () => RichEditor);

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {}
