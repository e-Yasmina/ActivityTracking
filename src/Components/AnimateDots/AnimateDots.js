import { useState } from "react";
import "./AnimateDots.css";

const DotsMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={`dots ${isActive ? "on" : ""}`} onClick={toggleMenu}>
        <span></span>
      </button>
      {isActive && (
        <div className="admin-menu">
          <span>Students</span>
          <span>Activities</span>
          <span>More</span>
        </div>
      )}
    </div>
  );
};

export default DotsMenu;
