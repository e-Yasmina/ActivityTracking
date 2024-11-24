import React, { useState } from "react";
import "./index.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [step, setStep] = useState(1); // Tracking the current step
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
  });

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
      {step === 3 && (
        <div className="welcome-screen">
          <header>
            <img
              src={formData.avatar}
              alt="User Avatar"
              className="user-avatar"
            />
            <h1>Welcome, {formData.firstName} {formData.lastName}!</h1>
          </header>
          <p>Activities will be displayed here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
