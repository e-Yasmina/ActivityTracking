import React, { useState } from "react";
import "./App.css";
import "./Components/ActivityCard/ActivityCard";
import CodeEditor from "./Components/CodeEditor/CodeEditor";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import Calculator from "./Components/ActivitiesUIs/Calculator";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [step, setStep] = useState(1); // Tracking the current step
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [view, setView] = useState("activities"); // Track the current view

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
  });
  const activities = [
    {
      title:"Calculator programing activity",
      description:"This activity is for practicing how to deal with operation in python.",
      image:"./ActImages/image1.png",
      ImgT:"Calculator",
    },
    {
      title:"Secret Message Encoder activity",
      description:"The purpose of this activity is to practice handling strings in Python. ",
      image:"./ActImages/image3.png",
      ImgT:"Secret Message Encoder",
    },
    {
      id: 3,
      image: "/Images/activity3.png",
      ImgT: "Activity 3",
      title: "Activity 3",
      description: "Description for Activity 3",
    },
    // {
    //   id: 4,
    //   image: "/Images/activity4.png",
    //   ImgT: "Activity 4",
    //   title: "Activity 4",
    //   description: "Description for Activity 4",
    // },
  ];

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Proceeding for the next step
  const handleNextStep = () => {
    if (formData.firstName && formData.lastName) {
      setStep(2); // Moving to step 2
    } else {
      alert("Please fill out both fields!");
    }
  };
  // const handleSignup = () => {
  //   if (formData.firstName && formData.lastName) {
  //     alert(`Welcome, ${formData.firstName} ${formData.lastName}!`);
  //     setIsPopupOpen(false);
  //   } else {
  //     alert("Please fill out both fields!");
  //   }
  // };

  // Handling avatar selection
  const handleAvatarSelect = (avatar) => {
    setFormData({ ...formData, avatar });
    //alert(`Welcome, ${formData.firstName} ${formData.lastName}! You selected ${avatar}!`);
    setStep(3); // Moving to the welcome screen
  };

  // Handling the selected activity
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity); 
    setView("activityDetail"); // Change the view to show the activity details
  };
  

  return (
    <div>
      {step === 1 && (
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
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="popup">
          <h2>Choose an avatar</h2>
          <div className="avatar-grid">
            {[...Array(14)].map((_, index) => {
              const imagePath = `/Images/image${index + 1}.png`;
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
        <div className="activity-detail">
          <CodeEditor />
          <Calculator/>
        </div>
        // // <div className="activity-detail">
        //   {/* <h1>{selectedActivity.title}</h1> */}
        //   {/* <img
        //     src={selectedActivity.image}
        //     alt={selectedActivity.ImgT}
        //     className="activity-image"
        //   /> */}
        //   //CodeEditor
        //   {/* <p>{selectedActivity.description}</p> */}
        //   // <button onClick={() => setView("activities")}>Go Back</button>
        // // </div>
      )}
           
    </div>
  );
}

export default App;
