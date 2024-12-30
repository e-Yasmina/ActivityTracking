import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});
const testCases={
  1: `
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
  `,
  2:`
def test_find_stranger():
    try:
        # Test case for same_type
        lst = [42, 42, 42, "banana", 42]
        assert find_stranger(lst) == "banana", "Test failed for same_type"
        print("Test succeeded for same_type")
    except AssertionError as e:
        print(e)

    try:
        # Test case for same_value
        lst = [7, 7, 7, 4, 7]
        assert find_stranger(lst) == 4, "Test failed for same_value"
        print("Test succeeded for same_value")
    except AssertionError as e:
        print(e)

    try:
        # Test case for same_length
        lst = [[0, 0], [0, 0], [0, 0], [0]]
        assert find_stranger(lst) == [0], "Test failed for same_length"
        print("Test succeeded for same_length")
    except AssertionError as e:
        print(e)


# Run the tests
test_find_stranger()`
}
export const executeTestCode = async (language, sourceCode,id) => {
  const testCase =testCases[id];

  const fullCode = sourceCode + testCase;  // Append the test cases to the user's code

  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: fullCode,
      },
    ],
  });
  // Filter only "Test succeeded" or "Test failed" lines
   // Return the filtered output for clean display  

  return response.data;
};
