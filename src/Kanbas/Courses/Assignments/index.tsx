import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsGripVertical, BsFileText } from "react-icons/bs";
import { IoEllipsisVertical, IoTrash } from "react-icons/io5";
import { BiSearch, BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import ControlButtons from "./ControlButtons";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { Assignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer?.assignments ?? []
  );

  const assignmentsForCourse = assignments.filter(
    (assignment: Assignment) =>
      assignment.course?.toString() === cid?.toString()
  );

  const handleDelete = (assignmentId: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/assignments/newAssignmentEditor`);
  };

  const handleEditAssignment = (assignmentId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/edit`);
  };

  return (
    <div id="wd-assignments" className="assignments-box p-4">
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
        {assignmentsForCourse.length > 0 ? (
          assignmentsForCourse.map((assignment: Assignment) => (
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
                  Multiple Modules | Not available until{" "}
                  {assignment.notAvailableUntil}
                </p>
                <p className="mb-0">
                  Due {assignment.dueDate} | {assignment.points} pts
                </p>
              </div>
              <div className="d-flex align-items-center">
                <ControlButtons />
                <button
                  className="btn btn-warning ms-3"
                  onClick={() => handleEditAssignment(assignment._id)}
                >
                  Edit
                </button>
                <IoTrash
                  className="fs-4 text-danger ms-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(assignment._id)}
                />
              </div>
              <FaCheckCircle className="text-success fs-4 me-3" />
              <BiDotsVerticalRounded className="fs-4" />
            </li>
          ))
        ) : (
          <li>No assignments found for this course.</li>
        )}
      </ul>
    </div>
  );
}
