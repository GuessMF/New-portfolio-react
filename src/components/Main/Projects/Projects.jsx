import {React, useState} from "react";
import style from "./Projects.module.scss";
import Example from "../../Example/Example";
import {projects} from "../../../helpers/projectList";

import uuid from "react-uuid";

export default function Projects() {
  const [click, setClick] = useState(false);

  return (
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Projects</h1>
      </div>
      <div className={style.example_works}>
        {projects.map((project) => {
          return (
            <Example
              key={uuid()}
              title={project.title}
              img={project.img}
              gitHubLink={project.gitHubLink}
              stack={project.stack}
              stackIcon={project.stackIcon}
            />
          );
        })}

        {/* 
        {click && <Example />} */}
      </div>
      <div className={style.bottom_button}>
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          See {click ? "few" : "more"}
        </button>
      </div>
    </div>
  );
}
