import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { id } = useParams(); 
  const location = useLocation(); 

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${id}/${link}`; 
        const isActive = location.pathname === linkPath; 

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
