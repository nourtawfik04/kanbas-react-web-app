import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database"; 

export default function Modules() {
  const { cid } = useParams(); 
  const modules = db.modules; 

  return (
    <div className="modules-container">
      <div className="controls mb-4">
        <button className="btn btn-secondary me-2">Collapse All</button>
        <button className="btn btn-secondary me-2">View Progress</button>
        <button className="btn btn-secondary me-2">Publish All</button>
        <button className="btn btn-primary">+ Module</button>
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {module.name} <ModulesControls />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      <span className="wd-title">{lesson.name}</span>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
