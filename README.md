# Python Activities Management App

This is a simple web application designed to manage Python activities and track students' progress. The app includes a code editor integrated with a Python API to run and debug Python code. Each activity comes with detailed explanations, instructions, and test cases to help students practice and improve their Python programming skills.

---

## Features

- **User Registration**: Users can enter their name and choose an avatar to personalize their experience.
- **Activity Management**: A list of Python activities is available, each with a description, instructions, and test cases.
- **Code Editor**: A built-in code editor allows users to write, run, and debug Python code directly in the app.
- **Test Cases**: Each activity includes test cases to validate the user's code and provide feedback.
- **Progress Tracking**: Tracks the time spent on each activity and stores user progress.
- **Admin Panel**: An admin interface to manage activities and monitor student progress.

---

## Technologies Used

- **Frontend**: React.js
- **Code Editor**: Integrated with a Python API for running and debugging code.
- **Backend API**: Axios is used to interact with the Python API for executing code and managing user data.
- **Styling**: CSS for a clean and responsive design.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/e-Yasmina/activity-tracking.git
   cd python-activities-app

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

4. Open the app in your browser:
   ```bash
   http://localhost:3000

## Usage

1. **User Registration**:
   - Enter your first and last name.
   - Choose an avatar to personalize your profile.

2. **Select an Activity**:
   - Browse the list of available Python activities.
   - Click on an activity to view its details and start coding.

3. **Code Editor**:
   - Write Python code in the integrated code editor.
   - Run your code and view the output or debug errors.

4. **Test Cases**:
   - Each activity includes test cases to validate your code.
   - Pass all test cases to complete the activity.

5. **Admin Panel**:
   - Enter the admin password to access the admin panel.
   - Manage activities and monitor student progress.

## Folder Structure
src/
├── Components/
│   ├── ActivityCard/       # Activity card component
│   ├── AdminLayout/        # Admin panel layout
│   ├── CodeEditor/         # Code editor component
│   ├── Layout.js           # Main layout for activities
│   ├── Output/             # Output display for code execution
│   ├── StudentsList/       # List of students and their progress
│   ├── ............        # The rest of components
├── App.js                  # Main application file
├── api.js                  # API to run python code
├── apiServices.js          # Functions to communicate with the server side
├── App.css                 # Global styles
├── index.js                # Entry point

## API Integration

The app uses a Python API to execute and debug Python code. The API endpoints include:

- **Run Code**: Executes the Python code and returns the output.
- **Test Cases**: Validates the code against predefined test cases.

---

## Future Enhancements

- Add more activities and challenges.
- Implement a leaderboard to track top-performing students.
- Add support for more programming languages.
- Enhance the admin panel with more analytics and management tools.

---

## Acknowledgments

- [React.js](https://reactjs.org/) for the frontend framework.
- [Axios](https://axios-http.com/) for API integration.
- [Python API](https://emkc.org/api/v2/piston) for running and debugging Python code.

---

Enjoy coding and learning Python with the **Python Activities Management App**! 🚀