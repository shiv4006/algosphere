/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from ".."
import ProblemsList from "../ui/ProblemsList";
import { useNavigate } from "react-router-dom";
// import problems from '../../apis/dummy'

const Interview = () => {

  const navigate = useNavigate();

  const [topicOpen, setTopicOpen] = useState("");

  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("problems5).json")
      .then(res => res.json())
      .then(data => setData(data));
  })

  // console.log(data);

  // Object.entries(problems.problems).map((curr) => {
  //   console.log(curr);
  // })

  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full`}>
      <div>
        <button onClick={() => { navigate(-1) }} className={`border-[.25px] ${theme === "dark" ? "border-gray-600 text-gray-300" : "border-gray-400 text-gray-700"} px-4 py-1 rounded-lg`}><i className="fa-solid fa-arrow-left-long mr-3"></i>Back</button>
      </div>
      <div className={`mt-12 w-full md:w-[80%]`}>
        <h1 className={`text-2xl md:text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Interview Preparation Sheet</h1>
        <p className={`mt-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>Ace your tech interviews with the AlgoSphare Interview Sheet — a handpicked set of coding questions frequently asked by top tech companies. From arrays to dynamic programming, this sheet covers must-know topics with increasing difficulty levels. Practice confidently, strengthen your concepts, and get interview-ready with expert-backed solutions and explanations!</p>
      </div>

      <div className={`mt-12`}>
        <h3 className={`text-xl md:text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Key Features:</h3>
        <ul className={`list-disc mt-4 ml-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"} flex flex-col gap-2`}>
          <li>Focused on most-asked coding problems in FAANG and top product companies.</li>
          <li>Company-wise problem segmentation to help you prepare strategically.</li>
          <li>Covers all core data structures with real interview-level challenges.</li>
          <li>Includes behavioral and system design question guides.</li>
          <li>Each problem comes with approach discussion, optimized code, and mock interview notes.</li>
          <li>Track your solved status and revisit problems you got wrong.</li>
          <li>Designed for time-bound revision during last-minute prep.</li>
        </ul>
      </div>

      <ul className={`mt-16`}>
        {
          // Object.entries(problems.problems).map(problemSet => {
          //   return <ProblemsList key={problemSet[0]} id={problemSet[0]} topicOpen={topicOpen} setTopicOpen={setTopicOpen} problemSet={problemSet} />
          // })

          data.map((item) => {
            return <ProblemsList key={item.data_structure} id={item.data_structure} topicOpen={topicOpen} setTopicOpen={setTopicOpen} problemSet={item} />
          })
        }
      </ul>

    </div>
  )
}

export default Interview
