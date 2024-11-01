export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name">
          <h5><strong>Assignment Name</strong></h5>
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description"><strong>Description</strong></label>
        <textarea id="wd-description" className="form-control" style={{ height: "150px" }}>
          The assignment is available online Submit a link to the landing page of your web application running on Netility. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>

      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="wd-points"><strong>Points</strong></label>
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-group"><strong>Assignment Group</strong></label>
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as"><strong>Display Grade as</strong></label>
          <select id="wd-display-grade-as" className="form-control">
            <option value="P">Percentage</option>
            <option value="D">Digital</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-submission-type"><strong>Submission Type</strong></label>
          <select id="wd-submission-type" className="form-control">
            <option value="ONLINE">Online</option>
            <option value="LOCAL">Local</option>
          </select>
        </div>

        <div className="col-md-6">
          <label><strong>Online Entry Options</strong></label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url" />
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-file-upload" />
            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-assign-to"><strong>Assign To</strong></label>
          <input id="wd-assign-to" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-due-date"><strong>Due</strong></label>
          <input type="date" id="wd-due" value="2024-05-13" className="form-control" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from"><strong>Available from</strong></label>
          <input type="date" id="wd-from" value="2024-05-06" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until"><strong>Until</strong></label>
          <input type="date" id="wd-until" value="2024-05-13" className="form-control" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
