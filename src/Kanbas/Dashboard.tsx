import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, setEnrollments, unenrollFromCourse } from "./enrollmentReducer";
import * as enrollmentsClient from "./enrollmentClient";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrolledCourses } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(true);

  const toggleEnrollmentView = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleEnroll = async (courseId: string) => {
    try {
      await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
      dispatch(enrollInCourse(courseId));
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    try {
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
      dispatch(unenrollFromCourse(courseId));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const enrollments = await enrollmentsClient.getUserEnrollments(currentUser._id);
        const enrolledCourseIds = enrollments.map((enrollment: { course: any }) => enrollment.course);
        dispatch(setEnrollments(enrolledCourseIds));
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };
    fetchEnrollments();
  }, [currentUser._id, dispatch]);

  const isEnrolled = (courseId: string) => enrolledCourses.includes(courseId);

  const visibleCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrolledCourses.includes(course._id));

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button onClick={toggleEnrollmentView} className="float-end btn btn-primary">
          {showAllCourses ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

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
          {showAllCourses ? "All Courses" : "My Courses"} ({visibleCourses.length})
        </h2>
        <hr />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {visibleCourses.map((course) => (
            <div
              className="wd-dashboard-course col"
              key={course._id}
              style={{ width: "270px", marginBottom: "30px" }}
            >
              <div className="card rounded-3 overflow-hidden shadow-sm">
                <Link
                  className={`wd-dashboard-course-link text-decoration-none ${
                    currentUser?.role === "STUDENT" && !isEnrolled(course._id)
                      ? "disabled-link"
                      : "text-dark"
                  }`}
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  onClick={(e) => {
                    if (
                      currentUser?.role === "STUDENT" &&
                      !isEnrolled(course._id)
                    ) {
                      e.preventDefault();
                    }
                  }}
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
                    {currentUser?.role === "STUDENT" && (
                      <button
                        className={`btn ${
                          isEnrolled(course._id) ? "btn-danger" : "btn-success"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          isEnrolled(course._id)
                            ? handleUnenroll(course._id)
                            : handleEnroll(course._id);
                        }}
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    {currentUser?.role === "FACULTY" && (
                      <button
                        className="btn btn-danger mt-2"
                        onClick={(e) => {
                          e.preventDefault();
                          if (window.confirm(`Are you sure you want to delete the course "${course.name}"?`)) {
                            deleteCourse(course._id);
                          }
                        }}
                      >
                        Delete Course
                      </button>
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
