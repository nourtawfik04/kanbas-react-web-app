import axios from "axios";

const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;


export const enrollInCourse = async (userId: any, courseId: any) => {
  try {
    await axios.post(ENROLLMENTS_API, { userId, courseId });
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

export const unenrollFromCourse = async (userId: any, courseId: any) => {
  try {
    await axios.delete(ENROLLMENTS_API, { data: { userId, courseId } });
  } catch (error) {
    console.error("Error unenrolling from course:", error);
    throw error;
  }
};

export const getUserEnrollments = async (userId: any) => {
  try {
    const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user enrollments:", error);
    throw error;
  }
};
