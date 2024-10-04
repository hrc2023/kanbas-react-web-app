import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function CoursesNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
    className="list-group rounded-0 position-fixed 
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="NEU"/></a>
    
        <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <span className="fs-1 text-white">
          <FaRegCircleUser />
        </span>
        <br />
        Account
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <span className="fs-1 text-danger">
          <AiOutlineDashboard />
        </span>
        <br />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <span className="fs-1 text-danger">
          <LiaBookSolid />
        </span>
        <br />
        Courses
      </Link>

      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
        <Link
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className="list-group-item active border border-0"
      >
        Modules
      </Link>
      <Link
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className="list-group-item active border border-0"
      >
        Piazza
      </Link>
      <Link
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className="list-group-item active border border-0"
      >
        Zoom
      </Link>
      <Link
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Assignments"
        className="list-group-item active border border-0"
      >
        Assignments
      </Link>
      <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className="list-group-item active border border-0"
      >
        Quizzes
      </Link>
      <Link
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className="list-group-item active border border-0"
      >
        Grades
      </Link>
      <Link
        id="wd-course-people-link"
        to="/Kanbas/People"
        className="list-group-item active border border-0"
      >
        People
      </Link>
      </div>
    </div>
);}
