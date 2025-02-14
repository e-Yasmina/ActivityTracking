import axios from "axios";

// Define the base URL for the API
const API_BASE_URL = "https://api-group-2ivdajogp-yasminas-projects-8e49fc39.vercel.app";

const api = {
 addUser:async (formData, setUserKey) => {   
    try {
        // Replace the URL with your deployed Vercel API endpoint
        const apiUrl = `${API_BASE_URL}/user/`;
  
        // Using Axios
        const response = await axios.post(apiUrl, { 
          firstName: formData.firstName,
          lastName: formData.lastName,
        }, {
          headers: { "Content-Type": "application/json" } // ✅ Ensure JSON format
        });

        console.log("Full Response:", response);
        const data = response.data;
        console.log("User Key:", data.userKey);
        if (data.userKey) {
           //userKey = data.userKey; // Store userKey
           setUserKey(data.userKey); // Store userKey
           //localStorage.setItem("userKey", userKey); // Store in local storage
        } else {
           console.error("Error:", data.error);
        }
    
      } catch (error) {
        // Handle errors
        console.error(error);
      }
},

// Function to update score
 updateScore:async (userKey, scoreArray) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/${userKey}/score`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ score: scoreArray }),
        });

        const data = await response.json();
        console.log("Score Update Response:", data);
    } catch (error) {
        console.error("Error updating score:", error);
    }
},

// Function to update time
updateTime:async (userKey, activityId, timeSpent) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/${userKey}/time`, { 
            activityId, 
            timeSpent 
        });
        return response.data;
    } catch (error) {
        console.error("Error updating time:", error);
        throw error;
    }
},
updateLiveActivity:async (userKey, activityId) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/${userKey}/activity`, { 
            activityId
        });
        return response.data;
    } catch (error) {
        console.error("Error updating live activity:", error);
        throw error;
    }
},
}

export default api;