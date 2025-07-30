/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from 'react-router';
import googleImg from '../assets/google.png'; // Ensure path is correct
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useState, useEffect } from 'react'; // Combined useEffect
import { ThemeContext } from '..'; // Ensure path is correct

// 👇 Import all necessary actions from your slice
import { signInStart, signInSuccess, signInFailure } from '../store/authSlice';
import { signIn } from '../apis/api';
import { setCompletedList, setRevisedList } from '../store/problemsSlice';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('Frontend: Attempting to sign in with:', JSON.stringify(inputData));

    dispatch(signInStart());

    const payload = {
      email: inputData.email,
      password: inputData.password
    }

    const response = await signIn(payload);
    console.log(response);

    if (response.status == 200) {
      console.log('Frontend: Sign-in successful (HTTP status OK). API response data:', response);
      dispatch(signInSuccess(response.data));
      dispatch(setCompletedList(response.data.user.completedProblems || []));
      dispatch(setRevisedList(response.data.user.revisedProblems || []));
      localStorage.setItem("isLoggedIn", true);
      navigate(from, { replace: true });
    }
    else {
      console.error('Frontend: Sign-in API error. Status:', response.status, 'Response data:', response);
      dispatch(signInFailure(response.message || `Request failed with status: ${response.status}`));
    }
  };

  useEffect(() => {
    console.log("useEffect running, isAuthenticated =", isAuthenticated);
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // ... rest of your JSX ...
  // Ensure your form button uses the isLoading state and your UI displays the error from Redux
  return (
    <div className={`mt-20 px-4 sm:px-16 lg:px-32 h-[89vh] w-full flex justify-center items-center ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <div className={`lg:w-[32rem] sm:w-[28rem] w-[20rem] ${theme === "dark" ? "bg-[#3C3C3C]" : "bg-[#C3C3C3]"} px-10 py-4 rounded-lg ${theme === "dark" ? "border-gray-600" : "border-gray-400"} border-[.5px] flex flex-col items-center`}>
        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Welcome to</p>
        <p className="text-3xl text-[#4E5FB5] font-bold mb-16">AlgoSphare</p>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4 w-full"> {/* Simplified onSubmit */}
          <input onChange={handleInputChange} value={inputData.email} type="email" name="email" id="email" placeholder="Enter Email" className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`} required />
          <input onChange={handleInputChange} value={inputData.password} type="password" name="password" id="password" placeholder="Enter Password" className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`} required />
          <p className={`text-right ${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-sm mt-[-10px]  cursor-pointer`}>Forget Password?</p>
          <button type="submit" className={`w-full bg-[#7D8EE4] ${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold py-2 rounded-lg mt-4 flex justify-center items-center`} disabled={isLoading} >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        {/* Display error from Redux store */}
        {error && <p className="text-red-500 mt-2 text-sm">Error: {error}</p>}

        <button className={`flex items-center gap-2 mt-6 ${theme === "dark" ? "text-gray-200 bg-zinc-900" : "text-gray-700 bg-zinc-100"} pr-2 text-xs rounded-md`}>
          <img src={googleImg} alt="" className='w-[32px] bg-gray-300 rounded-md' />
          Sign up with Google
        </button>
        <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-sm mt-2`}>Don't have an account <Link to={'/signup'} className="text-base text-[#3E5FB5] font-semibold cursor-pointer">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LogIn;