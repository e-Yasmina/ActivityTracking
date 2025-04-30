import React from "react";
import "./StudentsList.css";
const StudentsList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No students available.</p>;
  }

    return (
      <ul className="students-list">
      {items.map((student) => (
        <li
          key={student.id}
          title={`This student is ${student.state === "active" ? "online" : "offline"}`}
        >
          <span className="student-name">
            {student.firstName} {student.lastName}
          </span>  
          <span className={`status ${student.state}`}>
            {student.state === "active" ? "online" : "offline"}
          </span>
        </li>
      ))}
      </ul>
    );
  };
  
  export default StudentsList;
  