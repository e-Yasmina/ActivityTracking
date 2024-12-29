import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeTestCode = async (language, sourceCode) => {
  const testCases = `
# Function tests
def test_functions():
    try:
        assert add(2, 3) == 5, "Test failed for add(2, 3)"
        print("Test succeeded for addition")
    except AssertionError as e:
        print(e)

    try:
        assert subtract(5, 3) == 2, "Test failed for subtract(5, 3)"
        print("Test succeeded for subtraction")
    except AssertionError as e:
        print(e)

    try:
        assert multiply(4, 3) == 12, "Test failed for multiply(4, 3)"
        print("Test succeeded for multiplication")
    except AssertionError as e:
        print(e)

    try:
        assert divide(10, 2) == 5, "Test failed for divide(10, 2)"
        print("Test succeeded for division")
    except AssertionError as e:
        print(e)

    
test_functions()
`;

  const fullCode = sourceCode + testCases;  // Append the test cases to the user's code

  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: fullCode,
      },
    ],
  });

  return response.data;
};
