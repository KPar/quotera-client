import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import Settings from "./pages/Settings/Settings";
import ReadReflection from "./pages/ReadReflection/ReadReflection";
import SearchResults from "./pages/SearchResults/SearchResults";
import UniversalFixedNav from "./components/UniversalFixedNav";
import CreateReflection from "./pages/CreateReflection/CreateReflection";



function App() {  

  return (
    <Router>
      <UniversalFixedNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users/:userID" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/reflection/:reflectionID" element={<ReadReflection />} />
        <Route path="/edit/:reflectionID" element={<CreateReflection />} />
        <Route path="/new-reflection" element={<CreateReflection />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
