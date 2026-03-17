import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

import Dashboard from "../modules/superAdmin/Dashboard";
import ProjectList from "../modules/projects/management/ProjectList";
import CreateProject from "../modules/projects/management/CreateProject";
import ProjectDashboard from "../modules/projects/dashboard/ProjectDashboard";
import TaskBoard from "../modules/projects/tasks/TaskBoard";
import GanttChart from "../modules/projects/gantt/GanttChart";
import TimeEntries from "../modules/timeTracking/TimeEntries";

import Home from "../modules/home/Home";

import Teams from "../modules/organization/teams/Teams";
import Users from "../modules/organization/users/Users";

import Invoices from "../modules/billing/Invoices";
import BillingReports from "../modules/billing/BillingReports";
import Chat from "../modules/communication/Chat";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />

        <Route path="projects" element={<ProjectList />} />
        <Route path="projects/create" element={<CreateProject />} />
        <Route path="home" element={<Home />} />
        <Route path="project-dashboard" element={<ProjectDashboard />} />

        <Route path="teams" element={<Teams />} />
        <Route path="users" element={<Users />} />

        <Route path="tasks" element={<TaskBoard />} />
        <Route path="gantt" element={<GanttChart />} />
        <Route path="time" element={<TimeEntries />} />

        <Route path="billing" element={<Invoices />} />
        <Route path="reports" element={<BillingReports />} />

        <Route path="chat" element={<Chat />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;