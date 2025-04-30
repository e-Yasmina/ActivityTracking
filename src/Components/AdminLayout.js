import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "./Chart/Chart";
import AnimateDot from "./AnimateDots/AnimateDots";
import StudentsList from "./StudentsList/StudentsList";
import "./AdminLayout.css";


const AdminLayout = () => {
    // const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const students= [
        {firstName: "John",
        lastName: "",
        id: 1,
        state: "active"},
        {firstName: "Jane",
        lastName: "",
        id: 2,
        state: "inactive"},
        {firstName: "Bob",
        lastName: "",
        id: 3,
        state: "inactive"},
        {firstName: "Charlie",
        lastName: "",
        id: 4 ,
        state: "active"},
        {firstName: "Alice",
        lastName: "",
        id: 5 ,
        state: "active"},
    ]


    // useEffect(() => {
    //     const fetchStudents = async () => {
    //       try {
    //         // Replace with your actual API URL
    //         const apiUrl = "https://api-group-yasminas-projects-8e49fc39.vercel.app/users/";
    //         const response = await axios.get(apiUrl,);
    //         // axios.get("https://act-manag-ap-ij8cbgcdi-yasminas-projects-8e49fc39.vercel.app/users")
    //         // .then(response => console.log(response.data))
    //         // .catch(error => console.error(error));
    //         console.log("API Response:", response.data);
    //         setStudents(Array.isArray(response.data) ? response.data : []);
    //         setLoading(false);
    //       } catch (err) {
    //         setError("Failed to fetch students");
    //         console.error(err);
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchStudents();
    //   }, []);

    return (
        <div className="admin-layout">  
          <AnimateDot/>
          <div className="deviser">
          <div className="chart-container">
            <LineChart />
          </div>
          <div className="students-list-container">
            <h1>Students:</h1>
            <StudentsList items={students} />
            {/* {loading && <p>Loading...</p>}
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
            
        )} */}
            
          </div>
        </div>
        </div>
    )
}

export default AdminLayout;