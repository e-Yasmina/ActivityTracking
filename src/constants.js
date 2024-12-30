export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  1: `\n# This function adds two numbers\ndef add(x, y):\n\treturn x + y\n\n# This function subtracts two numbers\ndef subtract(x, y):\n\t# Add the return statement\n\n# This function multiplies two numbers\ndef multiply(x, y):\n\t# Add the return statement\n\n# This function divides two numbers\ndef divide(x, y):\n\t# Add the return statement\n`,
  2: `\n# Importing the random library\nimport random\n\n# This function generates a list with a 'stranger' element based on a random rule\ndef generate_stranger_list():\n\t# Create a random number of items for the list\n\tlist_length = random.randint(5, 10)\n\t\n\t# Randomly decide the "rule" for the list\n\trule = random.choice(["same_type", "same_value", "same_length"])\n\n\tif rule == "same_type":\n\t\t# All elements are integers except one string (or vice versa)\n\t\tmain_value = random.randint(1, 100)\n\t\tmy_list = [main_value] * (list_length - 1)\n\t\tstranger = random.choice(["apple", "banana", "cherry"])  # A string stranger\n\t\tmy_list.append(stranger)\n\telif rule == "same_value":\n\t\t# All elements have the same value except one with a different value\n\t\tmain_value = random.randint(1, 10)\n\t\tmy_list = [main_value] * (list_length - 1)\n\t\tstranger = random.randint(1, 10)\n\t\twhile stranger == main_value:  # Ensure the stranger is different\n\t\t\tstranger = random.randint(1, 10)\n\t\tmy_list.append(stranger)\n\telif rule == "same_length":\n\t\t# All elements are lists of the same length except one\n\t\tmain_length = random.randint(2, 5)\n\t\tmy_list = [[0] * main_length for _ in range(list_length - 1)]\n\t\tstranger = [0] * random.randint(1, main_length - 1)  # Shorter list\n\t\tmy_list.append(stranger)\n\t\n\t# Shuffle the list\n\trandom.shuffle(my_list)\n\n\treturn my_list\n\n# Add code to reveal the strange element inside this function\ndef find_stranger(lst):\n\t\treturn "stranger"\n\n# This is the main function to display the generated list and exercise instructions\ndef main():\n\t# Generate the list with a 'stranger' element\n\tgenerated_list = generate_stranger_list()\n\t\n\t# Print the generated list\n\tprint("Here is the list:")\n\tprint(generated_list)\n\t\n\t# Instructions for identifying the stranger element\n\tprint("\\nWrite Python code to identify the 'stranger' element in this list.")\n\tprint("Hint: Look for patterns like type, value, or length!")\n\tprint("\\nOnce you've identified the stranger, share your code or explanation.")\n\n# Run the main function when the script is executed\nif __name__ == "__main__":\n\tmain()\n`,
};
// export const CODE_SNIPPETS = {
//   javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
//   typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
//   python: `\n# This function adds two numbers\ndef add(x, y):\n\treturn x + y\n\n# This function subtracts two numbers\ndef subtract(x, y):\n\t# Add the return statement\n\n# This function multiplies two numbers\ndef multiply(x, y):\n\t# Add the return statement\n\n# This function divides two numbers\ndef divide(x, y):\n\t# Add the return statement\n`,
//   java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
//   csharp:
//     'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
//   php: "<?php\n\n$name = 'Alex';\necho $name;\n",
// };
