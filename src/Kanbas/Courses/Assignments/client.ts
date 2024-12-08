import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}`);
    console.log(`Assignments fetched for courseId ${courseId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    throw error;
  }
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  try {
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};


export const deleteAssignment = async (assignmentId: string) => {
  try {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};

export const createAssignment = async (assignment: any) => {
  try {
    const response = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
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




