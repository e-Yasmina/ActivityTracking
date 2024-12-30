import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../constants";
import "./CodeEditor.css";

const CodeEditor = ({language, editorRef, id}) => {
  
  const [value, setValue] = useState(""); // Stores the current code in the editor

  // Called when the editor is mounted
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="Container">
      <Editor
        options={{
          minimap: { enabled: false },
        }}
        height="49vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[id]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default CodeEditor;
