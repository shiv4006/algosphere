/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from ".."
import ProblemsList from "../ui/ProblemsList";
import { useNavigate } from "react-router-dom";
// import problems from '../../apis/dummy'

const Cp = () => {

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
        <h1 className={`text-2xl md:text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Competitive Programming Sheet</h1>
        <p className={`mt-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>Take your coding skills to the next level with the AlgoSphare Competitive Programming Sheet. Curated for speed and accuracy, this sheet features challenging problems that sharpen your logic, implementation, and optimization abilities. Ideal for Codeforces, CodeChef, AtCoder, and other contests — boost your rankings and compete like a pro!</p>
      </div>

      <div className={`mt-12`}>
        <h3 className={`text-xl md:text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Key Features:</h3>
        <ul className={`list-disc mt-4 ml-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"} flex flex-col gap-2`}>
          <li>Handpicked problems from Codeforces, AtCoder, and CodeChef contests.</li>
          <li>Focus on speed, logic, and optimization under time constraints.</li>
          <li>Includes advanced topics like segment trees, BIT, DSU, and game theory.</li>
          <li>Editorials and hints to guide you without spoiling the solution completely.</li>
          <li>Difficulty-wise categorization to improve progressively.</li>
          <li>Practice tracker to monitor time spent and problem attempts.</li>
          <li>Tips and tricks section to boost performance in live contests.</li>
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

export default Cp
