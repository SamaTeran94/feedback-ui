import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutIconLink from "./components/AboutIconLink"
import { FeeedbackProvider } from "./context/FeedbackContext"

function App() {

  return (
    <FeeedbackProvider>
      <Router>
        <Header />
        <div className="container2">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router >
    </FeeedbackProvider>
  )
}

export default App
