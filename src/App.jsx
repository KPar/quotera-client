import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import ReadBookSummary from "./pages/ReadBookSummary";
import CreateSummary from "./pages/CreateSummary/CreateSummary";
import BookResults from "./pages/BookResults";
import SummariesResults from "./pages/SummariesResults";
import UniversalFixedNav from "./components/UniversalFixedNav";



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
        <Route path="/search" element={<BookResults />} />
        <Route path="/book-summaries/:bookID" element={<SummariesResults />} />
        <Route path="/book-summary/:bookSummaryID" element={<ReadBookSummary />} />
        <Route path="/edit/:bookSummaryID" element={<CreateSummary />} />
        <Route path="/new-book-summary" element={<CreateSummary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
