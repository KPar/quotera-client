import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import ReadBookSummary from "./pages/ReadBookSummary";
import CreateOrEditSummary from "./pages/CreateOrEditSummary";
import BookResults from "./pages/BookResults";
import SummariesResults from "./pages/SummariesResults";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users/:userID" element={<Profile />} />
        <Route path="/search" element={<BookResults />} />
        <Route path="/book-summaries/:bookID" element={<SummariesResults />} />
        <Route path="/book-summary/:bookSummaryID" element={<ReadBookSummary />} />
        <Route path="/edit/:bookSummaryID" element={<CreateOrEditSummary />} />
        <Route path="/new-book-summary" element={<CreateOrEditSummary />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
