import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import * as modulesClient from "./client";
import * as coursesClient from "../client";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

    const saveModule = async (module: any) => {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    };

    const removeModule = async (moduleId: string) => {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    };

    const createModuleForCourse = async () => {
      if (!cid) return;
      const newModule = { name: moduleName, course: cid };
      const module = await coursesClient.createModuleForCourse(cid, newModule);
      dispatch(addModule(module));
    };

    const fetchModules = async () => {
      const modules = await coursesClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    useEffect(() => {
      fetchModules();
    }, []);


  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <button className="btn btn-secondary me-2">Collapse All</button>
          <button className="btn btn-secondary me-2">View Progress</button>
          <button className="btn btn-secondary me-2">Publish All</button>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        >
          + Module
        </button>
      </div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
      <ul id="wd-modules" className="list-group list-group-flush w-100">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module._id}
              className="list-group-item p-0 mb-3 border border-gray rounded w-100"
            >
              <div className="d-flex align-items-center justify-content-between p-3 bg-secondary">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && <span>{module.name}</span>}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>

              {module.lessons && (
                <ul className="list-group list-group-flush">
                  {module.lessons.map(
                    (lesson: {
                      _id: React.Key | null | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined;
                    }) => (
                      <li
                        key={lesson._id}
                        className="list-group-item d-flex align-items-center p-2"
                      >
                        <BsGripVertical className="me-2 fs-5" />
                        <span className="wd-title">{lesson.name}</span>
                        <LessonControlButtons />
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
