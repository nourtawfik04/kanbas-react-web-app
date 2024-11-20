import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(), 
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments.push(newEnrollment);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenroll: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
