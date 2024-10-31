import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import * as db from "./Database";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const userCourses =
    currentUser && enrollments
      ? courses.filter((course) =>
          enrollments.some(
            (enrollment) =>
              enrollment?.user === currentUser._id &&
              enrollment?.course === course._id
          )
        )
      : [];

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Only show the new course form and update button for FACULTY users */}
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="form-control mb-2"
          />
          <textarea
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            className="form-control mb-2"
          />
          <hr />
        </>
      )}

      <div id="wd-dashboard-courses" className="container-fluid">
        <h2 id="wd-dashboard-published" className="text-center my-4">
          Published Courses ({userCourses.length})
        </h2>
        <hr />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {userCourses.map((course) => (
            <div
              className="wd-dashboard-course col"
              key={course._id}
              style={{ width: "270px", marginBottom: "30px" }}
            >
              <div className="card rounded-3 overflow-hidden shadow-sm">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img
                    src={course.image || "/images/c4.png"}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-description card-text">
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>

                    {/* Only show delete and edit buttons for FACULTY users */}
                    {currentUser?.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
