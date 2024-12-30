import React, { useState } from "react";
import "./Instructions.css"; // Import the CSS file

const InstructionsModal = ({ id }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Different instruction sets based on the id
  const instructionsList = {
    1: [
      {
        step: "Step 1",
        explanation:
          "In this activity, we will practice operations in Python. \nThere are four functions here: add, subtract, multiply, and divide."
      },
      {
        step: "Step 2",
        explanation: `Each function must have a return statement, like the following example for addition:
        
# This function adds two numbers
def add(x, y):
    return x + y

Simply, the return statement here is "return x + y" to calculate the sum of x and y.`
      },
      {
        step: "Step 3",
        explanation:
          "You can run your code if you have added the correct return statement for each function.\nFeel free to add some lines to test if each function is working appropriately."
      },
      {
        step: "Step 4",
        explanation: "Finally, you can run the test cases."
      },
      {
        step: "Step 5",
        explanation:
          "Upon passing all test cases, the calculator will be enabled and available for use.\nIf not, you can try again."
      },
      {
        step: "Step 6",
        explanation: "Now you can move to the next activity."
      }
    ],
    2: [
      { step: "Step 1", explanation: "Go to the homepage." },
      { step: "Step 2", explanation: "Choose your category." },
      { step: "Step 3", explanation: "Add items to your cart." },
      { step: "Step 4", explanation: "Proceed to checkout and complete payment." }
    ],
    3: [
      { step: "Step 1", explanation: "Create an account or log in." },
      { step: "Step 2", explanation: "Fill out your personal details." },
      { step: "Step 3", explanation: "Confirm your email address." },
      { step: "Step 4", explanation: "Start using the app." }
    ]
  };

  // Default to instructions for id 1 if no valid id is passed
  const instructions = instructionsList[id] || instructionsList[1];

  const handleNext = () => {
    if (currentIndex < instructions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setCurrentIndex(0); // Reset to the first step
  };

  return (
    <div>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Display step title */}
            <h2 className="step-title">{instructions[currentIndex].step}</h2>
            {/* Display explanation with code highlighting if applicable */}
            {instructions[currentIndex].explanation.includes("def ") ? (
              <pre className="code-block">
                <code>{instructions[currentIndex].explanation}</code>
              </pre>
            ) : (
              <p className="step-explanation">{instructions[currentIndex].explanation.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}</p>
            )}
            
            <div>
              {currentIndex < instructions.length - 1 ? (
                <>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleClose}>Close</button>
                </>
              ) : (
                <button onClick={handleClose}>Close</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructionsModal;
