import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons"; 

export default function Modules() {
  return (
    <div className="modules-container">
      <div className="controls mb-4">
        <button className="btn btn-secondary me-2">Collapse All</button>
        <button className="btn btn-secondary me-2">View Progress</button>
        <button className="btn btn-secondary me-2">Publish All</button>
        <button className="btn btn-primary">+ Module</button>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModulesControls />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">

              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>

              <LessonControlButtons />
            </li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Introduction to the course
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Learn what is Web Development
              </li>
            </ul>

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
      
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">READING</span>
             
              <LessonControlButtons />
            </li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Full Stack Developer - Chapter 1 - Introduction
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Full Stack Developer - Chapter 2 - Creating Us
              </li>
            </ul>

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">

              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
         
              <LessonControlButtons />
            </li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Introduction to Web Development
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Creating an HTTP server with Node.js
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Creating a React Application
              </li>
            </ul>
          </ul>
        </li>

    
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
      
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
       
            <ModulesControls />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">

              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
   
              <LessonControlButtons />
            </li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Learn how to create user interfaces with HTML
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Deploy the assignment to Netlify
              </li>
            </ul>

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
      
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
    
              <LessonControlButtons />
            </li>
            <ul className="wd-content list-group">
              <li className="wd-content-item list-group-item p-3 ps-1">
                Introduction to HTML and the DOM
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Formatting Web content with Headings
              </li>
              <li className="wd-content-item list-group-item p-3 ps-1">
                Formatting content with Lists and Tables
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  );
}
