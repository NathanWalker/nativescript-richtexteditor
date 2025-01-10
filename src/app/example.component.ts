import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { RichEditor, RichEditorData } from "./native-views/rich-editor";
import { IconDirective } from "./icon.directive";

@Component({
  selector: "ns-example",
  templateUrl: "./example.component.html",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule, IconDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ExampleComponent {
  isApple = __APPLE__;
  editor: RichEditor;
  data: RichEditorData = {
    text: "",
    isInspectorPresented: false,
    insetWidth: 65,
    insetHeight: 20,
    showToolbar: false,
  };

  openTools() {
    if (__APPLE__) {
      this.data = {
        ...this.data,
        isInspectorPresented: !this.data.isInspectorPresented,
      };
    } else {
      this.editor.insertLinkSample();
    }
  }

  toggleToolbar() {
    if (__APPLE__) {
      this.data = {
        ...this.data,
        showToolbar: !this.data.showToolbar,
      };
    } else {
      this.editor.insertVideoSample();
    }
  }

  // just contrived, but can show you tons of options/capabilities
  currentHeading = 6;
  androidTool(
    type:
      | "italic"
      | "bold"
      | "underline"
      | "strikethrough"
      | "text_decrease"
      | "text_increase"
  ) {
    const editor = this.editor.android as jp.wasabeef.richeditor.RichEditor;
    switch (type) {
      case "italic":
        editor.setItalic();
        break;
      case "bold":
        editor.setBold();
        break;
      case "underline":
        editor.setUnderline();
        break;
      case "strikethrough":
        editor.setStrikeThrough();
        break;
      case "text_decrease":
        this.currentHeading++;
        if (this.currentHeading > 6) {
          this.currentHeading = this.currentHeading;
        }
        editor.setHeading(this.currentHeading);
        break;
      case "text_increase":
        this.currentHeading--;
        if (this.currentHeading < 1) {
          this.currentHeading = 1;
        }
        editor.setHeading(this.currentHeading);
        break;
    }
  }

  textChange(args) {
    console.log('textChange:', args.data);
  }

  loadedEditor(args) {
    this.editor = args.object;
  }
}
