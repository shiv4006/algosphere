/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from "react"
import { ThemeContext } from ".."
import ProblemsList from "../ui/ProblemsList";
import { useNavigate } from "react-router-dom";
// import problems from '../../apis/dummy'
import { problems } from "../../public/problems5-copy.jsx";

const Dsa = () => {

  const navigate = useNavigate();

  const [topicOpen, setTopicOpen] = useState("");

  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState(problems);

  // Object.entries(problems.problems).map((curr) => {
  //   console.log(curr);
  // })

  // useEffect(() => {
  //   setData(problems);
  // }, [])

  // data.map(item => {
  //   console.log(item);
  // })
  // console.log(data);
  
  
  return (
    <div className={`w-full mt-28 px-4 sm:px-16 lg:px-32 `}>
      <div>
        <button onClick={() => {navigate(-1)}} className={`border-[.25px] ${theme === "dark" ? "border-gray-600 text-gray-300" : "border-gray-400 text-gray-700"} px-4 py-1 rounded-lg`}><i className="fa-solid fa-arrow-left-long mr-3"></i>Back</button>
      </div>

      <div className={`mt-12 w-full md:w-[80%]`}>
        <h1 className={`text-2xl md:text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Complete DSA Sheet</h1>
        <p className={`mt-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>The AlgoSphare Complete Sheet is a free, structured course that takes you through Data Structures and Algorithms from A to Z. With high-quality content designed for easy learning, you'll build a solid foundation in DSA. Join our growing community of learners and get the support you need to succeed!</p>
      </div>

      <div className={`mt-12`}>
        <h3 className={`text-xl md:text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>Key Features:</h3>
        <ul className={`list-disc mt-4 ml-4 text-sm md:text-base font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"} flex flex-col gap-2`}>
          <li>Comprehensive DSA coverage with 450+ modules to master every aspect of problem-solving.</li>
          <li>Step-by-step video explanations, from brute-force to optimized solutions.</li>
          <li>Easy-to-follow articles and notes for quick and effective revision.</li>
          <li>Code implementations in C++, Java, Python, and JavaScript for diverse learning.</li>
          <li>Company-specific tags to help target problems relevant to top tech firms.</li>
          <li>Personalizable notes section to track your progress and key takeaways.</li>
          <li>Unmatched module count—no other course offers this depth of content.</li>
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

export default Dsa
