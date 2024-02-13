import React from "react";
import useCourseStore from "../App/CourseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <div>
      <ul>
        {courses.map((course, id) => {
          return (
              <React.Fragment key={id}>
              <li
              className={`course-item`}
              style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
                >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={() => toggleCourseStatus(course.id)}
                  />
                </span>
                <span style={{color:"black"}}>{course.title}</span>
                <button onClick={() => removeCourse(course.id)} className="delete btn">Delete</button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
