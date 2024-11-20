import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const existingAssignment = assignments.find((a: { _id: string | undefined; }) => a._id === aid);

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      title: "",
      description: "",
      points: 0,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleSave = () => {
    dispatch(setAssignments(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate('/Kanbas/Courses/${cid}/Assignments');
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>
      <br />

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label fw-bold">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>
      <br />

      <div className="d-flex align-items-center mb-3">
        <label htmlFor="wd-points" className="form-label fw-bold me-2">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: parseInt(e.target.value) })
          }
          style={{ width: "100px" }}
        />
      </div>
      <br />

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
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
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
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label fw-bold">
            Available Until
          </label>
          <input
            type="datetime-local"
            id="wd-available-until"
            className="form-control"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
          />
        </div>
      </div>
      <br />

      <div className="d-flex justify-content-between mt-4">
        <button onClick={handleCancel} className="btn btn-outline-secondary">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
