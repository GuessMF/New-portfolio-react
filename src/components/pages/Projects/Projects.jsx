import {React, useState} from "react";
import style from "./Projects.module.scss";
import Example from "../../Example/Example";
import {projects} from "../../../helpers/projectList";

import uuid from "react-uuid";

export default function Projects() {
  const categories = ["All", "Landings", "JS", "TS", "React"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Projects</h1>
        <div className={style.title_bar}>
          {categories.map((value, i) => (
            <li
              key={uuid()}
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? style.active : ""}
            >
              {value}
            </li>
          ))}
        </div>
        <div className={style.dropdown}>
          <button>{categories[activeIndex]}</button>
          <div className={style.dropdown_content}>
            {categories.map((value, i) => (
              <li
                key={uuid()}
                onClick={() => setActiveIndex(i)}
                className={activeIndex === i ? style.active : ""}
              >
                {value}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={style.example_works}>
        {activeIndex === 0
          ? projects.map((project, index) => {
              return (
                <Example
                  key={uuid()}
                  title={project.title}
                  img={project.img}
                  gitHubLink={project.gitHubLink}
                  stack={project.stack}
                  stackIcon={project.stackIcon}
                  index={index}
                />
              );
            })
          : projects.map((project, index) => {
              return project.category === categories[activeIndex] ? (
                <Example
                  key={uuid()}
                  title={project.title}
                  img={project.img}
                  gitHubLink={project.gitHubLink}
                  stack={project.stack}
                  stackIcon={project.stackIcon}
                  index={index}
                />
              ) : (
                ""
              );
            })}
      </div>
      <div className={style.bottom_button}></div>
    </div>
  );
}
// return (
//   <Example
//     key={uuid()}
//     title={project.title}
//     img={project.img}
//     gitHubLink={project.gitHubLink}
//     stack={project.stack}
//     stackIcon={project.stackIcon}
//     index={index}
//   />
// );
