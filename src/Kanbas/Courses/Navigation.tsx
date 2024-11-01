import { Link, useLocation } from "react-router-dom";
import * as db from "../Database";

export default function CoursesNavigation() {
  const courses = db.courses;
  const { pathname } = useLocation();

  // Find the current course based on the pathname
  const course = courses.find((c) => pathname.includes(c._id));
  
  if (!course) return null; // Don't render if no course matches the current path

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${course._id}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${course._id}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${course._id}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${course._id}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${course._id}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${course._id}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${course._id}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${course._id}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item text-center border border-0
            ${pathname.includes(link.label) ? "text-black active" : "text-danger"}`}
        >
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
