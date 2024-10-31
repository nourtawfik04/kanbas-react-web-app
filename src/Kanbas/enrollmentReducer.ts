import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as Array<{ course: string; user: string }>,
  currentUser: null,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollCourse: (state, action) => {
      state.enrollments.push(
        action.payload as { course: string; user: string }
      );
    },
    unenrollCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.course !== action.payload.course ||
          enrollment.user !== action.payload.user
      );
    },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
