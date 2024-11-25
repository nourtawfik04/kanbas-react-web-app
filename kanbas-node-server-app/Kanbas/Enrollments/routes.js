import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {

  app.post("/api/enrollments", (req, res) => {
    try {
      const { userId, courseId } = req.body;
      if (!userId || !courseId) {
        return res.status(400).send({ error: "User ID and Course ID are required." });
      }
      enrollmentDao.enrollUserInCourse(userId, courseId);
      res.sendStatus(201);
    } catch (error) {
      console.error("Error enrolling in course:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });

  app.delete("/api/enrollments", (req, res) => {
    try {
      const { userId, courseId } = req.body;
      if (!userId || !courseId) {
        return res.status(400).send({ error: "User ID and Course ID are required." });
      }
      enrollmentDao.unenrollUserFromCourse(userId, courseId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    try {
      const { userId } = req.params;
      const enrollments = enrollmentDao.findEnrollmentsByUser(userId);
      res.json(enrollments);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
}
