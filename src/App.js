import React, { useState, useEffect } from "react";
import "./App.css";
import "./Components/ActivityCard/ActivityCard";
import ActivityCard from "./Components/ActivityCard/ActivityCard";
import CodeEditorLayout from "./Components/Layout";
import {Helmet} from "react-helmet";
import AdminLayout from "./Components/AdminLayout";
import api from "./apiServices";
import axios from "axios";

function App() {
  
  //const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [step, setStep] = useState(1); // Tracking the current step
  const [admin, setAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminPopup, setAdminPopup]=useState(false);
  const password="YasminaAdmin@2025";

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [view, setView] = useState("activities"); // Track the current view
  

  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");
  const [userKey, setUserKey] = useState("");

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [liveActivity, setLiveActivity] = useState(null);
  
  const API_BASE_URL = "https://api-group-yasminas-projects-8e49fc39.vercel.app";

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
    setStartTime(Date.now()); // Capture start time
    setLiveActivity(activity.id); // Track the current activity
  };
  
  
  //Submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      console.log("Form Data:", formData.firstName, formData.lastName);
      setStep(2); // Moving to step 2
      try {
        const apiUrl = `${API_BASE_URL}/user/`;

        // Send request to backend
        const response = await axios.post(apiUrl, { 
            firstName: formData.firstName,
            lastName: formData.lastName,
        }, {
            headers: { "Content-Type": "application/json" } 
        });

        console.log("Full Response:", response); // ✅ Log entire response to debug

        const data = response.data;
        console.log("Response Data:", data); // ✅ Ensure userKey exists

        if (data.userKey) {
            setUserKey(data.sendedUserKey); // ✅ Store userKey
            console.log(userKey);
        } else {
            console.error("Error: userKey not found in response");
        }

    } catch (error) {
        console.error("Error adding user:", error);
    }
      //api.addUser(formData, setUserKey);
      //console.log("User Key:", userKey);
    }else {
      alert("Please fill out both fields!");
    }
  };
  
  // Tracking the live activity
  const TrackableComponent = ({ componentName, content }) => {
    useEffect(() => {
      console.log(`${componentName} mounted`);
  
      return () => {
        console.log(`${componentName} unmounted`);
        setEndTime(Date.now()); // Capture end time
        setLiveActivity(null); // Reset the current activity
        const timeSpent = endTime - startTime;
        api.updateTime(userKey, timeSpent, selectedActivity.id);
      };
    }, []);
  
    useEffect(() => {
      console.log(`${componentName} content changed to: ${content}`);
    }, [content]); // Runs when `content` changes
    
    return  <CodeEditorLayout id={selectedActivity.id}  setView={setView} userKey={userKey}/>;
  };

  
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Python activities</title>
      <link rel="canonical" href="http://pythonActivitis.com/" />
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
      {step === 3 && view === "activityDetail" && selectedActivity && 
        <TrackableComponent componentName={selectedActivity.id} content={selectedActivity.title} />
      }
           
    </div>
    </>
  );
}

export default App;
