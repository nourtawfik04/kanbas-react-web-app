import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = req.body;
    const createdAssignment = assignmentsDao.createAssignment(newAssignment);
    res.status(201).send(createdAssignment);
  });

  app.get("/api/assignments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.send(assignments);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(updatedAssignment);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    assignmentsDao.deleteAssignment(assignmentId);
    res.sendStatus(204); 
  });
}
