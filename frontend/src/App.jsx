import { Route, Routes, useLocation } from "react-router-dom"
import LogIn from "./components/LogIn"
import Navbar from "./components/Navbar"
import SignUp from "./components/SignUp"
import Home from "./pages/Home"
import Cp from "./pages/Cp"
import Dsa from "./pages/Dsa"
import Interview from "./pages/Interview"
import Algorithm from "./pages/Algorithm"
import Footer from "./components/Footer"
import { useContext, useState } from "react"
import { ThemeContext } from "."
import Profile from "./pages/Profile"
import Notes from "./pages/Notes"
import About from "./pages/About"
import Contact from "./pages/Contact"
import TermAndConditions from "./pages/TermAndConditions"
import CodeEditor from "./components/Editor"
import { useDispatch, useSelector } from "react-redux"
import PublicLayout from "./routes/PublicLayout"
import ProtectedLayout from "./routes/ProtectedLayout"
import ScrollToTop from "./utils/ScrollToTop"
import { useEffect } from "react"
import { checkUser } from "./apis/api"
import { signInSuccess } from "./store/authSlice"
import { setCompletedList, setRevisedList } from "./store/problemsSlice"

function App() {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await checkUser();
        console.log("User check response:", response);

        if (response.status === 200) {
          dispatch(signInSuccess(response.data));
          dispatch(setCompletedList(response.data.user.completedProblems || []));
          dispatch(setRevisedList(response.data.user.revisedProblems || []));
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchUser();
  }, []);


  const location = useLocation();
  const hideFooterRoutes = ["/profile", "/login", "/signup"];

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("App component isAuthenticated:", isAuthenticated);

  if (isFetching) {
    return (
      <div className={`flex items-center justify-center h-screen ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#4E5FB5] bordder-solid"></div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} z-[-10]`}>
      {/* <ScrollToTop /> */}
      <Navbar />
      <div>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route path="/dsa" element={<Dsa />} />
            <Route path="/cp" element={<Cp />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/algorithm" element={<Algorithm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/t&c" element={<TermAndConditions />} />

            <Route path="/editor" element={<CodeEditor />} />
          </Route>
        </Routes>
      </div>

      {/* <Footer /> */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  )
}

export default App
