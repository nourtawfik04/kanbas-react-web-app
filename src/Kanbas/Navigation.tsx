import { AiOutlineDashboard } from "react-icons/ai";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img
          src="/images/northeastern.svg"
          width="75px"
          alt="Northeastern University"
        />
      </a>
      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item bg-black text-center border-0 text-white"
        }
      >
        <FaRegCircleUser className="fs-1" />
        Account
      </NavLink>
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard
      </NavLink>
      <NavLink
        to="/Kanbas/Courses/Assignments"
        id="wd-course-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        Courses
      </NavLink>
      <NavLink
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <CiCalendar className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>
      <NavLink
        to="/#/Labs/Lab1"
        id="wd-labs-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <CiSettings className="fs-1 text-danger" />
        <br />
        Labs
      </NavLink>
    </div>
  );
}
