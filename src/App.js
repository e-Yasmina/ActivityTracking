import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Components/ActivityCard/ActivityCard";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import CodeEditorLayout from "./Components/Layout";
import {Helmet} from "react-helmet";
import { CODE_SNIPPETS } from "./constants";
import AdminLayout from "./Components/AdminLayout";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [step, setStep] = useState(1); // Tracking the current step
  const [admin, setAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminPopup, setAdminPopup]=useState(false);
  const password="YasminaAdmin@2025";

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [view, setView] = useState("activities"); // Track the current view

  //const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
  });
  const image1= `${process.env.PUBLIC_URL}/ActImages/image1.png`;
  const image2= `${process.env.PUBLIC_URL}/ActImages/image2.png`;
  const image3= `${process.env.PUBLIC_URL}/ActImages/image3.png`;
  const activities = [
    { 
      id:1,
      title:"Calculator programing activity",
      description:"This activity is for practicing how to deal with operation in python.",
      image:image1,
      ImgT:"Calculator",
    },
    {  
      id:2,
      title:"Identify the stranger element",
      description:"The purpose of this activity is to practice handling lists in Python. ",
      image:image2,
      ImgT:"python lists",
    },
    {
      id: 3,
      title:"Secret Message Encoder activity",
      description:"The purpose of this activity is to practice handling strings in Python. ",
      image:image3,
      ImgT:"Secret Message Encoder",
    },
  ];

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdminInputChange = (e) => {
    setAdminPassword(e.target.value);
  };

  
  const handleAdminNextStep = () => {
    if (adminPassword === password ) {
      setAdmin(true);
      setAdminPopup(false);
    } else {
      alert("Your password is incorrect.");
    }
  };
  
  const handleAdminClick = () => {
    setAdminPopup(true);
    setStep(0);
  };
  // Handling avatar selection
  const handleAvatarSelect = (avatar) => {
    setFormData({ ...formData, avatar });
    setStep(3); // Moving to the welcome screen
  };

  // Handling the selected activity
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity); 
    setView("activityDetail"); // Change the view to show the activity details
  };
  
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      setStep(2); // Moving to step 2
      try {
        // Replace the URL with your deployed Vercel API endpoint
        const apiUrl = "https://api-group.vercel.app/user";
  
        // Using Axios
        const response = await axios.post(apiUrl, { 
          firstName: formData.firstName,
          lastName: formData.lastName,
         });
  
        // Handle success
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    } 
    
    else {
      alert("Please fill out both fields!");
    }
  };
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Python activities</title>
      <link rel="canonical" href="http://pythonactivitis.com/" />
    </Helmet>
    <div>
      {adminPopup && (
        <AdminLayout/>
        // <div className="popup">
        //   <h2>Enter The password:</h2>
        //   <input
        //     type="password"
        //     name="adminPassword"
        //     placeholder="Password"
        //     value={adminPassword}
        //     onChange={handleAdminInputChange}
        //   />
        //   <button onClick={handleAdminNextStep}>Next</button>
        // </div>
      )}

      {admin && (
        <>
         <AdminLayout/>
        </>
      )}

      {step === 1 && (
        <>
        <button
        onClick={handleAdminClick}
        className="admin-button">
          <img
            src={`${process.env.PUBLIC_URL}/image.png`}
            alt="Admin"
            className="admin-image"
          />
        </button>
        <div className="popup">
          <h2>Enter your name:</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>Next</button>
        </div>
        </>
      )}

      {step === 2 && (
        <div className="popup">
          <h2>Choose an avatar</h2>
          <div className="avatar-grid">
            {[...Array(14)].map((_, index) => {
              const imagePath = `${process.env.PUBLIC_URL}/Images/image${index + 1}.png`;
              return (
                <img
                  key={index}
                  src={imagePath}
                  alt={`Animal ${index + 1}`}
                  className="avatar"
                  onClick={() => handleAvatarSelect(imagePath)}
                />
              );
            })}
          </div>
        </div>
      )}
      {step === 3 && view === "activities" && (
        <div className="welcome-screen">
          <header>
            <img
              src={formData.avatar}
              alt="User Avatar"
              className="user-avatar"
            />
            <h1>Welcome, {formData.firstName} {formData.lastName}!</h1>
          </header>
          <div className="centered-container">
            <h2>Available activities: </h2>
          </div>
          <div  className="ActContainer">       
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                image={activity.image}
                ImgT={activity.ImgT}
                title={activity.title}
                description={activity.description}
                onClick={() => handleActivityClick(activity)}
              />
            ))}
            
          </div>
        </div>
      )}
      {step === 3 && view === "activityDetail" && selectedActivity && (
        <>
          <CodeEditorLayout id={selectedActivity.id}  setView={setView}/>
        </>
      )}
           
    </div>
    </>
  );
}

export default App;
