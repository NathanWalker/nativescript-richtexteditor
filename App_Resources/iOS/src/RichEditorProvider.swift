//
//  DemoEditorScreen.swift
//  Demo
//
//  Created by Daniel Saidi on 2024-03-04.
//  Copyright © 2024 Kankoda Sweden AB. All rights reserved.
//

import RichTextKit
import SwiftUI

struct RichEditor: View {
    @ObservedObject var data: RichEditorData

    @StateObject var context = RichTextContext()

    var body: some View {
        VStack(spacing: 0) {
            #if os(macOS)
            RichTextFormat.Toolbar(context: context)
            #endif
            RichTextEditor(
                    text: Binding(
                        get: { data.nonOptionalText },
                        set: { newValue in
                            // Only fires when actual text characters change
                            // Not when styles are applied necessarily
                            data.text = newValue
                            data.onEvent!(["textChange": newValue])
                        }
                    ),
                    context: context
            ) {
                $0.textContentInset = CGSize(width: data.insetWidth, height: data.insetHeight)
            }
            // This could be used to pick up style changes
            // Just want to decide how to identify the styles
            // These come through as enums at the moment
            // .onReceive(context.objectWillChange) {
            //     data.onEvent!(["contextChange": context.styles])
            // }
            // Use this to just view the text:
            // RichTextViewer(document.text)
            #if os(iOS)
            if data.showToolbar {
                RichTextKeyboardToolbar(
                    context: context,
                    leadingButtons: { $0 },
                    trailingButtons: { $0 },
                    formatSheet: { $0 }
                )
            }
            #endif
        }
        .inspector(isPresented: $data.isInspectorPresented) {
            RichTextFormat.Sidebar(context: context)
                #if os(macOS)
                .inspectorColumnWidth(min: 200, ideal: 200, max: 315)
                #endif
        }
        .toolbar {
            ToolbarItem(placement: .automatic) {
                Toggle(isOn: $data.isInspectorPresented) {
                    Image.richTextFormatBrush
                        .resizable()
                        .aspectRatio(1, contentMode: .fit)
                }
            }
        }
        .frame(minWidth: 500)
        .focusedValue(\.richTextContext, context)
        .toolbarRole(.automatic)
        .richTextFormatSheetConfig(.init(colorPickers: colorPickers))
        .richTextFormatSidebarConfig(
            .init(
                colorPickers: colorPickers,
                fontPicker: isMac
            )
        )
        .richTextFormatToolbarConfig(.init(colorPickers: []))
        // .viewDebug()
    }
}

private extension RichEditor {

    var isMac: Bool {
        #if os(macOS)
        true
        #else
        false
        #endif
    }

    var colorPickers: [RichTextColor] {
        [.foreground, .background]
    }

    var formatToolbarEdge: VerticalEdge {
        isMac ? .top : .bottom
    }
}

class RichEditorData: ObservableObject {
    @Published var text: NSAttributedString?
    @Published var isInspectorPresented = false
    @Published var insetWidth: CGFloat = 60
    @Published var insetHeight: CGFloat = 30
    @Published var showToolbar: Bool = false

    // Provide a non-optional binding to work with SwiftUI
    var nonOptionalText: NSAttributedString {
        text ?? NSAttributedString(string: "")
    }
    
    @Published var modifiers = NSArray()
    var onEvent: ((NSDictionary) -> Void)?
}

@available(iOS 17.0, *)
@objc
class RichEditorProvider: UIViewController, SwiftUIProvider {
    private var props = RichEditorData()
    private var swiftUI: RichEditor?
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    required public init() {
        super.init(nibName: nil, bundle: nil)
    }
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        props.onEvent = { data in
            self.onEvent!(data)
        }
    }
    
    /// Receive data from NativeScript
    func updateData(data: NSDictionary) {
        let enumerator = data.keyEnumerator()
        while let k = enumerator.nextObject() {
            let key = k as! String
            let v = data.object(forKey: key)
            if (v != nil) {
                if (key == "text") {
                    props.text = NSAttributedString(string: v as! String, attributes: [:])
                } else if (key == "isInspectorPresented") {
                    props.isInspectorPresented = v as! Bool
                } else if (key == "insetWidth") {
                    props.insetWidth = v as! CGFloat
                } else if (key == "insetHeight") {
                    props.insetHeight = v as! CGFloat
                } else if (key == "showToolbar") {
                    props.showToolbar = v as! Bool
                }
            }
        }
        
        if (self.swiftUI == nil) {
            swiftUI = RichEditor(data: props)
            setupSwiftUIView(content: swiftUI)
        } else {
            // engage data binding right away
            self.swiftUI?.data = props
        }
    }
    
    /// Send data to NativeScript
    var onEvent: ((NSDictionary) -> ())?
}
