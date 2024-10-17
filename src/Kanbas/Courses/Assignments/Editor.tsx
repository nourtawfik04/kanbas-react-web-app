import { Link, useParams } from "react-router-dom";
import * as db from "../../Database"; // Assuming the database contains the assignments data you provided

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from URL params
  const assignment = db.assignments.find((a) => a._id === aid); // Find the specific assignment using the ID

  if (!assignment) {
    return <div>Assignment not found.</div>; // Handle case if assignment is not found
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          readOnly
        />
      </div>
      <br />

      {/* Assignment Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label fw-bold">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          value={assignment.description}
          readOnly
        />
      </div>
      <br />

      {/* Points */}
      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-points" className="form-label fw-bold me-2">
          Points
        </label>
        <input
          id="wd-points"
          className="form-control"
          value={assignment.points}
          style={{ width: "100px" }}
          readOnly
        />
      </div>
      <br />

      {/* Assignment Group */}
      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-select-group" className="form-label fw-bold me-2">
          Assignment Group
        </label>
        <select
          id="wd-select-group"
          className="form-select"
          style={{ width: "200px" }}
          defaultValue="ASSIGNMENTS"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          {/* Add additional options as needed */}
        </select>
      </div>
      <br />

      {/* Display Grade As */}
      <div className="d-flex align-items-center mb-3">
        <label
          htmlFor="wd-select-display-grade-as"
          className="form-label fw-bold me-2"
        >
          Display Grade As
        </label>
        <select
          id="wd-select-display-grade-as"
          className="form-select"
          style={{ width: "200px" }}
          defaultValue="Percentage"
        >
          <option value="Percentage">Percentage</option>
          {/* Add more options as required */}
        </select>
      </div>
      <br />

      {/* Submission Type */}
      <div className="d-flex align-items-center mb-3">
        <label
          htmlFor="wd-select-submission-type"
          className="form-label fw-bold me-2"
        >
          Submission Type
        </label>
        <select
          id="wd-select-submission-type"
          className="form-select"
          style={{ width: "200px" }}
          defaultValue="Online"
        >
          <option value="Online">Online</option>
          {/* Add more options as required */}
        </select>
      </div>
      <br />

      {/* Online Entry Options */}
      <div className="col-md-8">
        <label className="form-label fw-bold">Online Entry Options</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-text-entry"
          />
          <label className="form-check-label" htmlFor="wd-text-entry">
            Text Entry
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-website-url"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="wd-website-url">
            Website URL
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-media-recordings"
          />
          <label className="form-check-label" htmlFor="wd-media-recordings">
            Media Recordings
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-student-annotation"
          />
          <label className="form-check-label" htmlFor="wd-student-annotation">
            Student Annotation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="wd-file-upload"
          />
          <label className="form-check-label" htmlFor="wd-file-upload">
            File Uploads
          </label>
        </div>
      </div>
      <br />

      {/* Due Date, Available From, Until */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label fw-bold">
            Due Date
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={assignment.dueDate}
            readOnly
          />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label fw-bold">
            Available From
          </label>
          <input
            type="datetime-local"
            id="wd-available-from"
            className="form-control"
            value="2024-05-06T00:00" // Placeholder, modify as needed
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label fw-bold">
            Until
          </label>
          <input
            type="datetime-local"
            id="wd-available-until"
            className="form-control"
            value="2024-05-20T00:00" // Placeholder, modify as needed
          />
        </div>
      </div>
      <br />

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-outline-secondary"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
