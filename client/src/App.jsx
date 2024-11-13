import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import RouteGuard from "./components/route-guard";
import { useAuthContext } from "./context/auth-context";
import AuthPage from "./pages/auth";
import InstructorDashboardPage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/CommonLoayour";
import StudentHomePage from "./pages/student/home";
import NotFoungPage from "./pages/not-found";
import AddNewCoursePage from "./pages/instructor/add-new-course";

function App() {
  const { auth } = useAuthContext();

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor/create-new-course"
          element={
            <RouteGuard
              element={<AddNewCoursePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentViewCommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          <Route path="/" element={<StudentHomePage />} />
          <Route path="home" element={<StudentHomePage />} />
        </Route>
        <Route path="*" element={<NotFoungPage/>}/>
      </Routes>
    </>
  );
}

export default App;
