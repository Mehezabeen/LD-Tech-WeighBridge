import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import ManageUser from "./components/ManageUser/ManageUser.jsx";
import ViewUser from "./components/ViewUser/ViewUser.jsx";
import UpdateUser from "./components/UpdateUser/UpdateUser.jsx";
import LoginUser from "./components/Login/LoginUser.jsx";
import HomePage2 from "./components/HomePages/HomePage2.jsx";
import HomePage3 from "./components/HomePages/HomePage3.jsx";
import HomePage5 from "./components/HomePages/HomePage5.jsx";
import VehicleEntry from "./components/GateUser/src/components/Vehicle Entry/VehicleEntry.jsx";
import VehicleEntryDetails from "./components/GateUser/src/components/Vehicle Entry/VehicleEntryDetails.jsx";
import Report from "./components/GateUser/src/components/Report/Report.jsx";
import Print from "./components/GateUser/src/components/Print/Print.jsx";
import Camera from "./components/GateUser/src/components/Camera/Camera.jsx";
import Capture from "./components/GateUser/src/components/Camera/Capture.jsx";

import QualityCheck from "./components/QualityCheck/src/components/QualityCheck/QualityCheck.jsx";
import QPrint from "./components/QualityCheck/src/components/Print/Print.jsx";
import QReport from "./components/QualityCheck/src/components/Report/Report.jsx";

import ManagementHome from "./components/Management/src/components/Home/ManagementHome.jsx";
import ManagementLocation from "./components/Management/src/components/Location/Location.jsx";
import ManagementTransaction from "./components/Management/src/components/Transaction/Transaction.jsx";
import ManagementCamera from "./components/Management/src/components/Camera/Camera.jsx";
import ManagementReport from "./components/Management/src/components/Report/Report.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginUser />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/view-users" element={<ViewUser />} />
      <Route path="/update-user" element={<UpdateUser />} />
      <Route path="/home2" element={<HomePage2 />} />
      <Route path="/home3" element={<HomePage3 />} />
      <Route path="/home5" element={<HomePage5 />} />
      <Route path="/Dashbord" element={<VehicleEntry />} />
      <Route path="/VehicleEntry" element={<VehicleEntry />} />
      <Route path="/VehicleEntryDetails" element={<VehicleEntryDetails />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Print" element={<Print />} />
      <Route path="/Camera" element={<Camera />} />
      <Route path="/Capture" element={<Capture />} />

      <Route path="/QualityCheck" element={<QualityCheck />} />
      <Route path="/QPrint" element={<QPrint />} />
      <Route path="/QReport" element={<QReport />} />

      <Route path="/ManagementHome" element={<ManagementHome />} />
      <Route path="/ManagementLocation" element={<ManagementLocation />} />
      <Route path="/ManagementTransaction" element={<ManagementTransaction />} />
      <Route path="/ManagementCamera" element={<ManagementCamera />} />
      <Route path="/ManagementReport" element={<ManagementReport />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
