import { Link, useNavigate } from 'react-router';
import googleImg from '../assets/google.png';
import { useContext, useState } from 'react';
import { ThemeContext } from '..';
import { signUp } from '../apis/api';

const SignUp = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setInputData(prev => ({ ...prev, [field]: value }));
    setErrorMsg("");  // clear error on input change
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Frontend validation
    const { name, email, password, confirmPassword } = inputData;
    if (!name || !email || !password || !confirmPassword) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Password and Confirm Password must match.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const response = await signUp(inputData);
    console.log(response);

    if (response.status === 201) {
      // Registration successful, redirect to login
      localStorage.setItem('isLoggedIn', true);
      navigate("/login");
    } else if (response.status === 403) {
      setErrorMsg("Email already exists. Please use a different email.");
    } else {
      setErrorMsg("Registration failed. Please try again.");
    }
  }

  return (
    <div className={`mt-20 px-4 sm:px-16 lg:px-32 h-[89vh] w-full flex justify-center items-center ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <div className={`lg:w-[32rem] sm:w-[28rem] w-[20rem] ${theme === "dark" ? "bg-[#3C3C3C]" : "bg-[#C3C3C3]"} px-10 py-4 rounded-lg ${theme === "dark" ? "border-gray-600" : "border-gray-400"} border-[.5px] flex flex-col items-center`}>
        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Welcome to</p>
        <p className="text-3xl text-[#4E5FB5] font-bold mb-8">AlgoSphare</p>

        <form onSubmit={handleSignUp} className="flex flex-col gap-3 w-full">
          <input
            onChange={handleInputChange}
            value={inputData.name}
            type="text"
            name="name"
            placeholder="Enter Full Name"
            className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`}
          />
          <input
            onChange={handleInputChange}
            value={inputData.email}
            type="email"
            name="email"
            placeholder="Enter Email"
            className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`}
          />
          <input
            onChange={handleInputChange}
            value={inputData.password}
            type="password"
            name="password"
            placeholder="Enter Password"
            className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`}
          />
          <input
            onChange={handleInputChange}
            value={inputData.confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`}
          />
          <button
            disabled={loading}
            className={`w-full bg-[#7D8EE4] ${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold py-2 rounded-lg mt-4 flex justify-center items-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            type="submit"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {errorMsg && (
          <p className={`mt-3 text-center text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"}`}>
            {errorMsg}
          </p>
        )}

        <button className={`flex items-center gap-2 mt-6 ${theme === "dark" ? "text-gray-200 bg-zinc-900" : "text-gray-700 bg-zinc-100"} pr-2 text-xs rounded-md`}>
          <img src={googleImg} alt="Google Sign Up" className='w-[32px] bg-gray-300 rounded-md' />
          Sign up with Google
        </button>

        <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-sm mt-2`}>
          Have an account <Link to={'/login'} className="text-base text-[#3E5FB5] font-semibold cursor-pointer">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
