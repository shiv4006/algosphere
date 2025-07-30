import { useContext } from "react"
import { DifficultyContext, ThemeContext } from ".."
import { useEffect } from "react";
import { useNavigate } from 'react-router'
import { useState } from "react";
import EditProfileForm from "../ui/EditProfile";
import { toast } from "react-toastify";
import { getUserProgress } from "../apis/api";

const Profile = () => {
  const navigate = useNavigate();

  const { easyRef, easyValueRef, mediumRef, mediumValueRef, hardRef, hardValueRef } = useContext(DifficultyContext);
  const { theme } = useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [topics, setTopics] = useState({});
  const [difficultyLevel, setDifficultyLevel] = useState({
    "easy": 0,
    "medium": 0,
    "hard": 0
  });

  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await getUserProgress();
        console.log(apiResponse);

        const data = apiResponse.data;
        console.log(data.completedProblemTopics);

        setTopics(data.completedProblemTopics || {});
        setUser({
          "name": data.userDetails.name,
          "email": data.userDetails.email,
          "location": data.userDetails.location,
          "college": data.userDetails.college,
          "linkedin": data.userDetails.linkedin,
          "github": data.userDetails.github,
          "leetcode": data.userDetails.leetcode,
        });
        setDifficultyLevel({
          "easy": data.completedProblemLevels.easy || 0,
          "medium": data.completedProblemLevels.medium || 0,
          "hard": data.completedProblemLevels.hard || 0
        });
        // console.log(data.userDetails);
      } catch (error) {
        console.error("Error fetching user progress:", error.message);
        navigate('/login', { replace: true });
      }
    }

    fetchData();
  }, []);

  // console.log(difficultyLevel);
  // console.log(user);


  const handleSave = async (formData) => {
    const res = await fetch("/api/users/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      toast.error("Failed to update profile. Please try again.");
      throw new Error("Failed to update profile");
    }

    toast.success("Profile updated successfully!");
    const updatedUser = await res.json();
    setUser((prev) => ({
      ...prev,
      location: updatedUser.user.location,
      college: updatedUser.user.college,
      linkedin: updatedUser.user.linkedin,
      github: updatedUser.user.github,
      leetcode: updatedUser.user.leetcode,
    }));
  };

  const capitalizeWords = (str) =>
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <>
      <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full flex gap-2 flex-col md:flex-row min-h-screen mb-12`}>
        <div className={`w-full md:w-72 lg:w-80 px-2 py-4 rounded-lg border ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"}`}>
          <div className="flex gap-4 items-center">
            {
              // <img src="" alt="" className="w-24 h-24 rounded-3xl" />
              <div className={`w-16 h-16 rounded-2xl flex justify-center items-center font-semibold border ${theme === "dark" ? "bg-zinc-800 border-gray-600 text-gray-200" : "bg-gray-300 border-gray-400 text-gray-600"}`}>
                <p className="text-3xl">{user?.name[0].toUpperCase()}</p>
              </div>
            }
            <div>
              <h3 className="text-lg">{user?.name || "Shivam Kumar"}</h3>
              <p className="text-sm font-light">{user?.email || "shiv40"}</p>
            </div>
          </div>

          <div className="mt-8 lg:px-2">
            <div className="">
              <p className="text-sm font-light"><i className={`fa-solid fa-location-dot mr-2`}></i>{user?.location || "location"}</p>
              <h4 className="mt-2 font-light"><i className="fa-solid fa-graduation-cap mr-2"></i>{user?.college || "college"}</h4>
              <div className={`flex gap-4 mt-6`}>
                {
                  user?.linkedin
                    ?
                    <a href={user?.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin text-4xl text-blue-600"></i>
                    </a>
                    :
                    <i className="fa-brands fa-linkedin text-4xl text-blue-600"></i>
                }
                {
                  user?.linkedin
                    ?
                    <a href={user?.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className={`fa-brands fa-square-github text-4xl ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}></i>
                    </a>
                    :
                    <i className={`fa-brands fa-square-github text-4xl ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}></i>
                }
                {
                  user?.linkedin
                    ?
                    <a href={"user?.linkedin"} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="" className="w-8 h-8 rounded-md bg-gray-800" />
                    </a>
                    :
                    <div className="flex justify-center items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="" className="w-8 h-8 rounded-md bg-gray-800" />
                    </div>
                }
              </div>
            </div>

            <button onClick={() => setEditProfile(true)} className={`w-full mt-8 py-2 rounded-xl bg-[#7D8EE4]`}>Edit Profile</button>
          </div>
        </div>

        {/* right side */}
        <div className={`px-2 py-4 rounded-lg border flex-1 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"}`}>
          <div>
            <h2 className="text-xl font-bold">Diffulty</h2>
            <div className={`mt-4 flex flex-col gap-4`}>
              <div>
                <h4>Easy</h4>
                <div className={`flex gap-4 items-center`}>
                  <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                    <div style={{ width: `${difficultyLevel.easy / 163 * 100}%` }} ref={easyRef} className={`w-[50%] h-2 bg-[#059212] rounded-lg`}></div>
                  </div>
                  <p ref={easyValueRef}>{difficultyLevel.easy}/163</p>
                </div>
              </div>

              <div>
                <h4>Medium</h4>
                <div className={`flex gap-4 items-center`}>
                  <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                    <div style={{ width: `${difficultyLevel.medium / 256 * 100}%` }} ref={mediumRef} className={`w-[50%] h-2 bg-[#FBA518] rounded-lg`}></div>
                  </div>
                  <p ref={mediumValueRef}>{difficultyLevel.medium}/256</p>
                </div>
              </div>

              <div>
                <h4>Hard</h4>
                <div className={`flex gap-4 items-center`}>
                  <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                    <div style={{ width: `${difficultyLevel.hard / 102 * 100}%` }} ref={hardRef} className={`w-[50%] h-2 bg-[#E52020] rounded-lg`}></div>
                  </div>
                  <p ref={hardValueRef}>{difficultyLevel.hard}/102</p>
                </div>
              </div>
            </div>
          </div>

          {/* topics */}
          <div className="mt-20">
            <h2 className="text-xl font-bold">Topics</h2>
            <ul className="flex flex-wrap gap-6 lg:gap-8 mt-8">
              {Object.entries(topics).map(([topic, count]) => (
                <li key={topic} className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between items-center w-fit gap-6`}>
                  <span>{capitalizeWords(topic)}</span>
                  <span><i className={`fa-solid fa-xmark ${theme === "dark" ? "text-blue-300" : "text-blue-800"} mr-1`}></i>{count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className={`mt-2 px-4 sm:px-16 lg:px-32 w-full`}>
        <div className={`w-full py-4 rounded-lg border ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"}`}>
        </div>
      </div> */}
      {editProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <EditProfileForm user={user} onSave={handleSave} onClose={() => setEditProfile(false)} />
        </div>
      )}
    </>
  )
}

export default Profile
