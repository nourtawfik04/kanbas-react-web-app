export default function Module(app) {
  let module = {
    id: "1",
    name: "Introduction to Web Development",
    description: "This module covers the basics of web development.",
    course: "Computer Science 101",
  };

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.send(module.name);
  });

  app.post("/lab5/module/name", (req, res) => {
    const { name } = req.body;
    module.name = name;
    res.send(`Module name updated to: ${module.name}`);
  });

  app.post("/lab5/module/description", (req, res) => {
    const { description } = req.body;
    module.description = description;
    res.send(`Module description updated to: ${module.description}`);
  });

  let assignment = {
    score: 0,
    completed: false,
  };

  app.post("/lab5/assignment/score", (req, res) => {
    const { score } = req.body;
    assignment.score = score;
    res.send(`Assignment score updated to: ${assignment.score}`);
  });

  app.post("/lab5/assignment/completed", (req, res) => {
    const { completed } = req.body;
    assignment.completed = completed === "true";
    res.send(`Assignment completed status updated to: ${assignment.completed}`);
  });
}
