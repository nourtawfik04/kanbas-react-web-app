import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../Database";

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  dueDate: string;
  points: number;
  assignTo: string;
  notAvailableUntil: string;
  description: string;
  group: string;
  submissionType: string;
}
console.log("Imported assignments from db:", db.assignments);
interface AssignmentsState {
  assignments: Assignment[];
}
const initialState: AssignmentsState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action: PayloadAction<Omit<Assignment, "_id">>) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        ...action.payload,
      };
      state.assignments.push(newAssignment);
    },

    deleteAssignment: (state, action: PayloadAction<string>) => {
      const assignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },

    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const updatedAssignment = action.payload;
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === updatedAssignment._id
      );
      if (index !== -1) {
        state.assignments[index] = updatedAssignment;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
