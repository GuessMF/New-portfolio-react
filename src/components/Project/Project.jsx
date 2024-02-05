import React from "react";
import style from "./Project.module.scss";
import github_img from "./images/github.webp";
import githubpages_img from "./images/githubpages.webp";
import {useParams} from "react-router-dom";
import {projects} from "../../helpers/projectList";
import {useTranslation} from "react-i18next";

export default function Project() {
  const {id} = useParams();
  const project = projects[id];
  const {t, i18n} = useTranslation();
  return (
    <div className={style.main}>
      <div className={style.main_wrapper}>
        <h1>{project.title}</h1>

        <div className={style.project_preview}>
          <img src={project.img} alt=""></img>
        </div>
        <div className={style.project_skills}>
          <span>
            {t("stack")} <h3>{project.stack}</h3>
          </span>
          <p>{t(project.description)}</p>
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
