import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import TestPage from "./pages/TestPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./components/UserProvider";
import TestResultsPage from "./pages/TestResultsPage";


function App() {

  //state에 저장하면 새로고침 시 날라감 방지를 위해 현재 로그인한 정보 가져오기
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/profile"
                element={<ProfilePage/>}
              />
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<TestResultsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
