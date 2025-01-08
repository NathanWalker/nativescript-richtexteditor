## Rich Text Editor Example for NativeScript

Demonstrating usage of Andriod and iOS platform open source SDK/Libraries with NativeScript for a Rich Text Editor.

https://github.com/user-attachments/assets/e6e9e0ff-4283-48c7-a26d-692f63050cde

Utilizes excellent libraries written by fantastic authors [Daichi Furiya](https://github.com/wasabeef) and [Daniel Saidi](https://github.com/danielsaidi)
- Android: https://github.com/wasabeef/richeditor-android
  - Consumed via gradle here: https://github.com/NathanWalker/nativescript-richtexteditor/blob/3cae01672a2dfc0afda4cad872854176f1901222/App_Resources/Android/app.gradle#L6
- iOS: https://github.com/danielsaidi/RichTextKit
  - Consumed via Swift Package Manager here: https://github.com/NathanWalker/nativescript-richtexteditor/blob/3cae01672a2dfc0afda4cad872854176f1901222/nativescript.config.ts#L16

Created as a single declarative view: `<RichEditor/>` for consumption in any NativeScript project.

The API shown is for demonstration purposes and intended to be expanded upon or further customized.
