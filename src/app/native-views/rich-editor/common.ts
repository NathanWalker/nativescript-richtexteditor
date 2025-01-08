import { View } from "@nativescript/core";

export type RichEditorData = {
  text?: string;
  /** iOS only */
  isInspectorPresented?: boolean;
  /** iOS only */
  insetWidth?: number;
  /** iOS only */
  insetHeight?: number;
  /** iOS only */
  showToolbar?: boolean;
};
export interface RichEditorType {
  data: RichEditorData;
}
export class RichEditorCommon extends View {
  data: RichEditorData;
}
