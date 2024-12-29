import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../constants";
import "./CodeEditor.css";

const CodeEditor = ({language, editorRef}) => {
  
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
        defaultValue={CODE_SNIPPETS[language]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default CodeEditor;




// import { useRef, useState } from "react";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "../LanguageSelector/LanguageSelector";
// import { CODE_SNIPPETS } from "../../constants";
// import Output from "../Output/Output";
// import "./CodeEditor.css";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const [value, setValue] = useState(""); // Stores the current code in the editor
//   const [language, setLanguage] = useState("python"); // Tracks the selected language

//   // Called when the editor is mounted
//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   // Called when the user selects a new language
//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]); // Load a snippet for the selected language
//   };


//   return (
//     <div className="code-editor-container">
//       <div className="code-editor-section">
//         <LanguageSelector language={language} onSelect={onSelect} />
//         <div className="Container">
//           <Editor
//             options={{
//               minimap: { enabled: false },
//             }}
//             height="50vh"
//             theme="vs-dark"
//             language={language}
//             defaultValue={CODE_SNIPPETS[language]}
//             onMount={onMount}
//             value={value}
//             onChange={(value) => setValue(value)}
//           />
//         </div>
//       </div>
//       <div className="code-editor-section">
//         <Output editorRef={editorRef} language={language} />
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;
