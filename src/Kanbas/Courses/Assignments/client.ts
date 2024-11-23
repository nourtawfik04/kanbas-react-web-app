// import axios from "axios";
// import { assignments } from "../../Database";
// //import { Assignment } from "./reducer";

// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// console.log(REMOTE_SERVER)
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// // export const createAssignment = async (courseId: string, assignment: any) => {
// //   const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
// //   return response.data;
// // };


// export const updateAssignment = async (courseId: string, assignment: any) => {
//   const response = await axios.put(
//     `${COURSES_API}/${courseId}/assignments/${assignment._id}`,
//     assignment
//   );
//   return response.data;
// };

// console.log(assignments)

// export const deleteAssignment = async (assignmentId: string) => {
//   const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return response.data;
// };


// // export const getAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
// //   const { data } = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
// //   return data; 
// // };

import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Fetch assignments for a specific course
export const findAssignmentsForCourse = async (courseId: string) => {
  try {
    const response = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
    console.log(`Assignments fetched for courseId ${courseId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    throw error;
  }
};



// Update an assignment
// Update an assignment
export const updateAssignment = async (assignmentId: string, assignment: any) => {
  try {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
  try {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};

// Create a new assignment
export const createAssignment = async (assignment: any) => {
  try {
    const response = await axios.post(ASSIGNMENTS_API, assignment);
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};
export function createAssignmentForCourse(arg0: string, assignment: any) {
  throw new Error("Function not implemented.");
}

export function getAssignmentById(aid: string) {
  throw new Error("Function not implemented.");
}




