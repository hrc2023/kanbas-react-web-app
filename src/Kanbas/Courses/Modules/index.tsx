import { useState } from 'react';

export default function Modules() {
  // State to track if modules are collapsed
  const [collapsed, setCollapsed] = useState(false);

  // Toggle collapse for all modules
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      {/* Collapse All and View Progress buttons */}
      <button onClick={toggleCollapse}>
        {collapsed ? 'Expand All' : 'Collapse All'}
      </button>
      <button>View Progress</button>

      {/* Modules List */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          {!collapsed && (
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">HTML Basics</li>
                  <li className="wd-content-item">Working with Tags and Elements</li>
                </ul>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}