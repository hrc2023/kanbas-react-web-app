import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
      <div id="wd-assignments" className="text-nowrap">
        <div className="d-flex align-items-center" style={{ gap: "8px" }}>
          <input id="wd-search-assignment" style={{ height: "48px" }} placeholder="🔍Search for Assignments"/>      
          
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
          </button>  

          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
          </button>  
        </div>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS 40% of Total <button>+</button>
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {assignments
                  .filter((assignment) => assignment.course === cid)
                  .map((assignment) => (
                    <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      <a
                        className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <LessonControlButtons />
                      <div style={{ marginLeft: "35px" }}>
                        <p>
                          Multiple Modules | <strong>Not available until</strong> TBD | 
                          <br /><strong>Due</strong> TBD | 100pts
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
}
