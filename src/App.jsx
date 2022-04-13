import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Settings from "./pages/Settings/Settings";
import ReadBookSummary from "./pages/ReadBookSummary/ReadBookSummary";
import CreateBookSummary from "./pages/CreateBookSummary/CreateBookSummary";
import EditBookSummary from "./pages/EditBookSummary/EditBookSummary";
import BookResults from "./pages/BookResults/BookResults";
import SummariesResults from "./pages/SummariesResults/SummariesResults";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<BookResults />} />
        <Route path="/book-summaries/:bookID" element={<SummariesResults />} />
        <Route path="/book-summary/:bookSummaryID" element={<ReadBookSummary />} />
        <Route path="/edit/:bookSummaryID" element={<EditBookSummary />} />
        <Route path="/newBookSummary" element={<CreateBookSummary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
