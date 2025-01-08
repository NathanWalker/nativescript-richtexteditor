import { Utils } from "@nativescript/core";
import { registerSwiftUI, SwiftUI, UIDataDriver } from "@nativescript/swift-ui";
import { RichEditorData, RichEditorType } from "./common";

if (Utils.SDK_VERSION >= 17) {
  registerSwiftUI(
    "richEditor",
    (view) => new UIDataDriver(RichEditorProvider.alloc().init(), view)
  );
}

export class RichEditor extends SwiftUI implements RichEditorType {
  data: RichEditorData;
  constructor() {
    super();
    this.swiftId = "richEditor";
  }
}
