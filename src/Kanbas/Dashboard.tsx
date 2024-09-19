import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c1.png" alt="" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c2.png" alt="" width={200} />
            <div>
              <h5>C3000 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Researcher
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c3.png" alt="" width={200} />
            <div>
              <h5>CS3500 OOD</h5>
              <p className="wd-dashboard-course-title">
                Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c4.png" alt="" width={200} />
            <div>
              <h5>CS3214 Database Design</h5>
              <p className="wd-dashboard-course-title">
                Data Analyst
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c5.png" alt="" width={200} />
            <div>
              <h5>CS2000  Fundies</h5>
              <p className="wd-dashboard-course-title">
                Back-End Software Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c6.png" alt="" width={200} />
            <div>
              <h5>CS1000 Co-op Class</h5>
              <p className="wd-dashboard-course-title">
                Product Designer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/c6.png" alt="" width={200} />
            <div>
              <h5>CS1500 Discrete Structures</h5>
              <p className="wd-dashboard-course-title">
                Electrical Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
