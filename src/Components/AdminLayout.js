import React from "react";
import LineChart from "./Chart/Chart";
import AnimateDot from "./AnimateDots/AnimateDots";
import "./AdminLayout.css";


const AdminLayout = () => {
    return (
        <div className="admin-layout">
            
            <AnimateDot/>
            <div className="chart-container">
             <LineChart />
            </div>
        </div>
    )
}

export default AdminLayout;