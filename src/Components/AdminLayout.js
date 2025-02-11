import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "./Chart/Chart";
import AnimateDot from "./AnimateDots/AnimateDots";
import "./AdminLayout.css";


const AdminLayout = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
          try {
            // Replace with your actual API URL
            const apiUrl = "https://api-group-2ivdajogp-yasminas-projects-8e49fc39.vercel.app/users/";
            const response = await axios.get(apiUrl,);
            // axios.get("https://act-manag-ap-ij8cbgcdi-yasminas-projects-8e49fc39.vercel.app/users")
            // .then(response => console.log(response.data))
            // .catch(error => console.error(error));
            console.log("API Response:", response.data);
            setStudents(Array.isArray(response.data) ? response.data : []);
            setLoading(false);
          } catch (err) {
            setError("Failed to fetch students");
            console.error(err);
            setLoading(false);
          }
        };
    
        fetchStudents();
      }, []);

    return (
        <div className="admin-layout">  
          <AnimateDot/>
          <div className="chart-container">
            <LineChart />
          </div>
          <div>
            <h1>Student List</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {Array.isArray(students) && students.length > 0 ? (
              <ul>
                {students.map((student) => (
                  <li key={student.id}>
                    {student.firstName} {student.lastName}
                  </li>
                 ))}   
              </ul>
            ) : (
            <p>There are no students.</p>
        )}
            
          </div>
        </div>
    )
}

export default AdminLayout;