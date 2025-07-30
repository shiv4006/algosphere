import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "..";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfileForm = ({ user, onSave, onClose }) => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    location: "",
    college: "",
    linkedin: "",
    github: "",
    leetcode: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        location: user.location || "",
        college: user.college || "",
        linkedin: user.linkedin || "",
        github: user.github || "",
        leetcode: user.leetcode || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formData);
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-xl px-10 py-6 rounded-lg border-[0.5px] flex flex-col items-center
          ${theme === "dark"
            ? "bg-[#3C3C3C] text-white border-gray-600"
            : "bg-[#C3C3C3] text-black border-gray-400"
          }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-400 hover:text-red-500"
        >
          &times;
        </button>

        <span className="text-3xl text-[#4E5FB5] font-bold mb-6">Edit Profile</span>

        <div className="flex flex-col gap-3 w-full">
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            className={`pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]
              ${theme === "dark"
                ? "bg-zinc-900 text-white placeholder-gray-400"
                : "bg-zinc-100 text-black placeholder-gray-700"
              }`}
          />

          <input
            type="text"
            name="college"
            placeholder="Enter College Name"
            value={formData.college}
            onChange={handleChange}
            className={`pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]
              ${theme === "dark"
                ? "bg-zinc-900 text-white placeholder-gray-400"
                : "bg-zinc-100 text-black placeholder-gray-700"
              }`}
          />

          <input
            type="url"
            name="linkedin"
            placeholder="Enter LinkedIn URL"
            value={formData.linkedin}
            onChange={handleChange}
            className={`pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]
              ${theme === "dark"
                ? "bg-zinc-900 text-white placeholder-gray-400"
                : "bg-zinc-100 text-black placeholder-gray-700"
              }`}
          />

          <input
            type="url"
            name="github"
            placeholder="Enter GitHub URL"
            value={formData.github}
            onChange={handleChange}
            className={`pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]
              ${theme === "dark"
                ? "bg-zinc-900 text-white placeholder-gray-400"
                : "bg-zinc-100 text-black placeholder-gray-700"
              }`}
          />

          <input
            type="url"
            name="leetcode"
            placeholder="Enter LeetCode URL"
            value={formData.leetcode}
            onChange={handleChange}
            className={`pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]
              ${theme === "dark"
                ? "bg-zinc-900 text-white placeholder-gray-400"
                : "bg-zinc-100 text-black placeholder-gray-700"
              }`}
          />

          <button
            type="submit"
            className="w-full bg-[#7D8EE4] text-lg font-semibold py-2 rounded-lg mt-4 hover:bg-[#6b7fd4] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
