// import create from "zustand";
import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {// Storing the store in the localstorage
      name: "courses",
    })
  )
);

// const useCourseStore = create()(
//   devtools(
//     persist(courseStore, {
//       name: "courses",
//     })
//   )
// );

export default useCourseStore;

// Video 1:
// Creating the store and storing the store in the localstorage

// Video 2:
// Using the store by the components