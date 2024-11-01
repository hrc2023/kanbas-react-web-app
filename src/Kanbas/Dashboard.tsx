import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
              <img src="/images/reactjs.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1250/Home">
              <img src="/images/webdev.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1250 Web Development
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Front-end Software Developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1200/Home">
              <img src="/images/pythonintro.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1200 Introduction to Python
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Introduction to Python Basics
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1210/Home">
              <img src="/images/C.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1210 Introduction to C
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    C Basics
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1220/Home">
              <img src="/images/Java.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1220 Introduction to Java
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Object-oriented Design
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1230/Home">
              <img src="/images/C++.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1230 Introduction to C++
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Back-end Software Developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1300/Home">
              <img src="/images/ML.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1300 Mahine Learning
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Machine Learning Basics
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1550/Home">
              <img src="/images/GD.jpg" width="100%" height={160}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1550 Game AI Development
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Game AI Mechanics 
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
