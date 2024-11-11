import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RouteGuard from "./components/route-guard";
import { useAuthContext } from "./context/auth-context";
import AuthPage from "./pages/auth";
import InstructorDashboardPage from "./pages/instructor";
import StudentViewCommonLayout from "./components/student-view/CommonLoayour";
import StudentHomePage from "./pages/student/home";

function App() {
  const [count, setCount] = useState(0);
  const { auth } = useAuthContext();
  console.log("auth======",auth )

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
      </Routes>
    </>
  );
}

export default App;
