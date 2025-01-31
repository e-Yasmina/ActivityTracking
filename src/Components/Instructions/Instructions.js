import React, { useState } from "react";
import "./Instructions.css";

const InstructionsModal = ({ id }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState("en"); // Default language is English

  // Different instruction sets based on the id
  const instructionsList = {
    1: {
      en: [
        { step: "Step 1", explanation: "In this activity, we will practice operations in Python. \nThere are four functions here: add, subtract, multiply, and divide." },
        { step: "Step 2", explanation: "Each function must have a return statement, like the following example for addition:\n\n# This function adds two numbers\ndef add(x, y):\n    return x + y\n\nSimply, the return statement here is 'return x + y' to calculate the sum of x and y." },
        { step: "Step 3", explanation: "You can run your code if you have added the correct return statement for each function.\nFeel free to add some lines to test if each function is working appropriately." },
        { step: "Step 4", explanation: "Finally, you can run the test cases." },
        { step: "Step 5", explanation: "Upon passing all test cases, the calculator will be enabled and available for use.\nIf not, you can try again." },
        { step: "Step 6", explanation: "Now you can move to the next activity." }
      ],
      fr: [
        { step: "Étape 1", explanation: "Dans cette activité, nous allons pratiquer les opérations en Python. \nIl y a quatre fonctions ici : addition, soustraction, multiplication et division." },
        { step: "Étape 2", explanation: "Chaque fonction doit avoir une instruction de retour, comme l'exemple suivant pour l'addition :\n\n# Cette fonction ajoute deux nombres\ndef add(x, y):\n    return x + y\n\nL'instruction de retour ici est simplement 'return x + y' pour calculer la somme de x et y." },
        { step: "Étape 3", explanation: "Vous pouvez exécuter votre code si vous avez ajouté l'instruction de retour correcte pour chaque fonction.\nN'hésitez pas à ajouter des lignes pour tester si chaque fonction fonctionne correctement." },
        { step: "Étape 4", explanation: "Enfin, vous pouvez exécuter les cas de test." },
        { step: "Étape 5", explanation: "Une fois tous les cas de test réussis, la calculatrice sera activée et disponible à l'utilisation.\nSinon, vous pouvez réessayer." },
        { step: "Étape 6", explanation: "Vous pouvez maintenant passer à l'activité suivante." }
      ]
    },
    2: {
      en: [
        { step: "Step 1", explanation: "You will practice handling lists in this activity.\nThe goal is to write code to identify the 'stranger' element from the list.\nThe provided program is responsible for generating the list, while you have to write the logic to detect the odd one out." },
        { step: "Step 2", explanation: "This function generates a random list containing one 'stranger' element based on three possible rules:\n1. Same Type: Most elements share the same type (e.g., integers), while the stranger has a different type (e.g., string).\n2. Same Value: Most elements have the same value, while the stranger has a different value.\n3. Same Length: Most elements are lists of the same length, while the stranger is a shorter list." },
        { step: "Step 3", explanation: "To find the stranger, you need to process the lists and identify the odd one.\nFor example, if the list contains integers except one string:\n\n# Example list:\n[42, 42, 42, 'banana', 42]\n\nfor item in generated_list:\n    if not isinstance(item, int):\n        print(item)  # Output: 'banana'" },
        { step: "Step 4", explanation: "Recognize the type of the generated list and write logic accordingly.\nYou can run your program to test your implementation." },
        { step: "Step 5", explanation: "You can run the program after adding the code to find the stranger for all the list types.\nFeel free to add test cases." },
        { step: "Step 6", explanation: "Finally, you can run the test cases." },
        { step: "Step 7", explanation: "Now you can move to the next activity." }
      ],
      fr: [
        { step: "Étape 1", explanation: "Vous allez pratiquer la gestion des listes dans cette activité.\nL'objectif est d'écrire du code pour identifier l'élément 'étranger' dans la liste.\nLe programme fourni est responsable de générer la liste, et vous devez écrire la logique pour détecter l'intrus." },
        { step: "Étape 2", explanation: "Cette fonction génère une liste aléatoire contenant un élément 'étranger' basé sur trois règles possibles :\n1. Même Type : La plupart des éléments partagent le même type (par exemple, des entiers), tandis que l'étranger a un type différent (par exemple, une chaîne).\n2. Même Valeur : La plupart des éléments ont la même valeur, tandis que l'étranger a une valeur différente.\n3. Même Longueur : La plupart des éléments sont des listes de même longueur, tandis que l'étranger est une liste plus courte." },
        { step: "Étape 3", explanation: "Pour trouver l'étranger, vous devez traiter les listes et identifier l'intrus.\nPar exemple, si la liste contient des entiers sauf une chaîne :\n\n# Liste exemple :\n[42, 42, 42, 'banane', 42]\n\nfor item in generated_list:\n    if not isinstance(item, int):\n        print(item)  # Résultat : 'banane'" },
        { step: "Étape 4", explanation: "Reconnaissez le type de la liste générée et écrivez la logique en conséquence.\nVous pouvez exécuter votre programme pour tester votre implémentation." },
        { step: "Étape 5", explanation: "Vous pouvez exécuter le programme après avoir ajouté le code pour trouver l'étranger pour tous les types de listes.\nN'hésitez pas à ajouter des cas de test." },
        { step: "Étape 6", explanation: "Enfin, vous pouvez exécuter les cas de test." },
        { step: "Étape 7", explanation: "Vous pouvez maintenant passer à l'activité suivante." }
      ]
    }
    // Add activity 3 instructions similarly...
  };

  // Default to instructions for id 1 if no valid id is passed
  const instructions = instructionsList[id]?.[language] || instructionsList[1][language];

  const handleNext = () => {
    if (currentIndex < instructions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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
            {/* Language Switch Buttons */}
            <div className="language-switch">
              <button className={`lang-btn ${language === "en" ? "active" : ""}`} onClick={() => setLanguage("en")}>EN</button>
              <button className={`lang-btn ${language === "fr" ? "active" : ""}`} onClick={() => setLanguage("fr")}>FR</button>
            </div>

            {/* Close Button */}
            <button className="close-button" onClick={handleClose}>&times;</button>

            {/* Display step title */}
            <h2 className="step-title">{instructions[currentIndex].step}</h2>

            {/* Display explanation */}
            {(instructions[currentIndex].explanation.includes("isinstance") || instructions[currentIndex].explanation.includes("def ")) ? (
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

            {/* Navigation Buttons */}
            <div>
              {currentIndex > 0 && <button className="inst-btn" onClick={handlePrevious}>Previous</button>}
              {currentIndex < instructions.length - 1 && <button className="inst-btn" onClick={handleNext}>Next</button>}
              {currentIndex === instructions.length - 1 && <button className="inst-btn" onClick={handleClose}>Close</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructionsModal;
