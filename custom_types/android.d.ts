declare module jp {
	export module wasabeef {
		export module richeditor {
			export class BuildConfig {
				public static class: java.lang.Class<jp.wasabeef.richeditor.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "jp.wasabeef.richeditor";
				public static BUILD_TYPE: string = "release";
				public constructor();
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module richeditor {
			export class RichEditor {
				public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor>;
				public constructor(context: globalAndroid.content.Context);
				public setEditorHeight(px: number): void;
				public clearFocusEditor(): void;
				public setEditorBackgroundColor(color: number): void;
				public setEditorWidth(px: number): void;
				public setEditorFontSize(px: number): void;
				public insertLink(href: string, title: string): void;
				public undo(): void;
				public setSuperscript(): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public setOnTextChangeListener(listener: jp.wasabeef.richeditor.RichEditor.OnTextChangeListener): void;
				public setOutdent(): void;
				public setIndent(): void;
				public setInputEnabled(inputEnabled: java.lang.Boolean): void;
				public insertYoutubeVideo(url: string, width: number, height: number): void;
				public insertVideo(url: string, width: number): void;
				public setFontSize(fontSize: number): void;
				public setNumbers(): void;
				public setBold(): void;
				public setBackground(background: globalAndroid.graphics.drawable.Drawable): void;
				public setHtml(contents: string): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setBullets(): void;
				public insertImage(url: string, alt: string, width: number, height: number): void;
				public setEditorFontColor(color: number): void;
				public insertVideo(url: string): void;
				public insertAudio(url: string): void;
				public insertYoutubeVideo(url: string): void;
				public insertImage(url: string, alt: string, width: number): void;
				public setItalic(): void;
				public setBackgroundResource(resid: number): void;
				public exec(trigger: string): void;
				public setSubscript(): void;
				public setHeading(heading: number): void;
				public setAlignRight(): void;
				public setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
				public setBackgroundColor(color: number): void;
				public insertImage(url: string, alt: string): void;
				public setStrikeThrough(): void;
				public setTextBackgroundColor(color: number): void;
				public insertYoutubeVideo(url: string, width: number): void;
				public setBackground(url: string): void;
				public setOnDecorationChangeListener(listener: jp.wasabeef.richeditor.RichEditor.OnDecorationStateListener): void;
				public getHtml(): string;
				public setAlignCenter(): void;
				public setPadding(left: number, top: number, right: number, bottom: number): void;
				public insertVideo(url: string, width: number, height: number): void;
				public insertTodo(): void;
				public focusEditor(): void;
				public setUnderline(): void;
				public setAlignLeft(): void;
				public redo(): void;
				public setOnInitialLoadListener(listener: jp.wasabeef.richeditor.RichEditor.AfterInitialLoadListener): void;
				public removeFormat(): void;
				public setPlaceholder(placeholder: string): void;
				public loadCSS(cssFile: string): void;
				public setTextColor(color: number): void;
				public setBlockquote(): void;
				public createWebviewClient(): jp.wasabeef.richeditor.RichEditor.EditorWebViewClient;
			}
			export module RichEditor {
				export class AfterInitialLoadListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.AfterInitialLoadListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$AfterInitialLoadListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAfterInitialLoad(param0: boolean): void;
					});
					public constructor();
					public onAfterInitialLoad(param0: boolean): void;
				}
				export class EditorWebViewClient {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.EditorWebViewClient>;
					public constructor(this$0: jp.wasabeef.richeditor.RichEditor);
					public shouldOverrideUrlLoading(view: globalAndroid.webkit.WebView, url: string): boolean;
					public onPageFinished(view: globalAndroid.webkit.WebView, url: string): void;
					public shouldOverrideUrlLoading(view: globalAndroid.webkit.WebView, request: globalAndroid.webkit.WebResourceRequest): boolean;
				}
				export class OnDecorationStateListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.OnDecorationStateListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$OnDecorationStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStateChangeListener(param0: string, param1: java.util.List<jp.wasabeef.richeditor.RichEditor.Type>): void;
					});
					public constructor();
					public onStateChangeListener(param0: string, param1: java.util.List<jp.wasabeef.richeditor.RichEditor.Type>): void;
				}
				export class OnTextChangeListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.OnTextChangeListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$OnTextChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTextChange(param0: string): void;
					});
					public constructor();
					public onTextChange(param0: string): void;
				}
				export class Type {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.Type>;
					public static BOLD: jp.wasabeef.richeditor.RichEditor.Type;
					public static ITALIC: jp.wasabeef.richeditor.RichEditor.Type;
					public static SUBSCRIPT: jp.wasabeef.richeditor.RichEditor.Type;
					public static SUPERSCRIPT: jp.wasabeef.richeditor.RichEditor.Type;
					public static STRIKETHROUGH: jp.wasabeef.richeditor.RichEditor.Type;
					public static UNDERLINE: jp.wasabeef.richeditor.RichEditor.Type;
					public static H1: jp.wasabeef.richeditor.RichEditor.Type;
					public static H2: jp.wasabeef.richeditor.RichEditor.Type;
					public static H3: jp.wasabeef.richeditor.RichEditor.Type;
					public static H4: jp.wasabeef.richeditor.RichEditor.Type;
					public static H5: jp.wasabeef.richeditor.RichEditor.Type;
					public static H6: jp.wasabeef.richeditor.RichEditor.Type;
					public static ORDEREDLIST: jp.wasabeef.richeditor.RichEditor.Type;
					public static UNORDEREDLIST: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYCENTER: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYFULL: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYLEFT: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYRIGHT: jp.wasabeef.richeditor.RichEditor.Type;
					public static values(): androidNative.Array<jp.wasabeef.richeditor.RichEditor.Type>;
					public static valueOf(name: string): jp.wasabeef.richeditor.RichEditor.Type;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module richeditor {
			export class Utils {
				public static class: java.lang.Class<jp.wasabeef.richeditor.Utils>;
				public static toBase64(bitmap: globalAndroid.graphics.Bitmap): string;
				public static getCurrentTime(): number;
				public static toBitmap(drawable: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
				public static decodeResource(context: globalAndroid.content.Context, resId: number): globalAndroid.graphics.Bitmap;
			}
		}
	}
}

//Generics information:

