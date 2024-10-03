export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      </div>
      <br />
      <textarea id="wd-description" className="form-control">
        The assignment is available online. Submit a link to the landing page of
        your web application running on Netlify.
      </textarea>
      <br />
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="wd-points" className="form-label fw-bold me-2">
            Points
          </label>
          <input
            id="wd-ppoints"
            className="form-control"
            value={100}
            style={{ width: "100px" }}
          />
        </div>
        <br />
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="wd-select-group" className="form-label fw-bold me-2">
            Assignment Group
          </label>
          <select
            id="wd-select-group"
            className="form-select"
            style={{ width: "200px" }}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
        <br />
        <div className="d-flex align-items-center mb-3">
          <label
            htmlFor="wd-select-display-grade-as"
            className="form-label fw-bold me-2"
          >
            Display Grade As
          </label>
          <select
            id="wd-select-display-grade-as"
            className="form-select"
            style={{ width: "200px" }}
          >
            <option value="Percentage">Percentage</option>
          </select>
        </div>
        <br />
        <div className="d-flex align-items-center mb-3">
          <label
            htmlFor="wd-select-submission-type"
            className="form-label fw-bold me-2"
          >
            Submission Type
          </label>
          <select
            id="wd-select-submission-type"
            className="form-select"
            style={{ width: "200px" }}
          >
            <option value="Online">Online</option>
          </select>
        </div>

        <br />
<div className="col-md-8">
          <label className="form-label fw-bold">Online Entry Options</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
            <label className="form-check-label" htmlFor="wd-website-url">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
            <label className="form-check-label" htmlFor="wd-file-upload">
              File Uploads
            </label>
          </div>
        </div>
        <br />
<div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label fw-bold">
            Due
          </label>
          <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
        </div>
        <br />
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label fw-bold">
            Available From
          </label>
          <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T00:00" />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label fw-bold">
            Until
          </label>
          <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T00:00" />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-secondary">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
