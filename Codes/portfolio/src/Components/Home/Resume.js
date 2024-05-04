import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,faUserGraduate} from '@fortawesome/free-solid-svg-icons';


export default function Resume() {
  return (
    <article class="resume active" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
          <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">

        <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Sushila Devi Bansal College of Engineering & Technology
            </h4>

            <span>2021-2025</span>

            <p class="timeline-text">
              Joined Bachelor of Technology in Information Technology .
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              CM Rise Higher Secondary School - Mhowgaon
            </h4>

            <span>2020-2021</span>

            <p class="timeline-text">
            I acquired fundamental knowledge Physics-Chemistry-Mathematics during my
              Higher Secondary Education.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              CM Rise Higher Secondary School - Mhowgaon
            </h4>

            <span>2018-2019</span>

            <p class="timeline-text">
            I acquired fundamental knowledge during my
              Higher Secondary Education.
            </p>
          </li>      

        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
          <FontAwesomeIcon icon={faBriefcase} />
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Open Source Contributer</h4>

            <span>May 2024 — Present</span>

            <p class="timeline-text">
              I do an Open Source Contributions and participate in Open Source events also.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Web Developer Intern</h4>

            <span>Aug 2023 — Sep 2023</span>

            <p class="timeline-text">
             •	Optimized frontend.<br/>
•	Revamped UI/UX 

            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">JavaScript</h5>
              <data value="70">70%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Java</h5>
              <data value="70">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">MySQL</h5>
              <data value="70">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">React</h5>
              <data value="70">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Node js</h5>
              <data value="70">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">DSA IN JAVA</h5>
              <data value="70">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
