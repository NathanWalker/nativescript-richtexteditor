declare class RichEditorProvider extends UIViewController implements SwiftUIProvider {

	static alloc(): RichEditorProvider; // inherited from NSObject

	static new(): RichEditorProvider; // inherited from NSObject

	onEvent: (p1: NSDictionary<any, any>) => void; // inherited from SwiftUIProvider

	updateDataWithData(data: NSDictionary<any, any>): void;
}