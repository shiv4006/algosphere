import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { ThemeContext } from '..';
import { useContext, useEffect, useRef, useState } from 'react';
import { sampleCodes } from '../assets/data';
import { useLocation } from 'react-router-dom';
import { problems } from '../../public/problems5-copy';

function findContentComponentById(problemId) {
  // flatten all problems in all levels and find by id
  for (const ds of problems) {
    for (const level of Object.values(ds.problems)) {
      for (const problem of level) {
        if (problem.id === problemId) return problem;
      }
    }
  }
  return null;
}

const CodeEditor = () => {
  const { theme } = useContext(ThemeContext);
  const [leftWidth, setLeftWidth] = useState(50);
  const isDragging = useRef(false);
  const location = useLocation();
  const { problemId, title, link, level, topic, description } = location.state || {};
  const editorRef = useRef();
  const [code, setCode] = useState(`// some comment`);
  const [language, setLanguage] = useState("cpp");

  const problem = findContentComponentById(problemId);
  const Content = problem?.Content;

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    if (sampleCodes[language]) {
      setCode(sampleCodes[language]);
    }
  }, [language]); // Correctly trigger when language changes

  const handleLanguageChange = (lang) => {
    setLanguage(lang.target.value);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = (e) => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const container = document.getElementById("resizable-container");
    if (!container) return;
    const containerWidth = container.offsetWidth;
    const containerStart = container.getBoundingClientRect().left;
    const newLeftWidth = ((e.clientX - containerStart) / containerWidth) * 100;
    if (newLeftWidth >= 20 && newLeftWidth <= 80) {
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <div
      id="resizable-container"
      // CHANGED: Use flex-col by default, switch to row on large screens. Add a gap for the mobile stacked view.
      className="mt-16 pt-1 px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row gap-4 lg:gap-1 items-center justify-between"
      // CHANGED: Pass the width state as a CSS variable for Tailwind to use responsively.
      style={{ '--left-width': `${leftWidth}%` }}
    >
      {/* Left Panel */}
      {/* CHANGED: Use w-full on mobile, and apply the variable width on large screens. */}
      {/* <div className={`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} rounded-lg`}>
        <h1 className="text-2xl lg:text-3xl font-bold mt-4 mb-4">{title}</h1>
        <p className="text-base lg:text-lg mb-8 text-gray-400">
          {description}
        </p>
      </div> */}

      {Content ? <Content theme={theme} /> : <p>No content available</p>}

      {/* Divider */}
      {/* CHANGED: Hide the divider on mobile (hidden) and show it as a block on large screens (lg:block) */}
      <div onMouseDown={handleMouseDown} className='hidden lg:block cursor-col-resize bg-gray-400 dark:bg-gray-600' style={{ width: "6px", height: "87.5vh", borderRadius: "12px" }}></div>

      {/* Right Panel */}
      {/* CHANGED: Full width on mobile, and calculate remaining width on large screens. */}
      <div className={`w-full lg:w-[calc(100%-var(--left-width)-6px)] h-[90vh] border border-gray-500 rounded-lg overflow-hidden flex flex-col`}>
        <div className="flex justify-between items-center px-2 py-1">
          <select onChange={(value) => handleLanguageChange(value)} name="" id="" className={`border outline-none rounded-md ${theme === "dark" ? "bg-zinc-800 border-gray-600 text-gray-200" : "bg-zinc-200 border-gray-400 text-gray-600"} p-1 text-[10px]`}>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="kotlin">Kotlin</option>
          </select>
          <div className='flex gap-3'>
            <button onClick={() => alert("Your code has been run successfully")} className={`py-1 px-4 rounded-lg text-sm font-bold border ${theme === "dark" ? "bg-green-800 border-gray-600 text-gray-200" : "bg-green-400 border-gray-400 text-gray-600"}`}>RUN</button>
            <button onClick={() => alert("Your code has been submitted successfully")} className={`py-1 px-4 rounded-lg text-sm font-bold border ${theme === "dark" ? "bg-green-800 border-gray-600 text-gray-200" : "bg-green-400 border-gray-400 text-gray-600"}`}>SUBMIT</button>
          </div>
        </div>
        <Editor
          height="100%"
          width="100%"
          language={language}
          value={code}
          theme={theme === "dark" ? "vs-dark" : "light"}
          options={{
            fontSize: 16, // Slightly smaller font for better mobile fit
            lineHeight: 1.5,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
          onMount={onMount}
        />
      </div>
    </div>
  );
}

export default CodeEditor;