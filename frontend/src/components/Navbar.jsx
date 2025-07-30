import sunImg from '../assets/sun.svg'
import { Link, NavLink, useNavigate } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '..'
import { signOut } from '../store/authSlice'
import { logOut } from '../apis/api'
import { resetProblemsData } from '../store/problemsSlice'

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);
  const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState('home');

  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await logOut();
    console.log(response);
    if (response.status === 200) {
      console.log("Frontend: Logout successful from backend.", response.data.message);
      dispatch(signOut());
      dispatch(resetProblemsData())
      navigate("/login");
    } else {
      console.warn("Frontend: Logout API call returned status:", response.status, response.data);
    }
  }

  return (
    <>
      <div className={`w-full ${theme === "dark" ? "bg-[#3c3c3c] text-white" : "bg-[#c3c3c3] text-black"}  shadow-sm shadow-gray-500 px-8 sm:px-16 lg:px-32 py-2 flex justify-between items-center fixed z-10`}>
        <Link to={'/'}><h1 className="heading text-4xl md:text-5xl text-[#4E5FB5] cursor-pointer">A<span className="text-3xl md:text-4xl">lgoSphare</span></h1></Link>
        <div className="flex items-center gap-8">
          {
            theme === "dark" ?
              <img onClick={() => { setTheme("light"); localStorage.setItem("theme", "light"); }} src={sunImg} className="w-[32px] cursor-pointer" />
              :
              <i onClick={() => { setTheme("dark"); localStorage.setItem("theme", "dark"); }} className="fa-solid fa-moon text-3xl mr-1 cursor-pointer -rotate-[30deg]"></i>
          }
          <div onClick={() => setOpenMenu(prev => !prev)}>
            {
              openMenu ?
                <i className="fa-solid fa-xmark text-3xl cursor-pointer"></i>
                :
                <i className="fa-solid fa-bars text-3xl cursor-pointer"></i>
            }
          </div>
        </div>
      </div>

      {
        openMenu && <div className={`z-[10] w-[312px] h-[92.5vh] md:h-[91.5vh] fixed top-14 md:top-16 right-0 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} border-l-2`}>
          <div className="h-full py-8 flex flex-col justify-between">
            <div className={`flex flex-col gap-4 pl-4 ${theme === "dark" ? "text-[#C3C3C3]" : "text-[#3C3C3C]"} font-semibold`}>
              <Link to={'/'} onClick={() => setActive("home")} className={active === "home" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Home</p></Link>
              <Link to={'/dsa'} onClick={() => setActive("dsa")} className={active === "dsa" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Complete DSA Sheet</p></Link>
              <Link to={'/interview'} onClick={() => setActive("interview")} className={active === "interview" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Interview Preparation Sheet</p></Link>
              <Link to={'/algorithm'} onClick={() => setActive("algorithm")} className={active === "algorithm" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Algorithm Pattern Sheet</p></Link>
              <Link to={'/cp'} onClick={() => setActive("cp")} className={active === "cp" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Competitive Programming Sheet</p></Link>
              <Link to={'/notes'} onClick={() => setActive("notes")} className={active === "notes" ? 'text-[#4E5FB5] font-bold underline' : ""}><p>Saved Notes</p></Link>
            </div>
            <div className="flex justify-center gap-16">
              {isAuthenticated && <Link to={'/profile'}><button className={`${theme === "dark" ? "text-white" : "text-black"} font-semibold text-lg hover:underline`}>Profile</button></Link>}
              {!isAuthenticated && <Link to={'/login'}><button className={`bg-[#4E5FB5] ${theme === "dark" ? "text-black" : "text-white"} py-1 px-4 rounded-lg font-medium text-lg`}>LogIn</button></Link>}
              {isAuthenticated && <button onClick={(e) => handleLogout(e)} className={`bg-[#cf4757] ${theme === "dark" ? "text-black" : "text-white"} py-1 px-4 rounded-lg font-medium text-lg`}>Logout</button>}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar
