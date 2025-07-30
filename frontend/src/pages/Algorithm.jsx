/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from ".."
import ProblemsList from "../ui/ProblemsList";
import { useNavigate } from "react-router-dom";
// import problems from '../../apis/dummy'

const Algorithm = () => {

  const navigate = useNavigate();

  const [topicOpen, setTopicOpen] = useState("");

  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("problems5).json")
      .then(res => res.json())
      .then(data => setData(data));
  })

  // Object.entries(problems.problems).map((curr) => {
  //   console.log(curr);
  // })

  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full`}>
      <div>
        <button onClick={() => { navigate(-1) }} className={`border-[.25px] ${theme === "dark" ? "border-gray-600 text-gray-300" : "border-gray-400 text-gray-700"} px-4 py-1 rounded-lg`}><i className="fa-solid fa-arrow-left-long mr-3"></i>Back</button>
      </div>
      <div className={`mt-12 w-full md:w-[80%]`}>
        <h1 className={`text-2xl md:text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Algorithm Pattern Sheet</h1>
        <p className={`mt-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>Master problem-solving techniques with the AlgoSphare Algorithm Pattern Sheet. Learn and apply powerful patterns like sliding window, two pointers, backtracking, binary search, and more. This sheet helps you recognize common algorithmic templates, enabling you to solve a wide range of coding problems efficiently and confidently in any scenario!</p>
      </div>

      <div className={`mt-12`}>
        <h3 className={`text-xl md:text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Key Features:</h3>
        <ul className={`list-disc mt-4 ml-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"} flex flex-col gap-2`}>
          <li>Categorized algorithm problems from basic to advanced to build strong foundations.</li>
          <li>Includes core concepts like sorting, searching, recursion, backtracking, and dynamic programming.</li>
          <li>Interactive visual explanations for complex algorithms.</li>
          <li>Multiple code solutions in C++, Java, Python, and JavaScript to suit your learning style.</li>
          <li>Real-world problem mapping to understand where each algorithm is used.</li>
          <li>Challenge problems to test your depth of understanding after each topic.</li>
          <li>Algorithm complexity analysis for time and space to build efficiency intuition.</li>
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

export default Algorithm
