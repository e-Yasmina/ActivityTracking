import { useRef, useState } from "react";
import { executeCode } from "../api";
import { executeTestCode} from "../testApi";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output/Output";
import CodeEditor from "./CodeEditor/CodeEditor";
import PlayIcon from "./Buttons/PlayIcon";
import TestOutput from "./TestOutput/TestOutput";
import Calculator from "./Calculator/Calculator";
import ActivityExplanation from "./ActivitiesUIs/Activity2";
import InstructionsModal from "./Instructions/Instructions";
import PasswordGuesser from "./ActivitiesUIs/Activity3";
import "./Layout.css";


const CodeEditorLayout = ({id, setView, userKey}) => {
  const editorRef = useRef();
  const [value, setValue] = useState(""); // Stores the current code in the editor
  const [language, setLanguage] = useState("python"); // Tracks the selected language
  const [output, setOutput] = useState(null);
  const [testoutput, settestOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCalculatorEnabled, setIsCalculatorEnabled] = useState(false);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState([]);
  const [time, setTime] = useState([]);
 

  // fetch(`https://api-group-2ivdajogp-yasminas-projects-8e49fc39.vercel.app/user/${userKey}`)
  // .then(response => response.json())
  // .then(data => {
  //   console.log("User Data:", data);
  //   setUser(data); 
  //   setScore(data.score); 
  //   setTime(data.time);
  // }).catch(error => console.error("Error:", error));

 

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
      
      if (executeTestCode) {
        const { run: result } = await executeTestCode(language, sourceCode, id);
        settestOutput(result.output.split("\n").filter(
          (line) =>
            line.includes("Test succeeded") || line.includes("Test failed") || line.includes("AssertionError") || line.includes("Error")
        )
        .join("\n"));
        evaluateTestOutput(result.output.split("\n"));
        setIsError(!!result.stderr); // Simplified the condition
      } else {
        throw new Error("Invalid ID or corresponding function not found.");
      }
    } catch (error) {
      console.error("An error occurred:", error.message || "Unable to run code");
      alert(error.message || "An error occurred while running the code.");
    }
  };
  // Display the instruction model
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const evaluateTestOutput = (testoutput) => {
    // Define the success conditions
    const successMessages = [
      "Test succeeded for addition",
      "Test succeeded for subtraction",
      "Test succeeded for multiplication",
      "Test succeeded for division",
    ];

    // Check if all success messages are present in the output
    const allTestsPassed = successMessages.every((msg) =>
      testoutput.includes(msg)
    );

    // Update the state if all tests pass
    if (allTestsPassed) {
      setIsCalculatorEnabled(true);
    } else {
      setIsCalculatorEnabled(false);
    }
  };
  

  return (
    <>
    {isVisible && <InstructionsModal id={id}/>}
    
    <div className="activity-page-container">
      <div className="code-editor-container">
        <div className="btns">
          <button onClick={() => setView("activities")} className="btn"> &lt; Back to Activities</button>
          <LanguageSelector language={language} onSelect={onSelect} />
          <button className="instructions-btn" onClick={toggleVisibility}>Show Instructions</button>
          <button className="test-button" onClick={testCode}>Run testCases</button>
          <div className="run-button" onClick={runCode}>
            <PlayIcon/>
          </div>
        </div>
        <div className="code-editor-section" >
          <CodeEditor language={language} editorRef={editorRef} id={id}/>
          <Output editorRef={editorRef} language={language} output={output}/>
        </div>
      </div>
        
      <div className="ui-tests-section">
        { id === 1 && <Calculator isEnabled={isCalculatorEnabled} /> }
        { id === 2 && <ActivityExplanation /> }
        {/* { id === 3 && <PasswordGuesser password={output} uppercase={uppercase} lowercase={lowercase} numbers={numbers} special_chars={special_chars}/>} */}
        { id === 3 && <PasswordGuesser inputs={output}/>}
        { (id === 1 || id === 2) && <TestOutput editorRef={editorRef} language={language} output={testoutput} />}
      </div>
    </div>
    </>
  );
};

export default CodeEditorLayout;
