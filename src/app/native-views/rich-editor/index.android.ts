import { RichEditorCommon } from './common';

export class RichEditor extends RichEditorCommon {
  editor: jp.wasabeef.richeditor.RichEditor;
  createNativeView() {
    this.editor = new jp.wasabeef.richeditor.RichEditor(this._context);
    return this.editor;
  }

  initNativeView() {
    this.editor.setOnTextChangeListener(new jp.wasabeef.richeditor.RichEditor.OnTextChangeListener({
      onTextChange(text) {
          console.log('text change:', text);
      },
    }))
  }

  insertVideoSample() {
    this.editor.insertVideo("https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4", 360);
  }

  insertLinkSample() {
    this.editor.insertLink("https://nativescript.org", "NativeScript");
  }
}
