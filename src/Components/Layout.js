import { useRef, useState } from "react";
import { executeCode } from "../api";
import { executeTestCode } from "../testApi";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output/Output";
import CodeEditor from "./CodeEditor/CodeEditor";
import PlayIcon from "./Buttons/PlayIcon";
import TestOutput from "./TestOutput/TestOutput";
import Calculator from "./Calculator/Calculator";
import "./Layout.css";

const CodeEditorLayout = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(""); // Stores the current code in the editor
  const [language, setLanguage] = useState("python"); // Tracks the selected language
  const [output, setOutput] = useState(null);
  const [testoutput, settestOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  // Called when the user selects a new language
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]); // Load a snippet for the selected language
  };
  
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error("An error occurred:", error.message || "Unable to run code");
      alert(error.message || "An error occurred while running the code.");
    } finally {
      setIsLoading(false);
    }
  };
  const testCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
  
    try {
      const { run: result } = await executeTestCode(language, sourceCode);
      settestOutput(result.output.split("\n"));
      setIsError(!!result.stderr); // Simplified the condition
    } catch (error) {
      console.error("An error occurred:", error.message || "Unable to run code");
      alert(error.message || "An error occurred while running the code.");
    }
  };
  

  return (
    <div className="code-editor-container">
      <div className="code-editor-ui">
      <div className="code-editor-section">
        <div className="btns">
          <LanguageSelector language={language} onSelect={onSelect} />
          <button className="test-button" onClick={testCode}>Run testCases</button>
          <div className="run-button" onClick={runCode}>
            <PlayIcon/>
          </div>
        </div>
        <CodeEditor language={language} editorRef={editorRef}/>
      </div>
      <Calculator/>
      </div> 
      <div className="output-section">
        <Output editorRef={editorRef} language={language} output={output}/>
        <TestOutput editorRef={editorRef} language={language} output={testoutput}/>
      </div>
    </div>
  );
};

export default CodeEditorLayout;
