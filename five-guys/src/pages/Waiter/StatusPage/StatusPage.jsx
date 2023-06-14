import React from "react";
import Sidebar from "../../../components/Waiter/Sidebar/Sidebar";

const StatusPage = () => {
  return (
    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col">
        <h1>Hola Status</h1>
      </div>
    </div>
  );
};

export default StatusPage;
