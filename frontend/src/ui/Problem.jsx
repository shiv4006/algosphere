/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router"; // Keep if used, otherwise remove. Currently wraps a <td> which is unusual.
import { FaEdit } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ThemeContext } from ".."; // Assuming this path is correct
import React, { useContext, useState } from "react"; // Added useState
import { useDispatch, useSelector } from "react-redux";
import { setCompletedList, setRevisedList } from "../store/problemsSlice"; // Updated import
import isEqual from 'lodash.isequal';
import { markProblemComplete, markProblemRevised } from "../apis/api";

const Problem = ({ question }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Ensure completedList has a fallback to an empty array if it's undefined
  const completedListFromState = useSelector((state) => state.problems.completedList);
  const completedList = Array.isArray(completedListFromState) ? completedListFromState : [];

  const revisedListFromState = useSelector((state) => state.problems.revisedList);
  const revisedList = Array.isArray(revisedListFromState) ? revisedListFromState : [];

  const { theme } = useContext(ThemeContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const problemId = question.id;
  const title = question.title;
  const link = question.link;
  const level = question.level;
  const topic = question.topic;
  const description = question.description;

  // console.log(level, topic);
  // console.log(question);

  const handleMarkComplete = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      problemId: problemId,
      problemLevel: level,
      problemTopic: topic,
      problemTitle: title,
    }

    try {
      const response = await markProblemComplete(payload);
      console.log("Response from markProblemComplete:", response);
      if (response.status === 200) {
        dispatch(setCompletedList(response.data.completedProblems));
      } else {
        setSubmitError(response?.data?.message || 'An unexpected error occurred');
      }
    } catch (err) {
      console.error(err);
      setSubmitError(err.message || 'Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRevisionComplete = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      problemId: problemId
    }

    try {
      const response = await markProblemRevised(payload);
      if(response.status === 200) {
        dispatch(setRevisedList(response.data.revisedProblems));
      } else {
        setSubmitError(response?.data?.message || 'An unexpected error occurred');
      }
    } catch (error) {
      console.error("Error marking problem complete:", error);
      setSubmitError(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const handleProblemSolve = (problemId) => {
    console.log(problemId, title, link, level, topic  );
    navigate(`/editor`, {
      state: {
        problemId: problemId,
        title: title,
        link: link,
        level: level,
        topic: topic,
        description: description,
      },
    });
  }


  const isCompleted = completedList.includes(problemId);
  const isRevised = revisedList.includes(problemId);

  return (
    <tr className={`w-full my-2 py-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
      <td className="text-center px-2 py-3">
        <input
          type="checkbox"
          checked={isCompleted} // Correctly bound
          onChange={handleMarkComplete} // No need for arrow function if handleMarkComplete takes no args
          disabled={isSubmitting} // Use local loading state
          className="w-5 h-5 cursor-pointer accent-blue-500"
        />
      </td>
      {/* The <Link> wrapping a <td> is unusual. Consider <td className="py-3"><Link to={...}>{title}</Link></td> if title should be a link */}
      <td className="py-3"><button onClick={() => handleProblemSolve(problemId)}>{title}</button></td>
      <td className="py-3 px-1 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-arrow-up-right-from-square cursor-pointer"></i>
        </a>
      </td>
      <td className="py-3 px-1 text-center">
        <FaEdit className="text-gray-400 cursor-pointer mx-auto" />
      </td>
      <td className="py-3 px-1 text-center">
        <button onClick={handleRevisionComplete} disabled={isSubmitting} >
          {isRevised ? (
            <AiFillStar className="text-yellow-400 cursor-pointer mx-auto" />
          ) : (
            <AiOutlineStar className="text-gray-400 cursor-pointer mx-auto" />
          )}
        </button>
      </td>
      {submitError && (
        <tr>
          <td colSpan="5" className="text-red-500 text-center py-1">{submitError}</td>
        </tr>
      )}
    </tr>
  );
};

export default React.memo(Problem);