import { useState } from "react";
import useCourseStore from "../App/CourseStore";
import "../App.css";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const addStore = useCourseStore((state) => state.addCourse);

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title!!!");
    addStore({
      id: Math.ceil(Math.random() * 1000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button onClick={handleCourseSubmit} className="form-submit-btn">
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
