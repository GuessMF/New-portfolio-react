import {React, useState} from "react";
import style from "./Projects.module.scss";
import Example from "../../Example/Example";
import {projects} from "../../../helpers/projectList";
import Select from "react-select";
import "./custom-select.scss";

import uuid from "react-uuid";

export default function Projects() {
  const categories = ["All", "Landings", "JS", "TS", "React"];
  const [value, setValue] = useState(0);

  const options = categories.map((value, i) => ({
    value: value,
    label: value,
    index: i,
  }));

  return (
    <div className={style.projects}>
      <div className={style.title}>
        <h1>Projects</h1>

        <div className={style.select_bar}>
          <Select
            classNamePrefix="custom-select"
            isSearchable={false}
            name="color"
            options={options}
            placeholder="All"
            value={value}
            onChange={setValue}
            // isMulti={true}
            // isOptionSelected={true}
            //isLoading={true}
            // menuIsOpen={true}
          />
        </div>
      </div>
      <div className={style.example_works}>
        {value.index === 0 || value.index === undefined
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
              return project.category === categories[value.index] ? (
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
