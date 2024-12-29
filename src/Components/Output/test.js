import API from "../../api";
import {LANGUAGE_VERSIONS} from"../../constants";
export const executeCode = async (language, sourceCode) => {
    const testCases = `
  # Function tests
  def test_functions():
      assert add(2, 3) == 5, "Test failed for add(2, 3)"
      assert subtract(5, 3) == 2, "Test failed for subtract(5, 3)"
      assert multiply(4, 3) == 12, "Test failed for multiply(4, 3)"
      assert divide(10, 2) == 5, "Test failed for divide(10, 2)"
      
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
  