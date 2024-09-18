export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-select-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
            <select id="wd-select-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-select-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>

        <tr>
          <label>Online Entry Options</label>
          <br />

          <input type="checkbox" name="check-entry" id="wd-text-entry" />
          <label htmlFor="wd-chkbox-comedy">Text Entry</label>
          <br />

          <input type="checkbox" name="check-entry" id="wd-website-url" />
          <label htmlFor="wd-chkbox-drama">Website URL</label>
          <br />

          <input type="checkbox" name="check-entry" id="wd-media-recordings" />
          <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
          <br />

          <input type="checkbox" name="check-entry" id="wd-student-annotation" />
          <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
          <br />

          <input type="checkbox" name="check-entry" id="wd-file-upload" />
          <label htmlFor="wd-chkbox-scifi">File Uploads</label>
        </tr>

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" placeholder="Everyone" />
          </td>
        </tr>

        <tr>
          <label htmlFor="wd-due-date"> Due </label>
          <br />
          <input type="date" id="due-date" value="2024-13-05" />
          <br />
        </tr>

        <tr>
          <label htmlFor="wd-available-from"> Available from </label>
          <label htmlFor="wd-text-available-until"> Until </label>
          <br />
          <input type="date" id="wd-available-from" value="2024-06-05" />
          <input type="date" id="wd-available-until" value="2024-20-05" />
          <br />
        </tr>
      </table>
    </div>
  );
}
