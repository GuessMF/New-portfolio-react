import React from "react";
import style from "./Project.module.scss";
import github_img from "./images/github.png";
import githubpages_img from "./images/githubpages.png";
import {useParams} from "react-router-dom";
import {projects} from "../../helpers/projectList";

export default function Project() {
  const {id} = useParams();
  const project = projects[id];

  return (
    <div className={style.main}>
      <div className={style.main_wrapper}>
        <h1>{project.title}</h1>

        <div className={style.project_preview}>
          <img src={project.img} alt=""></img>
        </div>
        <div className={style.project_skills}>
          <span>
            Skills: <h3>{project.stack}</h3>
          </span>
        </div>
        <div className={style.buttons}>
          <div
            className={style.gitHubLink}
            onClick={() => (window.location = project.gitHubLink)}
          >
            <img src={github_img} alt="github"></img>
            <h3>GitHub Repo</h3>
          </div>
          <div
            className={style.siteLink}
            onClick={() => (window.location = project.link)}
          >
            <img src={githubpages_img} alt="githubpages"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
