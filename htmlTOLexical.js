(async () => {
    const { $generateHtmlFromNodes } = await import('@lexical/html');
    const { createEditor } = require('lexical'); // CommonJS import for Lexical

    const editor = createEditor();
    const lexicalState = {
        root: {
            children: [
                {
                    children: [
                        { detail: 0, format: 0, mode: "normal", style: "", text: "This is Test, but you can ", type: "extended-text", version: 1 },
                        {
                            children: [{ detail: 0, format: 0, mode: "normal", style: "", text: "subscribe", type: "extended-text", version: 1 }],
                            direction: "ltr",
                            format: "",
                            indent: 0,
                            type: "link",
                            version: 1,
                            url: "#/portal/"
                        },
                        { detail: 0, format: 0, mode: "normal", style: "", text: " Bye!!!??", type: "extended-text", version: 1 }
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    type: "paragraph",
                    version: 1
                }
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    };

    // Load the Lexical state into the editor
    editor.update(() => {
        editor.parseEditorState(lexicalState);
    });

    // Generate HTML
    editor.getEditorState().read(() => {
        const htmlString = $generateHtmlFromNodes(editor, null);
        console.log('Generated HTML:', htmlString);
    });
})();
