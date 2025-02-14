import React from "react";
import "./StudentsList.css";
const StudentsList = ({ items }) => {
    return (
      <ul className="students-list">
        {items.map((item, index) => (
          <li key={index} >{item}</li>
        ))}
      </ul>
    );
  };
  
  export default StudentsList;
  