import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerSignup from "./components/ManagerSignup/ManagerSignup";
import UserLogin from "./components/UserLogin/UserLogin";
import UsersScreen from "./screens/UsersScreen";
import ManagerLogin from "./components/ManagerLogin/ManagerLogin";
import AddTeamScreen from "./screens/AddTeamScreen";
import AddUserScreen from "./screens/AddUserScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TeamsScreen from "./screens/TeamScreen";
import TeamCardScreen from "./screens/TeamCardScreen";
import UserCardScreen from "./screens/UserCardScreen";
import UserPage from "./screens/userPage";
import AddFeedbook from "./screens/AddFeedback";
import AddReview from "./screens/AddReview";

import { UserContext } from "./UserContext";
import { EmployeeContext } from "./EmployeeContext";

function App() {
  const [user, setUser] = useState(null);
  const [Euser, setEUser] = useState(null);
  return (
    <Router>
      <EmployeeContext.Provider value={{ Euser, setEUser }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route
              path={user == null ? "/" : "/ManagerLogin"}
              element={<ManagerLogin />}
            />

            {/* <Route path="/" element={<TeamsScreen />} /> */}
            <Route
              path={user != null ? "/" : "/TeamsScreen"}
              element={<TeamsScreen />}
            />
            <Route path="/review/:id" element={<AddReview />} />
            <Route path="/team/:id" element={<TeamCardScreen />} />
            <Route path="/ManagerSignup" element={<ManagerSignup />} />
            <Route
              path={Euser == null ? "/User" : "/userssss"}
              element={<UserLogin />}
            />
            <Route
              path={Euser != null ? "/User" : "/UserPage"}
              element={<UserPage />}
            />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/user/:id" element={<UserCardScreen />} />

            <Route path="/AddUser" element={<AddUserScreen />} />
            <Route path="/AddTeam" element={<AddTeamScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </UserContext.Provider>
      </EmployeeContext.Provider>
    </Router>
  );
}

export default App;
