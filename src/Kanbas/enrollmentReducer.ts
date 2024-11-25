import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrolledCourses: string[];
}

const initialState: EnrollmentState = {
  enrolledCourses: [],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<string[]>) => {
      state.enrolledCourses = action.payload;
    },
    enrollInCourse: (state, action: PayloadAction<string>) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload);
      }
    },
    unenrollFromCourse: (state, action: PayloadAction<string>) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (courseId) => courseId !== action.payload
      );
    },
  },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
