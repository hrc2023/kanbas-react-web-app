import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
export default function Assignments() {
    return (
      <div id="wd-assignments" className="text-nowrap">
        <div className="d-flex align-items-center" style={{ gap: "8px" }}>
        <input id="wd-search-assignment" style={{ height: "48px" }} placeholder="🔍Search for Assignments"/>      
        
        <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment</button>  

        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group</button>  
        </div>

      <div style={{ marginTop: "20px", marginBottom: "20px" }} >
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS 40% of Total <button>+</button>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <LessonControlButtons /> 
            <div style={{ marginLeft: "35px" }}>
            <p>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00 am | 
            <br></br><strong>Due</strong> May 13 at 11:59pm | 100pts </p>
            </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124">
              A2 - CSS + BOOTSTRAP
            </a>
            <LessonControlButtons /> 
            <div style={{ marginLeft: "35px" }}>
            <p>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00 am | 
            <br></br><strong>Due</strong> May 20 at 11:59pm | 100pts </p>
            </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124">
              A3 - JAVASCRIPT + REACT
            </a>
            <LessonControlButtons /> 
            <div style={{ marginLeft: "35px" }}>
            <p>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00 am | 
            <br></br><strong>Due</strong> May 27 at 11:59pm | 100pts </p>
            </div>
            </li>
          </ul>
        </li>
      </ul> </div>
    </div>
  );}
  