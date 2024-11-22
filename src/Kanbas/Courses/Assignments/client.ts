import axios from "axios";
//import { Assignment } from "./reducer";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// export const createAssignment = async (courseId: string, assignment: any) => {
//   const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
//   return response.data;
// };


export const updateAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.put(
    `${COURSES_API}/${courseId}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};


export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};


// export const getAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
//   const { data } = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
//   return data; 
// };
