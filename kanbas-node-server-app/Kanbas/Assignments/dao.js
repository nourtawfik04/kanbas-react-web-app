// import Database from "../Database/index.js";

// export function updateAssignment(assignmentId, assignmentUpdates) {
//   const { assignments } = Database;
//   const assignment = assignments.find((a) => a._id === assignmentId);
//   Object.assign(assignment, assignmentUpdates);
//   return assignment;
// }

// export function deleteAssignment(assignmentId) {
//   const { assignments } = Database;
//   Database.assignments = assignments.filter((a) => a._id !== assignmentId);
// }

// export function createAssignment(assignment) {
//   const newAssignment = { ...assignment, _id: Date.now().toString() };
//   Database.assignments = [...Database.assignments, newAssignment];
//   return newAssignment;
// }

// export function findAssignmentsForCourse(courseId) {
//   const { assignments } = Database;
//   return assignments.filter((a) => a.course === courseId);
// }


import Database from "../Database/index.js";

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((a) => a._id === assignmentId);
  if (!assignment) {
    throw new Error("Assignment not found");
  }
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((a) => a._id !== assignmentId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  console.log("Assignments in Database:", assignments);
  if (!assignments || !Array.isArray(assignments)) {
    throw new Error("Assignments data is not initialized or invalid");
  }
  return assignments.filter((a) => a.course === courseId);
}
