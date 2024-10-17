import { Link } from "react-router-dom";
import { courses } from "./Database";

export default function Dashboard() {
  // const courses = [
  //   {
  //     id: 1234,
  //     title: "React JS",
  //     term: "Full Stack software developer",
  //     imgSrc: "/images/c2.png",
  //   },
  //   {
  //     id: 1235,
  //     title: "Algorithms",
  //     term: "MLA Researcher",
  //     imgSrc: "/images/c2.png",
  //   },
  //   {
  //     id: 1236,
  //     title: "OOD",
  //     term: "Software Engineer",
  //     imgSrc: "/images/c3.png",
  //   },
  //   {
  //     id: 1237,
  //     title: "Database Design",
  //     term: "Data Analyst",
  //     imgSrc: "/images/c4.png",
  //   },
  //   {
  //     id: 1238,
  //     title: "Fundies",
  //     term: "Back-End Software Engineer",
  //     imgSrc: "/images/c5.png",
  //   },
  //   {
  //     id: 1239,
  //     title: "Co-op Class",
  //     term: "Product Designer",
  //     imgSrc: "/images/c6.png",
  //   },
  //   {
  //     id: 1240,
  //     title: "Discrete Structures",
  //     term: "Electrical Engineer",
  //     imgSrc: "/images/c6.png",
  //   },
  // ];
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title" className="text-center my-4">
        Dashboard
      </h1>
      <hr />

      <h2 id="wd-dashboard-published" className="my-4">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {courses.map((course) => (
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
                    src={course.imgSrc || "/images/c4.png"} 
                    width="100%"
                    height={160}
                    alt={course.name} 
                  />
                  <div className="card-body text-center">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>

                    <p className="wd-dashboard-course-title card-text">
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
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