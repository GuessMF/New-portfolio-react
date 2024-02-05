import {React, useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import style from "./Projects.module.scss";
import Example from "../../Example/Example";
import {projects} from "../../../helpers/projectList";
import Select from "react-select";
import "./custom-select.scss";
import {useTranslation} from "react-i18next";
import uuid from "react-uuid";

export default function Projects() {
  const springs = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
  });
  const {t, i18n} = useTranslation();
  const categories = ["All", "Landings", "JS", "TS", "React"];
  const [value, setValue] = useState(0);

  const options = categories.map((value, i) => ({
    value: value,
    label: value,
    index: i,
  }));

  return (
    <div className={style.wrapper}>
      <animated.div
        style={{
          // background: "rgba(14, 18, 41, 0.926)",
          height: "100%",
          borderRadius: "10px",
          margin: "0px 5px ",

          ...springs,
        }}
      >
        <div className={style.projects}>
          <div className={style.title}>
            <h1> {t("projects")}</h1>

            <div className={style.select_bar}>
              <Select
                classNamePrefix="custom-select"
                isSearchable={false}
                name="color"
                options={options}
                placeholder={t("all")}
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
                      commercial={project.commercial}
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
                      commercial={project.commercial}
                    />
                  ) : (
                    ""
                  );
                })}
          </div>
          <div className={style.bottom_button}></div>
        </div>
      </animated.div>
    </div>
  );
}
