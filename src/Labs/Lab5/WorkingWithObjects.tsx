import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  const updateAssignmentScore = () => {
    fetch(`${ASSIGNMENT_API_URL}/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: assignment.score }),
    }).then(() => alert("Score updated successfully!"));
  };

  const updateAssignmentCompleted = () => {
    fetch(`${ASSIGNMENT_API_URL}/completed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: assignment.completed }),
    }).then(() => alert("Completed status updated successfully!"));
  };

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <hr />
      <h4>Update Score</h4>
      <input
        className="form-control w-25"
        type="number"
        id="wd-assignment-score"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <button
        id="wd-update-assignment-score"
        className="btn btn-primary mt-2"
        onClick={updateAssignmentScore}
      >
        Update Score
      </button>
      <hr />
      <h4>Update Completed Status</h4>
      <input
        type="checkbox"
        id="wd-assignment-completed"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <label className="ms-2">Completed</label>
      <button
        id="wd-update-assignment-completed"
        className="btn btn-primary mt-2"
        onClick={updateAssignmentCompleted}
      >
        Update Completed Status
      </button>
      <hr />
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
    </div>
  );
}
