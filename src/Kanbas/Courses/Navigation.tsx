import { Link } from "react-router-dom";
import { useState } from "react";

export default function CoursesNavigation() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${activeLink === "Home" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Home")}
      >
        Home
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item border border-0 ${activeLink === "Modules" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Modules")}
      >
        Modules
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${activeLink === "Piazza" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Piazza")}
      >
        Piazza
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${activeLink === "Zoom" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Zoom")}
      >
        Zoom
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${activeLink === "Assignments" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Assignments")}
      >
        Assignments
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${activeLink === "Quizzes" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("Quizzes")}
      >
        Quizzes
      </Link>
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={`list-group-item border border-0 ${activeLink === "People" ? "text-black active" : "text-danger"}`}
        onClick={() => setActiveLink("People")}
      >
        People
      </Link>
    </div>
  );
}
