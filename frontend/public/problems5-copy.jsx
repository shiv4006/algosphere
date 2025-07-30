export const problems =
  [
    {
      "data_structure": "array",
      "problems": {
        "easy": [
          {
            "topic": "array",
            "level": "easy",
            "id": "pL1qA9sX",
            "title": "Largest Element in an Array",
            "description": "Given an array, we have to find the largest element in the array.",
            "link": "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array",
            Content: ({ theme }) => (
              <div
                className={`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg ${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"
                  }`}
              >
                <div
                  className={`max-w-2xl mx-auto p-6 shadow rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                >
                  <h1
                    className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-blue-300" : "text-blue-700"
                      }`}
                  >
                    Largest Element in an Array
                  </h1>

                  <section className="mb-4">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Description
                    </h2>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      Given an array, we have to find the largest element in the array.
                    </p>
                  </section>

                  <section className="mb-4">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Example Test Cases
                    </h2>
                    <div
                      className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                        } p-2 rounded mt-1`}
                    >
                      <span className="block font-mono text-pink-600">
                        Input: [10, 324, 45, 90, 9808]
                      </span>
                      <span className="block font-mono text-green-600">Output: 9808</span>
                    </div>
                  </section>

                  <section className="mb-4">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Constraints
                    </h2>
                    <ul
                      className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"
                        } list-disc list-inside`}
                    >
                      <li>Array size is at least 1.</li>
                      <li>Each element is an integer.</li>
                    </ul>
                  </section>
                </div>
              </div>
            )
          },
          {
            "topic": "array",
            "level": "easy",
            "id": "kO5fB3rY",
            "title": "Second Largest Element in an Array without sorting",
            "description": " Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.",
            "link": "https://www.geeksforgeeks.org/problems/second-largest3735/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=second-largest",
            Content: ({ theme }) => (<div
              className={`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg ${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"
                }`}
            >
              <div
                className={`max-w-2xl mx-auto p-6 shadow rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
              >
                <h1
                  className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-blue-300" : "text-blue-700"
                    }`}
                >
                  Second Largest Element in an Array without sorting
                </h1>

                <section className="mb-6">
                  <h2
                    className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                  >
                    Description
                  </h2>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Given an array, find the second smallest and second largest element in
                    the array. Print ‘-1’ if either of them doesn’t exist.
                  </p>
                </section>

                <section className="mb-6">
                  <h2
                    className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                  >
                    Example Test Case
                  </h2>
                  <div
                    className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                      } p-3 rounded`}
                  >
                    <p>
                      <span className="font-mono text-pink-600">Input:</span> [2, 3, 1, 5,
                      4]
                    </p>
                    <p className="whitespace-pre-line">
                      <span className="font-mono text-green-600">
                        Output: Second Smallest = 2, Second Largest = 4
                      </span>
                    </p>
                  </div>
                </section>

                <section>
                  <h2
                    className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                  >
                    Constraints
                  </h2>
                  <ul
                    className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      } list-disc list-inside`}
                  >
                    <li>Array size is at least 2.</li>
                    <li>Elements are integers.</li>
                  </ul>
                </section>
              </div>
            </div>)
          },
          {
            "topic": "array",
            "level": "easy",
            "id": "jF8zX2wE",
            "title": "Check if the array is sorted",
            "description": " Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.",
            "link": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/#:~:text=Input%3A%20nums%20%3D%20%5B2%2C,no%20rotation)%20to%20make%20nums.",
            Content: ({ theme }) => (
              <div
                className={`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg ${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"
                  }`}
              >
                <div
                  className={`max-w-2xl mx-auto p-6 shadow rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                >
                  <h1
                    className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-blue-300" : "text-blue-700"
                      }`}
                  >
                    Check if the array is sorted
                  </h1>

                  <section className="mb-6">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Description
                    </h2>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      Given an array of size <code>n</code>, write a program to check if the
                      given array is sorted in (ascending / Increasing / Non-decreasing)
                      order or not. If the array is sorted then return <code>True</code>,
                      else return <code>False</code>.
                    </p>
                  </section>

                  <section className="mb-6">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Example Test Cases
                    </h2>
                    <div
                      className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                        } p-3 rounded`}
                    >
                      <p>
                        <span className="font-mono text-pink-600">Input:</span> nums = [2, 1,
                        3, 4]
                      </p>
                      <p>
                        <span className="font-mono text-green-600">Output:</span> false
                      </p>
                    </div>
                    <div
                      className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                        } p-3 rounded mt-4`}
                    >
                      <p>
                        <span className="font-mono text-pink-600">Input:</span> nums = [1, 2,
                        2, 3]
                      </p>
                      <p>
                        <span className="font-mono text-green-600">Output:</span> true
                      </p>
                    </div>
                  </section>

                  <section className="mb-6">
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Explanation
                    </h2>
                    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      - For the first example (<code>[2, 1, 3, 4]</code>): The array is not
                      sorted in non-decreasing order because the second element (1) is less
                      than the first element (2), so the output is <code>false</code>.<br />
                      <br />
                      - For the second example (<code>[1, 2, 2, 3]</code>): The array is sorted
                      in non-decreasing order since every element is greater than or equal to
                      the previous, so the output is <code>true</code>.
                    </p>
                  </section>

                  <section>
                    <h2
                      className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-800"
                        }`}
                    >
                      Constraints
                    </h2>
                    <ul
                      className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"
                        } list-disc list-inside`}
                    >
                      <li>1 ≤ nums.length ≤ 10<sup>5</sup></li>
                      <li>-10<sup>6</sup> ≤ nums[i] ≤ 10<sup>6</sup></li>
                    </ul>
                  </section>
                </div>
              </div>
            )
          },
          {
            "topic": "array",
            "level": "easy",
            "id": "gH4nL7pQ",
            "title": "Remove duplicates from Sorted array",
            "description": "Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.",
            "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",
            content: `
<div
  className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg
    \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}
  \`}
>
  <div
    className={\`
      max-w-2xl mx-auto p-6 shadow rounded-lg
      \${theme === "dark" ? "bg-gray-800" : "bg-white"}
    \`}
  >
    <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
      Remove duplicates from Sorted array
    </h1>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Description
      </h2>
      <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
        Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
      </p>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Example Test Cases
      </h2>

      <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
        <span className="block"><span className="font-mono text-pink-600">Input:</span> nums = [1,1,2]</span>
        <span className="block"><span className="font-mono text-green-600">Output:</span> 2, nums = [1,2,_]</span>
      </div>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Constraints
      </h2>
      <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
        <li>1 ≤ nums.length ≤ 3 * 10^4</li>
        <li>-10^4 ≤ nums[i] ≤ 10^4</li>
        <li>nums is sorted in non-decreasing order.</li>
      </ul>
    </section>

    <section>
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Follow Up
      </h2>
      <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
        Could you come up with a O(1) extra memory solution?
      </p>
    </section>
  </div>
</div>
`

          },
          {
            "topic": "array",
            "level": "easy",
            "id": "zX9vC6bN",
            "title": "Left Rotate an array by one place",
            "description": "Given an array of N integers, left rotate the array by one place.",
            "link": "https://leetcode.com/problems/rotate-array/description/",
            content: `
<div
  className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg
    \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}
  \`}
>
  <div
    className={\`
      max-w-2xl mx-auto p-6 shadow rounded-lg
      \${theme === "dark" ? "bg-gray-800" : "bg-white"}
    \`}
  >
    <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
      Left Rotate an array by one place
    </h1>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Description
      </h2>
      <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
        Given an array of N integers, left rotate the array by one place.
      </p>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Example Test Cases
      </h2>

      <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
        <span className="block"><span className="font-mono text-pink-600">Input:</span> nums = [1, 2, 3, 4, 5]</span>
        <span className="block"><span className="font-mono text-green-600">Output:</span> [2, 3, 4, 5, 1]</span>
      </div>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Constraints
      </h2>
      <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
        <li>1 ≤ N ≤ 10^5</li>
        <li>-10^6 ≤ nums[i] ≤ 10^6</li>
      </ul>
    </section>
  </div>
</div>
`

          },
          {
            "topic": "array",
            "level": "easy",
            "id": "aY2wE5rT",
            "title": "Left rotate an array by D places",
            "description": "Given an array of integers, rotating array of elements by k elements either left or right.",
            "link": "https://leetcode.com/problems/rotate-array/description/",
            content: `
<div
  className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg
    \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}
  \`}
>
  <div
    className={\`
      max-w-2xl mx-auto p-6 shadow rounded-lg
      \${theme === "dark" ? "bg-gray-800" : "bg-white"}
    \`}
  >
    <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
      Left rotate an array by D places
    </h1>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Description
      </h2>
      <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
        Given an array of integers, rotating array of elements by k elements either left or right.
      </p>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Example Test Cases
      </h2>

      <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
        <span className="block"><span className="font-mono text-pink-600">Input:</span> nums = [1, 2, 3, 4, 5], k = 2</span>
        <span className="block"><span className="font-mono text-green-600">Output:</span> [3, 4, 5, 1, 2]</span>
      </div>
    </section>

    <section className="mb-4">
      <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>
        Constraints
      </h2>
      <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
        <li>1 ≤ nums.length ≤ 10^5</li>
        <li>0 ≤ k < nums.length</li>
        <li>-10^6 ≤ nums[i] ≤ 10^6</li>
      </ul>
    </section>
  </div>
</div>
`

          },
          // 1. Move Zeros to end
          {
            topic: "array",
            level: "easy",
            id: "qP7lO1kM",
            title: "Move Zeros to end",
            description: " You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order",
            link: "https://leetcode.com/problems/move-zeroes/description/",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Move Zeroes to end
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.<br />
            <span className="font-semibold">Do this in-place without making a copy of the array.</span>
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block"><span className="font-mono text-pink-600">Input:</span> nums = [0,1,0,3,12]</span>
            <span className="block"><span className="font-mono text-green-600">Output:</span> [1,3,12,0,0]</span>
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block"><span className="font-mono text-pink-600">Input:</span> nums = [0]</span>
            <span className="block"><span className="font-mono text-green-600">Output:</span> [0]</span>
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ nums.length ≤ 10<sup>4</sup></li>
            <li>-2<sup>31</sup> ≤ nums[i] ≤ 2<sup>31</sup> - 1</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 2. Linear Search
          {
            topic: "array",
            level: "easy",
            id: "mK0jF4sD",
            title: "Linear Search",
            description: " Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.",
            link: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=who-will-win",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>Linear Search</h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>Given an array and an element <code>num</code>, the task is to find if <code>num</code> is present in the given array or not.<br />If present, print the index of the element; otherwise, print -1.</p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Case</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block"><span className="font-mono text-pink-600">Input:</span> arr = [1, 2, 3, 4, 5], num = 3</span>
            <span className="block"><span className="font-mono text-green-600">Output:</span> 2</span>
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block"><span className="font-mono text-pink-600">Input:</span> arr = [1, 2, 3, 4, 5], num = 6</span>
            <span className="block"><span className="font-mono text-green-600">Output:</span> -1</span>
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ arr.length ≤ 10<sup>5</sup></li>
            <li>arr[i] and num are integers</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 3. Find the Union
          {
            topic: "array",
            level: "easy",
            id: "eR5tY8uI",
            title: "Find the Union",
            description: " Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.",
            link: "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=union-of-two-sorted-arrays",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Find the Union
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given two sorted arrays <code>arr1</code> and <code>arr2</code>, return the union of both arrays in sorted order. The union contains all distinct elements present in either array.
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> arr1 = [1, 1, 2, 2, 2, 4], arr2 = [2, 2, 4, 4]
            <br />
            <span className="block font-mono text-green-600">Output:</span> [1, 2, 4]
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> arr1 = [3, 5, 10, 10, 10, 15, 15, 20], arr2 = [5, 10, 10, 15, 30]
            <br />
            <span className="block font-mono text-green-600">Output:</span> [3, 5, 10, 15, 20, 30]
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ arr1.length, arr2.length ≤ 10<sup>6</sup></li>
            <li>Each element is an integer in sorted order</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 4. Find missing number in an array
          {
            topic: "array",
            level: "easy",
            id: "iO3pA6sZ",
            title: "Find missing number in an array",
            description: " Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.",
            link: "https://leetcode.com/problems/missing-number/description/",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Find missing number in an array
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given an array <code>nums</code> containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> nums = [3,0,1]
            <br /><span className="block font-mono text-green-600">Output:</span> 2
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> nums = [0,1]
            <br /><span className="block font-mono text-green-600">Output:</span> 2
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>n == nums.length</li>
            <li>1 ≤ n ≤ 10<sup>4</sup></li>
            <li>0 ≤ nums[i] ≤ n</li>
            <li>All the numbers of nums are unique.</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 5. Maximum Consecutive Ones
          {
            topic: "array",
            level: "easy",
            id: "uI7oP1qL",
            title: "Maximum Consecutive Ones",
            description: " Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.",
            link: "https://leetcode.com/problems/max-consecutive-ones/description/",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Maximum Consecutive Ones
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given a binary array <code>nums</code>, return the maximum number of consecutive 1's in the array.
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> nums = [1,1,0,1,1,1]
            <br /><span className="block font-mono text-green-600">Output:</span> 3
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ nums.length ≤ 10<sup>5</sup></li>
            <li>nums[i] is either 0 or 1</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 6. Find the number that appears once, and other numbers twice
          {
            topic: "array",
            level: "easy",
            id: "sD4fG7hJ",
            title: "Find the number that appears once, and other numbers twice.",
            description: "Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.",
            link: "https://leetcode.com/problems/single-number/description/",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Find the number that appears once, and other numbers twice.
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one.<br />
            <span className="font-semibold">You must implement a solution with linear runtime complexity and use only constant extra space.</span>
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> nums = [2,2,1]
            <br /><span className="block font-mono text-green-600">Output:</span> 1
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> nums = [4,1,2,1,2]
            <br /><span className="block font-mono text-green-600">Output:</span> 4
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ nums.length ≤ 3 × 10<sup>4</sup></li>
            <li>-3 × 10<sup>4</sup> ≤ nums[i] ≤ 3 × 10<sup>4</sup></li>
            <li>Each element in the array appears twice except for one element which appears only once.</li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 7. Longest subarray with given sum K (positives)
          {
            topic: "array",
            level: "easy",
            id: "xZ1vC9bN",
            title: "Longest subarray with given sum K(positives)",
            description: "Given an array and a sum k, we need to print the length of the longest subarray that sums to k.",
            link: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=longest-sub-array-with-sum-k",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Longest subarray with given sum K (positives)
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Given an array <code>arr[]</code> of size <code>n</code> containing integers, the task is to find the length of the longest subarray having sum equal to the given value <code>k</code>.
            If there is no subarray with sum equal to <code>k</code>, return 0.
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Cases</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> arr = [10, 5, 2, 7, 1, 9], k = 15
            <br /><span className="block font-mono text-green-600">Output:</span> 4
          </div>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> arr = [-5, 8, -14, 2, 4, 12], k = -5
            <br /><span className="block font-mono text-green-600">Output:</span> 5
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ n ≤ 10<sup>5</sup></li>
            <li>-10<sup>5</sup> ≤ arr[i], k ≤ 10<sup>5</sup></li>
          </ul>
        </section>
      </div>
    </div>
  `
          },

          // 8. Longest subarray with sum K (Positives + Negatives)
          {
            topic: "array",
            level: "easy",
            id: "vC5bN8xZ",
            title: "Longest subarray with sum K (Positives + Negatives)",
            description: "Given an array and a sum k, we need to print the length of the longest subarray that sums to k.",
            link: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=longest-sub-array-with-sum-k",
            content: `
    <div className={\`w-full lg:w-[var(--left-width)] p-2 h-[90vh] overflow-y-auto border border-gray-500 rounded-lg \${theme === "dark" ? "text-gray-300 bg-gray-900" : "text-gray-700 bg-gray-50"}\`}>
      <div className={\`max-w-2xl mx-auto p-6 shadow rounded-lg \${theme === "dark" ? "bg-gray-800" : "bg-white"}\`}>
        <h1 className={\`text-2xl font-bold mb-4 \${theme === "dark" ? "text-blue-300" : "text-blue-700"}\`}>
          Longest subarray with sum K (Positives + Negatives)
        </h1>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Description</h2>
          <p className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"}\`}>
            Same as above: given an array and a sum <code>k</code>, print the length of the longest subarray that sums to <code>k</code>. Subarrays may contain positive and negative numbers.
          </p>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Example Test Case</h2>
          <div className={\`\${theme === "dark" ? "bg-gray-700" : "bg-gray-100"} p-2 rounded mt-1\`}>
            <span className="block font-mono text-pink-600">Input:</span> arr = [10, 5, 2, 7, 1, 9], k = 15
            <br /><span className="block font-mono text-green-600">Output:</span> 4
          </div>
        </section>
        <section className="mb-4">
          <h2 className={\`text-lg font-semibold mb-2 \${theme === "dark" ? "text-gray-200" : "text-gray-800"}\`}>Constraints</h2>
          <ul className={\`\${theme === "dark" ? "text-gray-300" : "text-gray-700"} list-disc list-inside\`}>
            <li>1 ≤ n ≤ 10<sup>5</sup></li>
            <li>-10<sup>5</sup> ≤ arr[i], k ≤ 10<sup>5</sup></li>
          </ul>
        </section>
      </div>
    </div>
  `
          }
        ],
        "medium": [
          {
            "topic": "array",
            "level": "medium",
            "id": "bN8xZ1vC",
            "title": "2Sum Problem",
            "description": "Given an array of integers arr[] and an integer target.",
            "link": "https://leetcode.com/problems/two-sum/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "tY2wE5rA",
            "title": "Sort an array of 0's 1's and 2's",
            "description": "Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)",
            "link": "https://leetcode.com/problems/sort-colors/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "kM0jF4sD",
            "title": "Majority Element (>n/2 times)",
            "description": "Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.",
            "link": "https://leetcode.com/problems/majority-element/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "pQ7lO1kM",
            "title": "Kadane's Algorithm, maximum subarray sum",
            "description": "Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.",
            "link": "https://leetcode.com/problems/maximum-subarray/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "jF8zX2wE",
            "title": "Stock Buy and Sell",
            "description": "You are given an array of prices where prices[i] is the price of a given stock on an ith day.",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "gH4nL7pQ",
            "title": "Rearrange the array in alternating positive and negative items",
            "description": "There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.",
            "link": "https://leetcode.com/problems/rearrange-array-elements-by-sign/description/"
          },
          {
            "topic": "array",
            "level": "medium",
            "id": "zX9vC6bN",
            "title": "Next Permutation",
            "description": " Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.",
            "link": "https://leetcode.com/problems/next-permutation/description/"
          }
        ],
        "hard": [
          {
            "topic": "array",
            "level": "hard",
            "id": "eR5tY8uI",
            "title": "Pascal's Triangle",
            "description": "ven row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.",
            "link": "https://leetcode.com/problems/pascals-triangle/description/"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "iO3pA6sZ",
            "title": "Majority Element (n/3 times)",
            "description": "Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.",
            "link": "https://leetcode.com/problems/majority-element-ii/description/"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "uI7oP1qL",
            "title": "3-Sum Problem",
            "description": " Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.",
            "link": "https://leetcode.com/problems/3sum/description/"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "sD4fG7hJ",
            "title": "4-Sum Problem",
            "description": "Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.",
            "link": "https://leetcode.com/problems/4sum/"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "xZ1vC9bN",
            "title": "Largest Subarray with 0 Sum",
            "description": "Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.",
            "link": "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1?category%5B%5D=Hash&company%5B%5D=Amazon&page=1&query=category%5B%5DHashcompany%5B%5DAmazonpage1company%5B%5DAmazoncategory%5B%5DHash&utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-subarray-with-0-sum"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "vC5bN8xZ",
            "title": "Count Inversions",
            "description": " Given an array of N integers, count the inversion of the array (using merge-sort).",
            "link": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=inversion-of-array"
          },
          {
            "topic": "array",
            "level": "hard",
            "id": "bN8xZ1vC",
            "title": "Reverse Pairs",
            "description": " Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].",
            "link": "https://leetcode.com/problems/reverse-pairs/description/"
          }
        ]
      }
    },
    {
      "data_structure": "string",
      "problems": {
        "easy": [
          {
            "topic": "string",
            "level": "easy",
            "id": "tY2wE5rA",
            "title": "Remove outermost Paranthesis",
            "description": "Remove outermost Paranthesis.",
            "link": "https://leetcode.com/problems/remove-outermost-parentheses/description/"
          },
          {
            "topic": "string",
            "level": "easy",
            "id": "kM0jF4sD",
            "title": "Reverse Words in a String",
            "description": "Given a string s, reverse the words of the string.",
            "link": "https://leetcode.com/problems/reverse-words-in-a-string/description/"
          },
          {
            "topic": "string",
            "level": "easy",
            "id": "pQ7lO1kM",
            "title": "Longest Common Prefix",
            "description": "Longest Common Prefix.",
            "link": "https://leetcode.com/problems/longest-common-prefix/description/"
          },
          {
            "topic": "string",
            "level": "easy",
            "id": "jF8zX2wE",
            "title": "Check if two Strings are anagrams of each other",
            "description": "Given two strings, check if two strings are anagrams of each other or not..",
            "link": "https://leetcode.com/problems/valid-anagram/description/"
          }
        ],
        "medium": [
          {
            "topic": "string",
            "level": "medium",
            "id": "gH4nL7pQ",
            "title": "Implement Atoi",
            "description": "Implement Atoi.",
            "link": "https://leetcode.com/problems/string-to-integer-atoi/description/"
          },
          {
            "topic": "string",
            "level": "medium",
            "id": "zX9vC6bN",
            "title": "Count Number of Substrings",
            "description": "Count Number of Substrings.",
            "link": "https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=count-number-of-substrings"
          },
          {
            "topic": "string",
            "level": "medium",
            "id": "eR5tY8uI",
            "title": "Sum of Beauty of all substring",
            "description": "Sum of Beauty of all substring.",
            "link": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/"
          }
        ],
        "hard": [
          {
            "topic": "string",
            "level": "hard",
            "id": "iO3pA6sZ",
            "title": "Longest Palindromic Substring[Do it without DP]",
            "description": "Find the smallest substring containing all characters of another string.",
            "link": "https://example.com/min-window"
          }
        ]
      }
    },
    {
      "data_structure": "linked List",
      "problems": {
        "easy": [
          {
            "topic": "linked List",
            "level": "easy",
            "id": "uI7oP1qL",
            "title": "Inserting a node in LinkedList",
            "description": " Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.",
            "link": "https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=linked-list-insertion"
          },
          {
            "topic": "linked List",
            "level": "easy",
            "id": "sD4fG7hJ",
            "title": "Deleting a node in LinkedList",
            "description": "Given a linked list, delete the tail of the linked list and print the updated linked list.",
            "link": "https://leetcode.com/problems/delete-node-in-a-linked-list/description/"
          },
          {
            "topic": "linked List",
            "level": "easy",
            "id": "xZ1vC9bN",
            "title": "Find the length of the linkedlist [learn traversal]",
            "description": "Given the head of a linked list, print the length of the linked list.",
            "link": "https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=count-nodes-of-linked-list"
          },
          {
            "topic": "linked List",
            "level": "easy",
            "id": "vC5bN8xZ",
            "title": "Insert a node in DLL",
            "description": "Given a doubly linked list, and a value ‘k’, insert a node having value ‘k’ at the end of the doubly linked list..",
            "link": "https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=insert-a-node-in-doubly-linked-list"
          },
          {
            "topic": "linked List",
            "level": "easy",
            "id": "bN8xZ1vC",
            "title": "Delete a node in DLL",
            "description": "Given a Doubly Linked List. Delete the last of a Doubly Linked List..",
            "link": "https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=delete-node-in-doubly-linked-list"
          },
          {
            "topic": "linked List",
            "level": "easy",
            "id": "tY2wE5rA",
            "title": "Reverse a DLL",
            "description": " Given a doubly linked list of size ‘N’ consisting of positive integers, your task is to reverse it and return the head of the modified doubly linked list.",
            "link": "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=reverse-a-doubly-linked-list"
          }
        ],
        "medium": [
          {
            "topic": "linked List",
            "level": "medium",
            "id": "kM0jF4sD",
            "title": "Detect a loop in LL",
            "description": "Detect a loop in LL.",
            "link": "https://leetcode.com/problems/linked-list-cycle/description/"
          },
          {
            "topic": "linked List",
            "level": "medium",
            "id": "pQ7lO1kM",
            "title": "Find the starting point in LL",
            "description": "Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.",
            "link": "https://leetcode.com/problems/linked-list-cycle-ii/description/"
          },
          {
            "topic": "linked List",
            "level": "medium",
            "id": "jF8zX2wE",
            "title": "Check if LL is palindrome or not",
            "description": "Check if the given Linked List is Palindrome.",
            "link": "https://leetcode.com/problems/palindrome-linked-list/description/"
          },
          {
            "topic": "linked List",
            "level": "medium",
            "id": "gH4nL7pQ",
            "title": "Segrregate odd and even nodes in LL",
            "description": "Given a LinkedList of integers. Modify the LinkedList in such a way that in Modified LinkedList all the even numbers appear before all the odd numbers in LinkedList.",
            "link": "https://leetcode.com/problems/odd-even-linked-list/description/"
          },
          {
            "topic": "linked List",
            "level": "medium",
            "id": "zX9vC6bN",
            "title": "Delete the middle node of LL",
            "description": " Given the head of a linked list of integers, delete the middle node of the linked list and return the modified head. However, if the linked list has an even number of nodes, delete the second middle node.",
            "link": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/"
          }
        ],
        "hard": [
          {
            "topic": "linked List",
            "level": "hard",
            "id": "eR5tY8uI",
            "title": "Reverse LL in group of given size K",
            "description": "Given the head of a singly linked list of `n` nodes and an integer `k`, where k is less than or equal to `n`. Your task is to reverse the order of each group of `k` consecutive nodes, if `n` is not divisible by `k`, then the last group of remaining nodes should remain unchanged.",
            "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/description/"
          },
          {
            "topic": "linked List",
            "level": "hard",
            "id": "iO3pA6sZ",
            "title": "Flattening of LL",
            "description": "Your task is to flatten this linked list such that all nodes appear in a single layer or level in a 'sorted order'.",
            "link": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=flattening-a-linked-list"
          },
          {
            "topic": "linked List",
            "level": "hard",
            "id": "uI7oP1qL",
            "title": "Clone a Linked List with random and next pointer",
            "description": "Create a ‘deep copy’ of the given linked list and return it.",
            "link": "https://leetcode.com/problems/copy-list-with-random-pointer/description/"
          }
        ]
      }
    },
    {
      "data_structure": "recursion",
      "problems": {
        "easy": [
          {
            "topic": "recursion",
            "level": "easy",
            "id": "sD4fG7hJ",
            "title": "Count Good numbers",
            "description": " A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).",
            "link": "https://leetcode.com/problems/count-good-numbers/description/"
          },
          {
            "topic": "recursion",
            "level": "easy",
            "id": "xZ1vC9bN",
            "title": "Reverse a stack using recursion",
            "description": "You are given a stack St. You have to reverse the stack using recursion.",
            "link": "https://www.geeksforgeeks.org/problems/reverse-a-stack/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=reverse-a-stack"
          },
          {
            "topic": "recursion",
            "level": "easy",
            "id": "vC5bN8xZ",
            "title": "plement Pow(x,n)",
            "description": "Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).",
            "link": "https://leetcode.com/problems/powx-n/description/"
          }
        ],
        "medium": [
          {
            "topic": "recursion",
            "level": "medium",
            "id": "bN8xZ1vC",
            "title": "Generate Paranthesis",
            "description": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            "link": "https://leetcode.com/problems/generate-parentheses/description/"
          },
          {
            "topic": "recursion",
            "level": "medium",
            "id": "tY2wE5rA",
            "title": "Check if there exists a subsequence with sum K",
            "description": "You are given an array 'A' of 'N' integers. You have to return true if there exists a subset of elements of 'A' that sums up to 'K'. Otherwise, return false.",
            "link": "https://www.naukri.com/code360/problems/subset-sum_630213?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf"
          },
          {
            "topic": "recursion",
            "level": "medium",
            "id": "kM0jF4sD",
            "title": "Combination Sum",
            "description": "Given an array of distinct integers and a target, you have to return the list of all unique combinations where the chosen numbers sum to target. You may return the combinations in any order.",
            "link": "https://leetcode.com/problems/combination-sum/description/"
          },
          {
            "topic": "recursion",
            "level": "medium",
            "id": "pQ7lO1kM",
            "title": "Combination Sum-II",
            "description": " Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.",
            "link": "https://leetcode.com/problems/combination-sum-ii/"
          },
          {
            "topic": "recursion",
            "level": "medium",
            "id": "jF8zX2wE",
            "title": "Palindrome Partitioning",
            "description": " You are given a string s, partition it in such a way that every substring is a palindrome. Return all such palindromic partitions of s.",
            "link": "https://leetcode.com/problems/palindrome-partitioning/description/"
          }
        ],
        "hard": [
          {
            "topic": "recursion",
            "level": "hard",
            "id": "gH4nL7pQ",
            "title": "N Queen Problem",
            "description": "The n-queens is the problem of placing n queens on n × n chessboard such that no two queens can attack each other. Given an integer n, return all distinct solutions to the n -queens puzzle. Each solution contains a distinct boards configuration of the queen's placement, where ‘Q’ and ‘.’ indicate queen and empty space respectively.",
            "link": "https://leetcode.com/problems/n-queens/description/"
          },
          {
            "topic": "recursion",
            "level": "hard",
            "id": "zX9vC6bN",
            "title": "Rat in a Maze",
            "description": "Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and the rat cannot move to it while value 1 at a cell in the matrix represents that rat can travel through it.",
            "link": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
          },
          {
            "topic": "recursion",
            "level": "hard",
            "id": "eR5tY8uI",
            "title": "M - Coloring Problem",
            "description": " Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with the same color.",
            "link": "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"
          }
        ]
      }
    },
    {
      "data_structure": "stackAndQueue",
      "problems": {
        "easy": [
          {
            "topic": "stackAndQueue",
            "level": "easy",
            "id": "iO3pA6sZ",
            "title": "Implement Stack using Arrays",
            "description": " Implement a stack using an array.",
            "link": "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=implement-stack-using-array"
          },
          {
            "topic": "stackAndQueue",
            "level": "easy",
            "id": "uI7oP1qL",
            "title": "Implement Queue Using Array",
            "description": "Implement Queue Data Structure using Array with all functions like pop, push, top, size, etc.",
            "link": "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=implement-queue-using-array"
          },
          {
            "topic": "stackAndQueue",
            "level": "easy",
            "id": "sD4fG7hJ",
            "title": "Next Greater Element",
            "description": "Given a circular integer array A, return the next greater element for every element in A. The next greater element for an element x is the first element greater than x that we come across while traversing the array in a clockwise manner. If it doesn't exist, return -1 for this element.",
            "link": "https://leetcode.com/problems/next-greater-element-i/description/"
          },
          {
            "topic": "stackAndQueue",
            "level": "easy",
            "id": "xZ1vC9bN",
            "title": "Number of NGEs to the right",
            "description": "Number of NGEs to the right.",
            "link": "https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=number-of-nges-to-the-right"
          }
        ],
        "medium": [
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "vC5bN8xZ",
            "title": "Implement Stack using Queue",
            "description": "Implement a Stack using a single Queue.",
            "link": "https://leetcode.com/problems/implement-stack-using-queues/description/"
          },
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "bN8xZ1vC",
            "title": "Implement queue using Linkedlist",
            "description": "Implement Queue using Singly LinkedList.",
            "link": "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=implement-queue-using-linked-list"
          },
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "tY2wE5rA",
            "title": "Implement Min Stack",
            "description": "Implement Min Stack | O(2N) and O(N) Space Complexity. Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
            "link": "https://leetcode.com/problems/min-stack/description/"
          },
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "kM0jF4sD",
            "title": "Infix to Postfix Conversion using Stack",
            "description": "Given an infix expression, Your task is to convert the given infix expression to a postfix expression.",
            "link": "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=infix-to-postfix"
          },
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "pQ7lO1kM",
            "title": "Convert Infix To Prefix Notation",
            "description": "Given an infix expression, Your task is to convert the given infix expression to a prefix expression.",
            "link": "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=infix-to-postfix"
          },
          {
            "topic": "stackAndQueue",
            "level": "medium",
            "id": "jF8zX2wE",
            "title": "Largest rectangle in a histogram",
            "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1  return the area of the largest rectangle in histogram.",
            "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/description/"
          }
        ],
        "hard": [
          {
            "topic": "stackAndQueue",
            "level": "hard",
            "id": "gH4nL7pQ",
            "title": "Sliding Window Maximum",
            "description": "Given an array of integers arr, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
            "link": "https://leetcode.com/problems/sliding-window-maximum/description/"
          },
          {
            "topic": "stackAndQueue",
            "level": "hard",
            "id": "zX9vC6bN",
            "title": "Implement LRU Cache",
            "description": " “Design a data structure that follows the constraints of Least Recently Used (LRU) cache”.",
            "link": "https://leetcode.com/problems/lru-cache/description/"
          },
          {
            "topic": "stackAndQueue",
            "level": "hard",
            "id": "eR5tY8uI",
            "title": "LFU Cache",
            "description": "Design and implement a data structure for a Least Frequently Used (LFU) cache.",
            "link": "https://leetcode.com/problems/lfu-cache/description/"
          }
        ]
      }
    },
    {
      "data_structure": "sliding Window",
      "problems": {
        "easy": [
          {
            "topic": "sliding Window",
            "level": "easy",
            "id": "sW1aBc",
            "title": "Binary subarray with sum",
            "description": " Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.",
            "link": "https://leetcode.com/problems/binary-subarrays-with-sum/description/"
          }
        ],
        "medium": [
          {
            "topic": "sliding Window",
            "level": "medium",
            "id": "lS2dEf",
            "title": "Longest Substring Without Repeating Characters",
            "description": "Given a String, find the length of longest substring without any repeating character.",
            "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/"
          },
          {
            "topic": "sliding Window",
            "level": "medium",
            "id": "mC3fGh",
            "title": "Max Consecutive Ones III",
            "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
            "link": "https://leetcode.com/problems/max-consecutive-ones-iii/description/"
          },
          {
            "topic": "sliding Window",
            "level": "medium",
            "id": "cN4gHi",
            "title": "Count number of nice subarrays",
            "description": "IGiven an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.",
            "link": "https://leetcode.com/problems/count-number-of-nice-subarrays/description/"
          },
          {
            "topic": "sliding Window",
            "level": "medium",
            "id": "nS5hIj",
            "title": "Number of substring containing all three characters",
            "description": "Given a string s consisting only of characters a, b and c. Return the number of substrings containing at least one occurrence of all these characters a, b and c.",
            "link": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/"
          },
          {
            "topic": "sliding Window",
            "level": "medium",
            "id": "mP6iJk",
            "title": "Maximum point you can obtain from cards",
            "description": "Maximum point you can obtain from cards.",
            "link": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/"
          }
        ],
        "hard": [
          {
            "topic": "sliding Window",
            "level": "hard",
            "id": "sK7jKl",
            "title": "Subarray with k different integers",
            "description": "Given an integer array nums and an integer k, return the number of good subarrays of nums.",
            "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/description/"
          },
          {
            "topic": "sliding Window",
            "level": "hard",
            "id": "mW8kLm",
            "title": "Minimum Window Substring",
            "description": " Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
            "link": "https://leetcode.com/problems/minimum-window-substring/description/"
          }
        ]
      }
    },
    {
      "data_structure": "heap",
      "problems": {
        "easy": [
          {
            "topic": "heap",
            "level": "easy",
            "id": "hP1xYz",
            "title": "Kth largest element in an array [use priority queue]",
            "description": " Given an unsorted array, print Kth Largest and Smallest Element from an unsorted array.",
            "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/description/"
          },
          {
            "topic": "heap",
            "level": "easy",
            "id": "rE2yZa",
            "title": "Replace each array element by its corresponding rank",
            "description": " Given an array of N integers, the task is to replace each element of the array by its rank in the array.",
            "link": "https://www.geeksforgeeks.org/problems/replace-elements-by-its-rank-in-the-array/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=replace-elements-by-its-rank-in-the-array"
          },
          {
            "topic": "heap",
            "level": "easy",
            "id": "sK3zAb",
            "title": "Sort K sorted array",
            "description": "Given k sorted arrays arranged in the form of a matrix of size k * k. The task is to merge them into one sorted array.",
            "link": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=merge-k-sorted-arrays"
          },
          {
            "topic": "heap",
            "level": "easy",
            "id": "kL4aBc",
            "title": "Kth largest element in a stream of running integers",
            "description": " Find Kth largest element in a stream of running integers.",
            "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/description/"
          }
        ],
        "medium": [
          {
            "topic": "heap",
            "level": "medium",
            "id": "tS5bCd",
            "title": "Task Scheduler",
            "description": "You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.",
            "link": "https://leetcode.com/problems/task-scheduler/description/"
          },
          {
            "topic": "heap",
            "level": "medium",
            "id": "dT6cDe",
            "title": "Design twitter",
            "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.",
            "link": "https://leetcode.com/problems/design-twitter/description/"
          },
          {
            "topic": "heap",
            "level": "medium",
            "id": "hS7dEf",
            "title": "Hands of Straights",
            "description": "Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.",
            "link": "https://leetcode.com/problems/hand-of-straights/description/"
          },
          {
            "topic": "heap",
            "level": "easy",
            "id": "mS8eFg",
            "title": "Maximum Sum Combination",
            "description": "Given two equally sized 1-D arrays A, B containing N integers each. A sum combination is made by adding one element from array A and another element of array B.",
            "link": "https://www.interviewbit.com/problems/maximum-sum-combinations/"
          },
          {
            "topic": "heap",
            "level": "easy",
            "id": "kF9fGh",
            "title": "K most frequent elements",
            "description": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
            "link": "https://leetcode.com/problems/top-k-frequent-elements/description//"
          }
        ],
        "hard": [
          {
            "topic": "heap",
            "level": "hard",
            "id": "fM0gHi",
            "title": "Find Median from Data Stream",
            "description": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
            "link": "https://leetcode.com/problems/top-k-frequent-elements/description/"
          }
        ]
      }
    },
    {
      "data_structure": "greedy",
      "problems": {
        "easy": [
          {
            "topic": "greedy",
            "level": "easy",
            "id": "gR1hIj",
            "title": "Assign Cookies",
            "description": "Given two arrays representing children’s green factor and cookie sizes, the goal is to maximise the number of content children.",
            "link": "https://leetcode.com/problems/assign-cookies/description/"
          },
          {
            "topic": "greedy",
            "level": "easy",
            "id": "lC2iJk",
            "title": "Lemonade Change",
            "description": "Given an array representing a queue of customers and the value of bills they hold, determine if it is possible to provide correct change to each customer. Customers can only pay with 5$, 10$ or 20$ bills and we initially do not have any change at hand. Return true, if it is possible to provide correct change for each customer otherwise return false.",
            "link": "https://leetcode.com/problems/lemonade-change/description/"
          },
          {
            "topic": "greedy",
            "level": "easy",
            "id": "sJ3jKl",
            "title": "Sort K sorted array",
            "description": "Given k sorted arrays arranged in the form of a matrix of size k * k. The task is to merge them into one sorted array.",
            "link": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=merge-k-sorted-arrays"
          },
          {
            "topic": "greedy",
            "level": "easy",
            "id": "kK4kLm",
            "title": "Kth largest element in a stream of running integers",
            "description": " Find Kth largest element in a stream of running integers.",
            "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/description/"
          }
        ],
        "medium": [
          {
            "topic": "greedy",
            "level": "medium",
            "id": "fK5lMn",
            "title": "Fractional Knapsack Problem",
            "description": "The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.",
            "link": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "vP6mNo",
            "title": "Valid Paranthesis Checker",
            "description": "Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.",
            "link": "https://leetcode.com/problems/valid-parenthesis-string/description/"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "nN7oOp",
            "title": "N meetings in one room",
            "description": "There is one meeting room in a firm. You are given two arrays, start and end each of size N.For an index ‘i’, start[i] denotes the starting time of the ith meeting while end[i]  will denote the ending time of the ith meeting. Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a  particular time. Print the order in which these meetings will be performed.",
            "link": "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "jJ8pPq",
            "title": "Jump Game",
            "description": "Given an array where each element represents the maximum number of steps you can jump forward from that element, return true if we can reach the last index starting from the first index. Otherwise, return false.",
            "link": "https://leetcode.com/problems/jump-game/"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "mG9qQr",
            "title": "Jump Game 2",
            "description": "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where: 0 <= j <= nums[i] and i + j < n Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].",
            "link": "https://leetcode.com/problems/jump-game-ii/"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "pP0rRs",
            "title": "Minimum number of platforms required for a railway",
            "description": "We are given two arrays that represent the arrival and departure times of trains that stop at the platform. We need to find the minimum number of platforms needed at the railway station so that no train has to wait.",
            "link": "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#"
          },
          {
            "topic": "greedy",
            "level": "medium",
            "id": "xQ1sSt",
            "title": "Job sequencing Problem",
            "description": "You are given a set of N jobs where each job comes with a deadline and profit. The profit can only be earned upon completing the job within its deadline. Find the number of jobs done and the maximum profit that can be obtained. Each job takes a single unit of time and only one job can be performed at a time.",
            "link": "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#"
          }
        ],
        "hard": [
          {
            "topic": "greedy",
            "level": "hard",
            "id": "yR2tTu",
            "title": "Candy",
            "description": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
            "link": "https://leetcode.com/problems/candy/"
          },
          {
            "topic": "greedy",
            "level": "hard",
            "id": "zS3uUv",
            "title": "Program for Least Recently Used (LRU) Page Replacement Algorithm",
            "description": "In operating systems that use paging for memory management, page replacement algorithm is needed to decide which page needs to be replaced when the new page comes in. Whenever a new page is referred and is not present in memory, the page fault occurs and Operating System replaces one of the existing pages with a newly needed page. Given a sequence of pages in an array pages[] of length N and memory capacity C, find the number of page faults using Least Recently Used (LRU) Algorithm. ",
            "link": "https://bit.ly/3dtFqHG"
          },
          {
            "topic": "greedy",
            "level": "hard",
            "id": "aS4vVw",
            "title": "Program for Shortest Job First (or SJF) CPU Scheduling",
            "description": "Given a list of job durations representing the time it takes to complete each job. Implement the Shortest Job First algorithm to find the average waiting time for these jobs.",
            "link": "https://bit.ly/3DYCIFb"
          }
        ]
      }
    },
    {
      "data_structure": "binary tree",
      "problems": {
        "easy": [
          {
            "topic": "binary tree",
            "level": "easy",
            "id": "bT5wWx",
            "title": "Preorder Traversal of Binary Tree",
            "description": "Given the root of a Binary Tree, write a recursive function that returns an array containing the preorder traversal of the tree.",
            "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
          },
          {
            "topic": "binary tree",
            "level": "easy",
            "id": "cT6xXy",
            "title": "Inorder Traversal of Binary Tree",
            "description": "Given the root of a Binary Tree, write a recursive function that returns an array containing the inorder traversal of the tree.",
            "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "topic": "binary tree",
            "level": "easy",
            "id": "dT7yYz",
            "title": "Post-order Traversal of Binary Tree",
            "description": "Given the root of a Binary Tree, write a recursive function that returns an array containing the postorder traversal of the tree.",
            "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "topic": "binary tree",
            "level": "easy",
            "id": "eU8zZa",
            "title": "Level order Traversal",
            "description": "Given the root of a Binary Tree, returns an array containing the level order traversal of the tree.",
            "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
          }
        ],
        "medium": [
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "fV9aAb",
            "title": "Height of a Binary Tree",
            "description": "Given the root of a Binary Tree, return the height of the tree. The height of the tree is equal to the number of nodes on the longest path from root to a leaf.",
            "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
          },
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "gW0bBc",
            "title": "Check if the Binary tree is height-balanced or not",
            "description": "Given a Binary Tree, return true if it is a Balanced Binary Tree else return false. A Binary Tree is balanced if, for all nodes in the tree, the difference between left and right subtree height is not more than 1.",
            "link": "https://leetcode.com/problems/balanced-binary-tree/"
          },
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "hX1cCd",
            "title": "Diameter of Binary Tree",
            "description": "Given the root of the Binary Tree, return the length of its diameter. The Diameter of a Binary Tree is the longest distance between any two nodes of that tree. This path may or may not pass through the root.",
            "link": "https://leetcode.com/problems/diameter-of-binary-tree/"
          },
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "iY2dDe",
            "title": "Check if two trees are identical or not",
            "description": "Given two Binary Trees, return if true if the two trees are identical, otherwise return false.",
            "link": "https://leetcode.com/problems/same-tree/"
          },
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "jZ3eEf",
            "title": "Boundary Traversal of Binary Tree",
            "description": "Given a Binary Tree, perform the boundary traversal of the tree. The boundary traversal is the process of visiting the boundary nodes of the binary tree in the anticlockwise direction, starting from the root.",
            "link": "https://leetcode.com/problems/boundary-of-binary-tree/"
          },
          {
            "topic": "binary tree",
            "level": "medium",
            "id": "kA4fFg",
            "title": "Symmetric Binary Tree",
            "description": "Given a Binary Tree, determine whether the given tree is symmetric or not. A Binary Tree would be Symmetric, when its mirror image is exactly the same as the original tree. If we were to draw a vertical line through the centre of the tree, the nodes on the left and right side would be mirror images of each other.",
            "link": "https://leetcode.com/problems/symmetric-tree/"
          }
        ],
        "hard": [
          {
            "topic": "binary tree",
            "level": "hard",
            "id": "lB5gGh",
            "title": "Maximum Sum Path in Binary Tree",
            "description": "Given a Binary Tree, determine the maximum sum achievable along any path within the tree. A path in a binary tree is defined as a sequence of nodes where each pair of adjacent nodes is connected by an edge. Nodes can only appear once in the sequence, and the path is not required to start from the root. Identify and compute the maximum sum possible along any path within the given binary tree.",
            "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
          },
          {
            "topic": "binary tree",
            "level": "hard",
            "id": "mC6hHi",
            "title": "Check for Children Sum Property in a Binary Tree",
            "description": "Given a Binary Tree, convert the value of its nodes to follow the Children Sum Property. The Children Sum Property in a binary tree states that for every node, the sum of its children's values (if they exist) should be equal to the node's value. If a child is missing, it is considered as having a value of 0.",
            "link": "https://bit.ly/3dEr73g"
          },
          {
            "topic": "binary tree",
            "level": "hard",
            "id": "nD7iIj",
            "title": "Minimum time taken to BURN the Binary Tree from a Node",
            "description": "Given a binary tree and a node data called target. Find the minimum time required to burn the complete binary tree if the target is set on fire. It is known that in 1 second all nodes connected to a given node get burned. That is its left child, right child, and parent.",
            "link": "https://bit.ly/3wcg7k1"
          },
          {
            "topic": "binary tree",
            "level": "hard",
            "id": "oE8jJk",
            "title": "Serialize and deserialize Binary Tree",
            "description": "Given a Binary Tree, design an algorithm to serialise and deserialise it. There is no restriction on how the serialisation and deserialization takes place. But it needs to be ensured that the serialised binary tree can be deserialized to the original tree structure. Serialisation is the process of translating a data structure or object state into a format that can be stored or transmitted (for example, across a computer network) and reconstructed later. The opposite operation, that is, extracting a data structure from stored information, is deserialization.",
            "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
          },
          {
            "topic": "binary tree",
            "level": "hard",
            "id": "pF9kJl",
            "title": "Flatten Binary Tree to LinkedList",
            "description": "Given a Binary Tree, convert it to a Linked List where the linked list nodes follow the same order as the pre-order traversal of the binary tree. Use the right pointer of the Binary Tree as the ‘next’ pointer for the linked list and set the left pointer to null. Do this in place and do not create extra nodes.",
            "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
          }
        ]
      }
    },
    {
      "data_structure": "binary search tree",
      "problems": {
        "easy": [
          {
            "topic": "binary search  tree",
            "level": "easy",
            "id": "qG0lLm",
            "title": "Ceil in a Binary Search Tree",
            "description": "Given a Binary Search Tree and a key, return the ceiling of the given key in the Binary Search Tree. Ceiling of a value refers to the value of the smallest node in the Binary Search Tree that is greater than or equal to the given key. If the ceiling node does not exist, return nullptr.",
            "link": "https://practice.geeksforgeeks.org/problems/implementing-ceil-in-bst/1"
          },
          {
            "topic": "binary search  tree",
            "level": "easy",
            "id": "rH1mMm",
            "title": "Floor in a Binary Search Tree",
            "description": "Given a Binary Search Tree and a key, return the floor of the given key in the Binary Search Tree. Floor of a value refers to the value of the largest node in the Binary Search Tree that is smaller than or equal to the given key. If the floor node does not exist, return nullptr.",
            "link": "https://bit.ly/3TSbXXE"
          }
        ],
        "medium": [
          {
            "topic": "binary search  tree",
            "level": "medium",
            "id": "sI2nNn",
            "title": "Insert a given Node in Binary Search Tree",
            "description": "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.",
            "link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
          },
          {
            "topic": "binary search  tree",
            "level": "medium",
            "id": "tJ3oOo",
            "title": "Delete a Node in Binary Search Tree",
            "description": "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST. Basically, the deletion can be divided into two stages: Search for a node to remove. If the node is found, delete the node.",
            "link": "https://leetcode.com/problems/delete-node-in-a-bst/"
          },
          {
            "topic": "binary search  tree",
            "level": "medium",
            "id": "uK4pPp",
            "title": "Find K-th smallest/largest element in BST",
            "description": "Given a Binary Search Tree and an integer ‘K’. Find and return the ‘K-th’ smallest and ‘K-th’ largest element in the given Binary Search Tree.",
            "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
          },
          {
            "topic": "binary search  tree",
            "level": "medium",
            "id": "vL5qQq",
            "title": "LCA in Binary Search Tree",
            "description": "Given a sorted dictionary of an alien language having N words and k starting alphabets of a standard dictionary. Find the order of characters in the alien language. Note: Many orders may be possible for a particular test case, thus you may return any valid order.",
            "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
          }
        ],
        "hard": [
          {
            "topic": "binary search  tree",
            "level": "hard",
            "id": "wM6rRr",
            "title": "Construct a BST from a preorder traversal",
            "description": "Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root. It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases. A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val. A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.",
            "link": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
          },
          {
            "topic": "binary search  tree",
            "level": "hard",
            "id": "xN7sSs",
            "title": "Merge 2 BST's",
            "description": "Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST): BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST. boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false. int next() Moves the pointer to the right, then returns the number at the pointer. Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST. You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.",
            "link": "https://leetcode.com/problems/binary-search-tree-iterator/"
          },
          {
            "topic": "binary search  tree",
            "level": "hard",
            "id": "yO8tTt",
            "title": "Two Sum In BST | Check if there exists a pair with Sum K",
            "description": "Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.",
            "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
          },
          {
            "topic": "binary search  tree",
            "level": "hard",
            "id": "zP9uUu",
            "title": "Recover BST | Correct BST with two nodes swapped",
            "description": "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.",
            "link": "https://leetcode.com/problems/recover-binary-search-tree/"
          },
          {
            "topic": "binary search  tree",
            "level": "hard",
            "id": "aQ0vVv",
            "title": "Largest BST in Binary Tree",
            "description": "You're given a binary tree. Your task is to find the size of the largest subtree within this binary tree that also satisfies the properties of a Binary Search Tree (BST). The size of a subtree is defined as the number of nodes it contains. Note: A subtree of the binary tree is considered a BST if for every node in that subtree, the left child is less than the node, and the right child is greater than the node, without any duplicate values in the subtree.",
            "link": "https://practice.geeksforgeeks.org/problems/largest-bst/1"
          }
        ]
      }
    },
    {
      "data_structure": "dynamic programming",
      "problems": {
        "easy": [
          {
            "topic": "dynamic programming",
            "level": "easy",
            "id": "bR1wWw",
            "title": "Dynamic Programming Introduction",
            "description": "We need to find the nth Fibonacci number, where n is based on a 0-based index. Every ith number of the series is equal to the sum of (i-1)th and (i-2)th number where the first and second number is given as 0 and 1 respectively. 0,1,1,2,3,5,8,13,21,...",
            "link": "https://bit.ly/3UWkWrS"
          },
          {
            "topic": "dynamic programming",
            "level": "easy",
            "id": "cS2xXx",
            "title": "Climbing Stars",
            "description": "Given a number of stairs. Starting from the 0th stair we need to climb to the “Nth” stair. At a time we can climb either one or two steps. We need to return the total number of distinct ways to reach from 0th to Nth stair.",
            "link": "https://leetcode.com/problems/climbing-stairs/"
          },
          {
            "topic": "dynamic programming",
            "level": "easy",
            "id": "dT3yYy",
            "title": "Frog Jump",
            "description": "Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. At a time the frog can climb either one or two steps. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.",
            "link": "https://bit.ly/3Xn0Kkw"
          },
          {
            "topic": "dynamic programming",
            "level": "easy",
            "id": "eU4zZz",
            "title": "Frog Jump with k distances",
            "description": "This is a follow-up question to “Frog Jump” . In the previous question, the frog was allowed to jump either one or two steps at a time. In this question, the frog is allowed to jump up to ‘K’ steps at a time. If K=4, the frog can jump 1,2,3, or 4 steps at every index.",
            "link": "https://bit.ly/3GyNRya"
          }
        ],
        "medium": [
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "fV5aAa",
            "title": "Ninja's Training",
            "description": "A Ninja has an ‘N’ Day training schedule. He has to perform one of these three activities (Running, Fighting Practice, or Learning New Moves) each day. There are merit points associated with performing an activity each day. The same activity can’t be performed on two consecutive days. We need to find the maximum merit points the ninja can attain in N Days. We are given a 2D Array POINTS of size ‘N*3’ which tells us the merit point of specific activity on that particular day. Our task is to calculate the maximum number of merit points that the ninja can earn.",
            "link": "https://bit.ly/3glc9kp"
          },
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "gW6bBb",
            "title": "Grid Unique Paths : DP on Grids",
            "description": "Given two values M and N, which represent a matrix[M][N]. We need to find the total unique paths from the top-left cell (matrix[0][0]) to the rightmost cell (matrix[M-1][N-1]). At any cell we are allowed to move in only two directions:- bottom and right.",
            "link": "https://leetcode.com/problems/unique-paths/"
          },
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "hX7cCc",
            "title": "Grid Unique Paths 2",
            "description": "We are given an “N*M” Maze. The maze contains some obstacles. A cell is ‘blockage’ in the maze if its value is -1. 0 represents non-blockage. There is no path possible through a blocked cell. We need to count the total number of unique paths from the top-left corner of the maze to the bottom-right corner. At every cell, we can move either down or towards the right.",
            "link": "https://leetcode.com/problems/unique-paths-ii/"
          },
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "iY8dDd",
            "title": "Minimum path sum in Grid",
            "description": "We are given an “N*M” matrix of integers. We need to find a path from the top-left corner to the bottom-right corner of the matrix, such that there is a minimum cost past that we select. At every cell, we can move in only two directions: right and bottom. The cost of a path is given as the sum of values of cells of the given matrix.",
            "link": "https://leetcode.com/problems/minimum-path-sum/"
          },
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "jZ9eEe",
            "title": "Minimum path sum in Triangular Grid",
            "description": "We are given a Triangular matrix. We need to find the minimum path sum from the first row to the last row. At every cell we can move in only two directions: either to the bottom cell (↓) or to the bottom-right cell(↘)",
            "link": "https://leetcode.com/problems/triangle/"
          },
          {
            "topic": "dynamic programming",
            "level": "medium",
            "id": "kA0fFf",
            "title": "Minimum/Maximum Falling Path Sum",
            "description": "We are given an ‘N*M’ matrix. We need to find the maximum path sum from any cell of the first row to any cell of the last row. At every cell we can move in three directions: to the bottom cell (↓), to the bottom-right cell(↘), or to the bottom-left cell(↙).",
            "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
          }
        ],
        "hard": [
          {
            "topic": "dynamic programming",
            "level": "hard",
            "id": "lB1gGg",
            "title": "Matrix Chain Multiplication",
            "description": "In the coming articles, we will discuss problems related to a new pattern called “Partition DP”.Before proceeding further, let us understand how to identify whether a problem can be solved using this pattern.",
            "link": "https://bit.ly/3Cgg36D"
          },
          {
            "topic": "dynamic programming",
            "level": "hard",
            "id": "mC2hHh",
            "title": "Minimum Cost to Cut the Stick",
            "description": "We are given a stick of length N and a CUTS array of size C. The stick has markings as shown, and the CUTS array depicts the marking at which the stick needs to be cut (shown in red). Whenever we make a cut, we incur a cost. This cost is equal to the length of the stick on which we are making the cut. We need to find the minimum cost incurred to cut the stick at all the cut points.",
            "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
          },
          {
            "topic": "dynamic programming",
            "level": "hard",
            "id": "nD3iIi",
            "title": "Burst Balloons",
            "description": "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array. You are asked to burst all the balloons. If you burst the ith balloon, you will get arr[i - 1] * arr[i] * arr[i + 1] coins. If i - 1 or i + 1 goes out of the array's bounds, then treat it as if there is a balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely.",
            "link": "https://leetcode.com/problems/burst-balloons/"
          },
          {
            "topic": "dynamic programming",
            "level": "hard",
            "id": "oE4jJj",
            "title": "Evaluate Boolean Expression to True",
            "description": "Given an expression, A, with operands and operators (OR, AND, XOR), in how many ways can you evaluate the expression to be true, by grouping it in different ways? Operands are only true and false. Return the number of ways to evaluate the expression modulo 103 + 3.",
            "link": "https://leetcode.com/problems/parsing-a-boolean-expression/"
          },
          {
            "topic": "dynamic programming",
            "level": "hard",
            "id": "pF5kKk",
            "title": "Partition Array for Maximum Sum|(DP-54)",
            "description": "Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has its values changed to become the maximum value of that subarray. Return the largest sum of the given array after partitioning.",
            "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
          }
        ]
      }
    },
    {
      "data_structure": "graphs",
      "problems": {
        "easy": [
          {
            "topic": "graphs",
            "level": "easy",
            "id": "qG6lLl",
            "title": "Number of provinces",
            "description": "Given an undirected graph with V vertices. We say two vertices u and v belong to a single province if there is a path from u to v or v to u. Your task is to find the number of provinces.",
            "link": "https://leetcode.com/problems/number-of-provinces/#:~:text=A%20province%20is%20a%20group,the%20total%20number%20of%20provinces."
          },
          {
            "topic": "graphs",
            "level": "easy",
            "id": "rH7mMm",
            "title": "Rotten Oranges",
            "description": "Problem Statement: You will be given an m x n grid, where each cell has the following values : 2  -  represents a rotten orange, 1  -  represents a Fresh orange, 0  -  represents an Empty Cell. Every minute, if a Fresh Orange is adjacent to a Rotten Orange in 4-direction ( upward, downwards, right, and left ) it becomes Rotten. Return the minimum number of minutes required such that none of the cells has a Fresh Orange. If it's not possible, return -1.",
            "link": "https://leetcode.com/problems/rotting-oranges/"
          },
          {
            "topic": "graphs",
            "level": "easy",
            "id": "sI8nNn",
            "title": "Flood fill",
            "description": "An image is represented by a 2-D array of integers, each integer representing the pixel value of the image. Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, 'flood fill' the image. To perform a 'flood fill', consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same colour as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same colour as the starting pixel), and so on. Replace the colour of all of the aforementioned pixels with the newColor.",
            "link": "https://leetcode.com/problems/flood-fill/"
          },
          {
            "topic": "graphs",
            "level": "easy",
            "id": "tJ9oOo",
            "title": "Word ladder - 1",
            "description": "Given are the two distinct words startWord and targetWord, and a list denoting wordList of unique words of equal lengths. Find the length of the shortest transformation sequence from startWord to targetWord. In this problem statement, we need to keep the following conditions in mind: A word can only consist of lowercase characters, Only one letter can be changed in each transformation, Each transformed word must exist in the wordList including the targetWord, startWord may or may not be part of the wordList. Note:  If there’s no possible way to transform the sequence from startWord to targetWord return 0.",
            "link": "https://leetcode.com/problems/word-ladder/"
          },
          {
            "topic": "graphs",
            "level": "easy",
            "id": "uK0pPp",
            "title": "Word ladder - 2",
            "description": "Given two distinct words startWord and targetWord, and a list denoting wordList of unique words of equal lengths. Find all shortest transformation sequence(s) from startWord to targetWord. You can return them in any order possible. In this problem statement, we need to keep the following conditions in mind: A word can only consist of lowercase characters, Oly one letter can be changed in each transformation, Each transformed word must exist in the wordList including the targetWord, startWord may or may not be part of the wordList. Return an empty list if there is no such transformation sequence.",
            "link": "https://leetcode.com/problems/word-ladder-ii/"
          }
        ],
        "medium": [
          {
            "topic": "graphs",
            "level": "medium",
            "id": "vL1qQq",
            "title": "Course Schedule - I",
            "description": "There are a total of n tasks you have to pick, labeled from 0 to n-1. Some tasks may have prerequisites tasks, for example, to pick task 0 you have to first finish tasks 1, which is expressed as a pair: [0, 1]. Given the total number of n tasks and a list of prerequisite pairs of size m. Find the order of tasks you should pick to finish all tasks. Note: There may be multiple correct orders, you need to return one of them. If it is impossible to finish all tasks, return an empty array.",
            "link": "https://leetcode.com/problems/course-schedule/"
          },
          {
            "topic": "graphs",
            "level": "medium",
            "id": "wM2rRr",
            "title": "Course Schedule - II",
            "description": "There are a total of N tasks, labeled from 0 to N-1. Some tasks may have prerequisites, for example, to do task 0 you have to first complete task 1, which is expressed as a pair: [0, 1]. Given the total number of tasks N and a list of prerequisite pairs P, find if it is possible to finish all tasks.",
            "link": "https://leetcode.com/problems/course-schedule-ii/"
          },
          {
            "topic": "graphs",
            "level": "medium",
            "id": "xN3sSs",
            "title": "Find eventual safe states",
            "description": "A directed graph of V vertices and E edges is given in the form of an adjacency list adj. Each node of the graph is labeled with a distinct integer in the range 0 to V - 1. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. You have to return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.",
            "link": "https://leetcode.com/problems/find-eventual-safe-states/"
          },
          {
            "topic": "graphs",
            "level": "medium",
            "id": "yO4tTt",
            "title": "Alien dictionary",
            "description": "Given a sorted dictionary of an alien language having N words and k starting alphabets of a standard dictionary. Find the order of characters in the alien language. Note: Many orders may be possible for a particular test case, thus you may return any valid order.",
            "link": "https://leetcode.com/problems/alien-dictionary/solution/"
          }
        ],
        "hard": [
          {
            "topic": "graphs",
            "level": "hard",
            "id": "zP5uUu",
            "title": "Prim's Algorithm",
            "description": "Given a weighted, undirected, and connected graph of V vertices and E edges. The task is to find the sum of weights of the edges of the Minimum Spanning Tree. (Sometimes it may be asked to find the MST as well, where in the MST the edge-informations will be stored in the form {u, v}(u = starting node, v = ending node).)",
            "link": "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1"
          },
          {
            "topic": "graphs",
            "level": "hard",
            "id": "aQ6vVv",
            "title": "Kruskal's Algorithm",
            "description": "Given a weighted, undirected, and connected graph of V vertices and E edges. The task is to find the sum of weights of the edges of the Minimum Spanning Tree.",
            "link": "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1"
          },
          {
            "topic": "graphs",
            "level": "hard",
            "id": "bR7wWw",
            "title": "Number of operations to make network connected",
            "description": "You are given a graph with n vertices and m edges. You can remove one edge from anywhere and add that edge between any two vertices in one operation. Find the minimum number of operations that will be required to make the graph connected. If it is not possible to make the graph connected, return -1.",
            "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
          },
          {
            "topic": "graphs",
            "level": "hard",
            "id": "cS8xXx",
            "title": "Most stones removed with same rows or columns",
            "description": "There are n stones at some integer coordinate points on a 2D plane. Each coordinate point may have at most one stone. You need to remove some stones. A stone can be removed if it shares either the same row or the same column as another stone that has not been removed. Given an array of stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the maximum possible number of stones that you can remove.",
            "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
          },
          {
            "topic": "graphs",
            "level": "hard",
            "id": "dT9yYy",
            "title": "Accounts merge",
            "description": "Given a list of accounts where each element account [ i ] is a list of strings, where the first element account [ i ][ 0 ]  is a name, and the rest of the elements are emails representing emails of the account. Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name. After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order.",
            "link": "https://leetcode.com/problems/accounts-merge/"
          },
          {
            "topic": "graphs",
            "level": "hard",
            "id": "eU0zZz",
            "title": "Articulation Point",
            "description": "Given an undirected connected graph with V vertices and adjacency list adj. You are required to find all the vertices removing which (and edges through it) disconnect the graph into 2 or more components. Note: Indexing is zero-based i.e nodes numbering from (0 to V-1). There might be loops present in the graph.",
            "link": "https://bit.ly/3T2LPKu"
          }
        ]
      }
    }
  ]