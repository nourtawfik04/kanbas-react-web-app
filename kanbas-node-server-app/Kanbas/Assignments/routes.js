

import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
app.post("/api/assignments", async (req, res) => {
  try {
    const newAssignment = req.body;
    if (!newAssignment.course) {
      return res.status(400).send({ error: "Course ID is required." });
    }
    const createdAssignment = await assignmentsDao.createAssignment(newAssignment);
    res.status(201).send(createdAssignment);
  } catch (error) {
    console.error("Error creating assignment:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
  app.get("/api/assignments/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      console.log(`Fetching assignments for courseId: ${courseId}`);
      const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
      if (!assignments || assignments.length === 0) {
        return res.status(404).send({ message: "No assignments found for this course." });
      }
      res.send(assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    try {
      const { assignmentId } = req.params;
      const assignmentUpdates = req.body;
      const updatedAssignment = await assignmentsDao.updateAssignment(
        assignmentId,
        assignmentUpdates
      );
      if (!updatedAssignment) {
        return res.status(404).send({ message: "Assignment not found" });
      }
      res.send(updatedAssignment);
    } catch (error) {
      console.error("Error updating assignment:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    try {
      const { assignmentId } = req.params;
      await assignmentsDao.deleteAssignment(assignmentId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting assignment:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
}
