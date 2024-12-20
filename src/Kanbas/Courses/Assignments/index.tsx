import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch, BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { BsFileText } from "react-icons/bs";
import { IoTrash } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { setAssignments, deleteAssignment as deleteReduxAssignment } from "./reducer";
import * as assignmentsClient from "./client"; 
import { Assignment } from "./reducer";

interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

  const fetchAssignments = async () => {
    try {
      const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error("Failed to fetch assignments:", error);
    }
  };

  useEffect(() => {
    if (cid) fetchAssignments();
  }, [cid]);

  const handleDelete = async (assignmentId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (isConfirmed) {
      try {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteReduxAssignment(assignmentId));
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <BiSearch className="fs-4 me-2" />
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
            <BiPlus className="me-2" /> Group
          </button>
          <button
            className="btn btn-danger d-flex align-items-center"
            onClick={handleAddAssignment}
          >
            <BiPlus className="me-2" /> Assignment
          </button>
        </div>
      </div>

      <h3
        id="wd-assignments-title"
        className="d-flex justify-content-between align-items-center border-bottom pb-2"
      >
        <span className="d-flex align-items-center">
          <BiDotsVerticalRounded className="fs-4 me-2" />
          ASSIGNMENTS
        </span>
        <span className="fs-6">
          40% of Total <button className="btn btn-link p-0">+</button>
        </span>
      </h3>

      <ul id="wd-assignment-list" className="list-unstyled mt-4">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item d-flex align-items-start p-3 mb-3 border-start border-3 border-success"
            >
              <BsFileText className="fs-4 text-success me-3" />
              <div className="flex-grow-1">
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none fw-bold"
                >
                  {assignment.title}
                </Link>
                <p className="text-muted mb-1">
                  Not available until {assignment.notAvailableUntil || "TBA"}
                </p>
                <p className="mb-0">
                  Due {assignment.dueDate || "TBA"} | {assignment.points || 0} pts
                </p>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDelete(assignment._id)}
                >
                  <IoTrash />
                </button>
              </div>
              <FaCheckCircle className="text-success fs-4 ms-3" />
              <BiDotsVerticalRounded className="fs-4 ms-2" />
            </li>
          ))
        ) : (
          <li>No assignments found for this course.</li>
        )}
      </ul>
    </div>
  );
}
