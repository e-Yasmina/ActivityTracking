import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
import Output from "../Output/Output";
import "./CodeEditor.css"

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor-section">
        <LanguageSelector language={language} onSelect={onSelect} />
        <div className="Container">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="50vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        </div>
      </div>
      <div className="code-editor-section">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;

// import React from "react";
// import { Box } from '@chakra-ui/react';
// import Editor from '@monaco-editor/react';
// import "./CodeEditor.css";

// const CodeEditor=() =>{
//     return (
//         <div className="Container">
//           <Editor 
//             theme="vs-dark"
//             defaultLanguage="javascript" 
//             defaultValue="// some comment"

//           />
//         </div>
//       );
        
// }

// export default CodeEditor;